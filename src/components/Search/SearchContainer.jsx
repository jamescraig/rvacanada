import React, { Component } from "react"
import Axios from "axios"
import * as JsSearch from "js-search"
import Button from '@material-ui/core/Button';
import withStyles from '@material-ui/core/styles/withStyles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  button: {
    padding: '1rem',
    width: '100%',
  },
  textField: {
    width: '100%',
    maxWidth: '320px',
    marginBottom: '2rem',
  },
  searchWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

class Search extends Component {
  
  state = {
    bookList: [],
    search: [],
    searchResults: [],
    isLoading: true,
    isError: false,
    searchQuery: ``,
  }
  /**
   * React lifecycle method to fetch the data
   */
  async componentDidMount() {
    Axios.get(`https://rvaproducts.surge.sh/products.json`)
      .then(result => {
        const bookData = result.data
        this.setState({ bookList: bookData.products })
        this.rebuildIndex()
      })
      .catch(err => {
        this.setState({ isError: true })
        console.log(`====================================`)
        console.log(`Something bad happened while fetching the data\n${err}`)
        console.log(`====================================`)
      })
  }

  /**
   * rebuilds the overall index based on the options
   */
  rebuildIndex = () => {
    const { bookList } = this.state

    const dataToSearch = new JsSearch.Search(`id`)

    /**
     *  defines a indexing strategy for the data
     * more more about it in here https://github.com/bvaughn/js-search#configuring-the-index-strategy
     */
    dataToSearch.indexStrategy = new JsSearch.PrefixIndexStrategy()

    /**
     * defines the sanitizer for the search
     * to prevent some of the words from being excluded
     *
     */
    dataToSearch.sanitizer = new JsSearch.LowerCaseSanitizer()

    /**
     * defines the search index
     * read more in here https://github.com/bvaughn/js-search#configuring-the-search-index
     */
    dataToSearch.searchIndex = new JsSearch.TfIdfSearchIndex(`id`)

    dataToSearch.addIndex(`business`) // sets the index attribute for the data
    dataToSearch.addIndex(`description`) // sets the index attribute for the data

    dataToSearch.addDocuments(bookList) // adds the data to be searched
    this.setState({ search: dataToSearch, isLoading: false })
  }

  /**
   * handles the input change and perfom a search with js-search
   * in which the results will be added to the state
   */
  searchData = e => {
    const { search } = this.state
    const queryResult = search.search(e.target.value)
    this.setState({ searchQuery: e.target.value, searchResults: queryResult })
  }
  handleSubmit = e => {
    e.preventDefault()
  }

  render() {
    const { classes } = this.props;

    const {
      isError,
      isLoading,
      bookList,
      searchResults,
      searchQuery,
    } = this.state
    const queryResults = searchQuery === `` ? bookList : searchResults

    if (isLoading) {
      return (
        <div style={{ margin: `1.2rem 1rem 1.2rem 1rem` }}>
          <h1 style={{ marginTop: `3em`, textAlign: `center` }}>
            Getting the search all setup
          </h1>
        </div>
      )
    }
    if (isError) {
      return (
        <div style={{ margin: `1.2rem 1rem 1.2rem 1rem` }}>
          <h1 style={{ marginTop: `3em`, textAlign: `center` }}>Ohh no!!!!!</h1>
          <h3
            style={{
              marginTop: `2em`,
              padding: `2em 0em`,
              textAlign: `center`,
            }}
          >
            Something really bad happened
          </h3>
        </div>
      )
    }
    return (
      <div>
        <div style={{ margin: `0 auto` }}>
          <form onSubmit={this.handleSubmit}>
            <div className={classes.searchWrapper} style={{ display: `flex`, alignItems: `center` }}>
              <TextField
                id="Search"
                label="Enter your search here"
                className={classes.textField}
                value={searchQuery}
                onChange={this.searchData}
                margin="normal"
              />
            </div>
          </form>
          <div>
            <table
              style={{
                width: `100%`,
                borderCollapse: `collapse`,
                borderRadius: `4px`,
                border: `1px solid #ffffff`,
              }}
            >
              <tbody>
                {/* eslint-disable */}
                {queryResults.map(item => {
                  return (
                    <tr key={`row_${item.id}`}>
                      <td
                        style={{
                          fontSize: `14px`,
                          border: `1px solid #ffffff`,
                        }}
                      >
                        <Button className={classes.button} href={item.url} target="_blank" rel="noopener noreferrer" >{item.business}</Button>
                      </td>
                      <td
                        style={{
                          fontSize: `14px`,
                          border: `1px solid #ffffff`,
                        }}
                      >
                        {item.description}
                      </td>
                    </tr>
                  )
                })}
                 {/* eslint-enable */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(Search);