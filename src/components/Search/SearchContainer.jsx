import React, { Component } from "react"
import * as JsSearch from "js-search"

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
    const bookData = {
      "products": [
        {business: <a target="_blank" rel="noopener noreferrer" href="http://www.aardvark-pro.com/">Aardvark</a>, description: 'HD recording, word clock, D.As'},
        {business: <a target="_blank" rel="noopener noreferrer" href="http://www.adam-audio.de/">ADAM</a>, description: 'studio monitors'},
        {business: <a target="_blank" rel="noopener noreferrer" href="http://www.akaipro.com/">Akai Professional</a>, description: 'audio processors, digital editors'},
        {business: <a target="_blank" rel="noopener noreferrer" href="http://www.akg.com/">AKG</a>, description: 'audio processors and digital editors'},
        {business: <a target="_blank" rel="noopener noreferrer" href="http://www.alesis.com/">Alesis</a>, description: 'speakers, signal processing, recorders, Mixers'},
        {business: <a target="_blank" rel="noopener noreferrer" href="http://www.altronic.com/">Altronic</a>, description: 'dummy loads'},
        {business: <a target="_blank" rel="noopener noreferrer" href="http://www.antarestech.com/">Andrew</a>, description: 'antennas, transmission cable, connectors'},
        {business: <a target="_blank" rel="noopener noreferrer" href="http://www.aphex.com/">Aphex</a>, description: 'signal processing'},
        {business: <a target="_blank" rel="noopener noreferrer" href="http://www.apogeedigital.com/">Apogee</a>, description: 'AD/DA converters'},
        {business: <a target="_blank" rel="noopener noreferrer" href="http://www.apple.com/ca/">Apple</a>, description: 'computers,peripherals'},
        {business: <a target="_blank" rel="noopener noreferrer" href="http://www.ashly.com/">Ashly</a>, description: 'equalizers, poweramps, crossovers'},
        {business: <a target="_blank" rel="noopener noreferrer" href="http://www.atiguys.com/">ATI</a>, description: 'amplifiers, distribution amplifiers'},
        {business: <a target="_blank" rel="noopener noreferrer" href="http://www.atlassound.com/">Atlas</a>, description: 'microphone stands and booms'},
        {business: <a target="_blank" rel="noopener noreferrer" href="http://www.audio-technica.com/index2.html">Audio Technica</a>, description: 'microphones'},
        {business: <a target="_blank" rel="noopener noreferrer" href="http://www.auralex.com/">Auralex</a>, description: 'Acoustic foam & treatment'},
        {business: <a target="_blank" rel="noopener noreferrer" href="http://www.avalondesign.com/">Avalon</a>, description: 'pre-amps'},
        {business: <a target="_blank" rel="noopener noreferrer" href="http://www.avpmfg.com/">AVP</a>, description: 'patching systems'},
        {business: <a target="_blank" rel="noopener noreferrer" href="http://www.provo.ca/bl.asp">B &amp; L</a>, description: 'coaxial connectors'},
        {business: <a target="_blank" rel="noopener noreferrer" href="http://www.bagend.com/">Bag End</a>, description: 'speakers, sub-woofers, processors'},
        {business: <a target="_blank" rel="noopener noreferrer" href="http://www.belar.com/">Belar</a>, description: 'RF monitors'},
        {business: <a target="_blank" rel="noopener noreferrer" href="http://www.benchmarkmedia.com/">Bench Mark</a>, description: 'audio amplifiers and pre-amps'},
        {business: <a target="_blank" rel="noopener noreferrer" href="http://www.behringer.com/index.cfm?lang=eng">Beringher</a>, description: 'mixers, processing'},
        {business: <a target="_blank" rel="noopener noreferrer" href="http://www.powerware.ca.com/">Best</a>, description: 'see PowerWare'},
        {business: <a target="_blank" rel="noopener noreferrer" href="http://www.beyerdynamic.com/">Beyer</a>, description: 'microphones and headphones'},
        {business: <a target="_blank" rel="noopener noreferrer" href="http://www.bird-electronic.com/">Bird</a>, description: 'wattmeters, RF loads'},
        {business: <a target="_blank" rel="noopener noreferrer" href="http://www.bitheadz.com/">BitHeadz</a>, description: 'software based processors and plug-ins'},
        {business: <a target="_blank" rel="noopener noreferrer" href="http://blondertongue.com/">Blonder Tongue</a>, description: 'CATV products'},
        {business: <a target="_blank" rel="noopener noreferrer" href="http://www.bluemic.com/">Blue Microphones</a>, description: 'high quality condenser microphones'},
        {business: <a target="_blank" rel="noopener noreferrer" href="http://www.abluesky.com/">Blue Sky</a>, description: '2.1, 5.1  THX monitors'},
        {business: <a target="_blank" rel="noopener noreferrer" href="http://www.brainstormtime.com/">Brainstorm Electronics</a>, description: 'time code solutions'},
        {business: <a target="_blank" rel="noopener noreferrer" href="http://www.brtbcanada.com/">BRTB</a>, description: 'Custom cables, microphone, multi-track, interface and power cables'},
        {business: <a target="_blank" rel="noopener noreferrer" href="http://www.brycoproducts.com/">Bryco</a>, description: 'audio/video tape storage'},
        {business: <a target="_blank" rel="noopener noreferrer" href="http://www.bryston.ca/">Bryston</a>, description: 'amplifiers, pre-amps'},
        {business: <a target="_blank" rel="noopener noreferrer" href="http://www.bss.co.uk/">BSS</a>, description: 'compressors, processing'},
        {business: <a target="_blank" rel="noopener noreferrer" href="http://www.burk.com/">Burk Technology</a>, description: 'transmitter remote control'},
        {business: <a target="_blank" rel="noopener noreferrer" href="http://www.buzz-audio.com/">Buzz Audio</a>, description: 'microphone pre-amps'},
        {business: <a target="_blank" rel="noopener noreferrer" href="http://www.canare.com/">Canare</a>, description: 'microphone cable, audio/video connectors, video patch panels'},
        {business: <a target="_blank" rel="noopener noreferrer" href="http://www.clearcom.com/">Clearcom</a>, description: 'intercoms'},
        {business: <a target="_blank" rel="noopener noreferrer" href="http://www.clydesdalecases.com/">Clydesdale</a>, description: 'custom cases'},
        {business: <a target="_blank" rel="noopener noreferrer" href="http://www.coaxial.com/">Coaxial Dynamics</a>, description: 'wattmeters, dummy loads'},
        {business: <a target="_blank" rel="noopener noreferrer" href="http://www.hhb.co.uk/">Coles</a>, description: 'microphones'},
        {business: <a target="_blank" rel="noopener noreferrer" href="http://www.comrex.com/">Comrex</a>, description: 'remote consoles, frequency extenders, ISDN and POTS codecs'},
        {business: <a target="_blank" rel="noopener noreferrer" href="http://www.comtek.com/">Comtek</a>, description: 'wireless IFBs'},
        {business: <a target="_blank" rel="noopener noreferrer" href="http://www.conex-electro.com/">Conex</a>, description: 'tone generators and sensors'},
        {business: <a target="_blank" rel="noopener noreferrer" href="http://www.countryman.com/">Countryman</a>, description: 'microphones'},
        {business: <a target="_blank" rel="noopener noreferrer" href="http://www.crownaudio.com/">Crown</a>, description: 'amplifiers, PCM microphones'},
        {business: <a target="_blank" rel="noopener noreferrer" href="http://www.crownbroadcast.com/">Crown/IREC</a>, description: 'FM Transmitters'},
        {business: <a target="_blank" rel="noopener noreferrer" href="http://www.dangerousmusic.com/">Dangerous Music</a>, description: 'Summing amps, monitoring & metering'},
        {business: <a target="_blank" rel="noopener noreferrer" href="http://www.dbxpro.com/">DBX</a>, description: 'audio signal processing'},
        {business: <a target="_blank" rel="noopener noreferrer" href="http://www.ddaconsoles.com/">DDA</a>, description: 'recording and sound reinforcement consoles'},
        {business: <a target="_blank" rel="noopener noreferrer" href="http://www.delcowire.com/">Delco</a>, description: 'wires and cables'},
        {business: <a target="_blank" rel="noopener noreferrer" href="http://www.denon.com/">Denon</a>, description: 'cd cart players and recorders'},
        {business: <a target="_blank" rel="noopener noreferrer" href="http://www.dielectric.com/index.html">Dielectric</a>, description: 'TV and FM antennas, transmission hardware'},
        {business: <a target="_blank" rel="noopener noreferrer" href="http://www.digiflexcables.com/">Digiflex</a>, description: 'patchcords'},
        {business: <a target="_blank" rel="noopener noreferrer" href="http://www.digitalaudio.com/">Digital Audio Labs</a>, description: 'PC sound cards, digital editing software'},
        {business: <a target="_blank" rel="noopener noreferrer" href="http://www.dixonsystems.com/">Dixon Systems</a>, description: 'news room mixers, consoles'},
        {business: <a target="_blank" rel="noopener noreferrer" href="http://www.dk-audio.dk/">DK Audio</a>, description: 'analogue/digital master displays'},
        {business: <a target="_blank" rel="noopener noreferrer" href="http://www.dnfcontrols.com/">DNF Industries</a>, description: 'VTR controllers'},
        {business: <a target="_blank" rel="noopener noreferrer" href="http://www.dorrough.com/">Dorrough</a>, description: 'loudness audio meters'},
        {business: <a target="_blank" rel="noopener noreferrer" href="http://www.dpamicrophones.com/">DPA</a>, description: 'microphones'},
        {business: <a target="_blank" rel="noopener noreferrer" href="http://www.drawmer.com/">Drawmer</a>, description: 'dynamic signal processing'},
        {business: <a target="_blank" rel="noopener noreferrer" href="http://www.dynaudioacoustics.com/">Dynaudio Acoustics</a>, description: 'monitor speakers'},
        {business: <a target="_blank" rel="noopener noreferrer" href="http://www.emu.com/">E-MU</a>, description: 'samplers'},
        {business: <a target="_blank" rel="noopener noreferrer" href="http://www.echoaudio.com/">Echo</a>, description: 'sound cards and interfaces'},
        {business: <a target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Eimac">Eimac</a>, description: 'tubes and sockets'},
        {business: <a target="_blank" rel="noopener noreferrer" href="http://www.electro-impulse.com/">Electro-Impulse</a>, description: 'dummy loads'},
        {business: <a target="_blank" rel="noopener noreferrer" href="http://www.eviaudio.com/">Electro-Voice</a>, description: 'microphones, speakers and mixers'},
        {business: <a target="_blank" rel="noopener noreferrer" href="http://www.empiricallabs.com/">Empirical Labs</a>, description: 'Distressor, Fatso, Lil FrEQ'},
        {business: <a target="_blank" rel="noopener noreferrer" href="http://www.emu.com/">Ensoniq</a>, description: 'digital audio software'},
        {business: <a target="_blank" rel="noopener noreferrer" href="http://www.eriinc.com/">ERI</a>, description: 'FM/TV Antenna, Towers'},
        {business: <a target="_blank" rel="noopener noreferrer" href="http://www.ese-web.com/">ESE</a>, description: 'clocks and timers'},
        {business: <a target="_blank" rel="noopener noreferrer" href="http://www.eventide.com/">Eventide</a>, description: 'harmonizers, delays, signal processing'},
        {business: <a target="_blank" rel="noopener noreferrer" href="http://www.focusrite.com/">Focusrite</a>, description: 'microphone pre amps, channel strip'},
        {business: <a target="_blank" rel="noopener noreferrer" href="http://www.fostex.com/">Fostex</a>, description: 'recording equipment, headphones, speakers'},
        {business: <a target="_blank" rel="noopener noreferrer" href="http://www.ucik.com/Friend-Chip/index.htm">Friend-Chip Studio Electronics</a>, description: 'digital audio routers and format converters'},
        {business: <a target="_blank" rel="noopener noreferrer" href="http://www.furmansound.com/">Furman</a>, description: 'signal processing'},
        {business: <a target="_blank" rel="noopener noreferrer" href="http://www.futuresonics.com/">Future Sonics</a>, description: 'in-ear monitoring'},
        {business: <a target="_blank" rel="noopener noreferrer" href="http://www.gatorcases.com/">Gator</a>, description: 'cases, racks'},
        {business: <a target="_blank" rel="noopener noreferrer" href="http://www.genelec.com/">Genelec</a>, description: 'speakers'},
        {business: <a target="_blank" rel="noopener noreferrer" href="http://www.groovetubes.com/">Groove Tubes</a>, description: 'vipre microphone pre amp'},
        {business: <a target="_blank" rel="noopener noreferrer" href="http://www.hafler.com/">Hafler</a>, description: 'audio amplifiers'},
        {business: <a target="_blank" rel="noopener noreferrer" href="http://www.harris.com/">Harris Corp</a>, description: 'AM/FM/TV/IBOC Transmitters'},
        {business: <a target="_blank" rel="noopener noreferrer" href="http://www.heartechnologies.com/">Hear Technologies</a>, description: 'talk back, hear back systems'},
        {business: <a target="_blank" rel="noopener noreferrer" href="http://www.hhb.co.uk/">HHB</a>, description: 'speakers, processing, recording media'},
        {business: <a target="_blank" rel="noopener noreferrer" href="http://www.homeworthyproducts.com/">Homeworthy</a>, description: 'custom studio furniture and racks'},
        {business: <a target="_blank" rel="noopener noreferrer" href="http://www.inovon.com/">Inovonics</a>, description: 'A/V displays, processing'},
        {business: <a target="_blank" rel="noopener noreferrer" href="http://www.jampro.com/">Jampro</a>, description: 'TV and FM antennas and combiners'},
        {business: <a target="_blank" rel="noopener noreferrer" href="http://www.jblpro.com/">JBL</a>, description: 'monitor speakers'},
        {business: <a target="_blank" rel="noopener noreferrer" href="http://www.jkaudio.com/">JK Audio</a>, description: 'teleco modules, mixers'},
        {business: <a target="_blank" rel="noopener noreferrer" href="http://www.jlcooper.com/">JL Cooper</a>, description: 'control surfaces'},
        {business: <a target="_blank" rel="noopener noreferrer" href="http://www.joemeek.com/">Joemeek</a>, description: 'processing'},
        {business: <a target="_blank" rel="noopener noreferrer" href="http://www.k-m.de/">K &amp; M</a>, description: 'microphone and music stands'},
        {business: <a target="_blank" rel="noopener noreferrer" href="http://www.kamesan.info/">Kamesan</a>, description: 'location mixers'},
        {business: <a target="_blank" rel="noopener noreferrer" href="http://www.klarkteknik.com/">Klark-Teknik</a>, description: 'processing equipment'},
        {business: <a target="_blank" rel="noopener noreferrer" href="http://www.kramerelectronics.com/">Kramer</a>, description: 'switchers, DAs'},
        {business: <a target="_blank" rel="noopener noreferrer" href="http://www.lexicon.com/">Lexicon</a>, description: 'audio processing'},
        {business: <a target="_blank" rel="noopener noreferrer" href="http://www.line6.com/">Line 6</a>, description: 'POD, guitar processing and amps'},
        {business: <a target="_blank" rel="noopener noreferrer" href="http://www.littlite.com/">Littlite</a>, description: 'lamps'},
        {business: <a target="_blank" rel="noopener noreferrer" href="http://www.logitekaudio.com/">Logitek</a>, description: 'consoles, meters'},
    ]};

    this.setState({ bookList: bookData.products })
    this.rebuildIndex()
  }


  /**
   * rebuilds the overall index based on the options
   */
  rebuildIndex = () => {
    const { bookList } = this.state

    const dataToSearch = new JsSearch.Search(`business`)

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
    dataToSearch.searchIndex = new JsSearch.TfIdfSearchIndex(`business`)

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
            <div style={{ margin: `0 auto` }}>
              <label htmlFor="Search" style={{ paddingRight: `10px` }}>
                Enter your search here
              </label>
              <input
                id="Search"
                value={searchQuery}
                onChange={this.searchData}
                placeholder="Enter your search here"
                style={{ margin: `0 auto`, width: `400px` }}
              />
            </div>
          </form>
          <div>
            Number of items:
            {queryResults.length}
            <table
              style={{
                width: `100%`,
                borderCollapse: `collapse`,
                borderRadius: `4px`,
                border: `1px solid #d3d3d3`,
              }}
            >
              <tbody>
                {/* eslint-disable */}
                {queryResults.map(item => {
                  return (
                    <tr key={`row_${item.Description}`}>
                      <td
                        style={{
                          fontSize: `14px`,
                          border: `1px solid #d3d3d3`,
                        }}
                      >
                        {item.business}
                      </td>
                      <td
                        style={{
                          fontSize: `14px`,
                          border: `1px solid #d3d3d3`,
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

export default Search