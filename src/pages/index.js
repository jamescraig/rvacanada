import React from 'react';
import PropTypes from 'prop-types';

//import Layout from "../components/layout"
//import SEO from "../components/seo"

import { MuiThemeProvider, createMuiTheme, withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from '../components/Navigation/AppBar';
import Paper from '@material-ui/core/Paper';
import Parallax from '../components/Parallax/Parallax';
import Typography from '@material-ui/core/Typography';
import Search from "../components/Search/SearchContainer"

import "../components/layout.css"

let theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    h5: {
      fontWeight: 500,
      fontSize: 26,
      letterSpacing: 0.5,
    },
  },
  palette: {
    primary: {
      light: '#63ccff',
      main: '#009be5',
      dark: '#006db3',
    },
  },
  shape: {
    borderRadius: 8,
  },
});

theme = {
  ...theme,
  overrides: {
    MuiDrawer: {
      paper: {
        backgroundColor: '#18202c',
      },
    },
    MuiButton: {
      label: {
        textTransform: 'initial',
      },
      contained: {
        boxShadow: 'none',
        '&:active': {
          boxShadow: 'none',
        },
      },
    },
    MuiTabs: {
      root: {
        marginLeft: theme.spacing.unit,
      },
      indicator: {
        height: 3,
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
        backgroundColor: theme.palette.common.white,
      },
    },
    MuiTab: {
      root: {
        textTransform: 'initial',
        margin: '0 16px',
        minWidth: 0,
        [theme.breakpoints.up('md')]: {
          minWidth: 0,
        },
      },
      labelContainer: {
        padding: 0,
        [theme.breakpoints.up('md')]: {
          padding: 0,
        },
      },
    },
    MuiIconButton: {
      root: {
        padding: theme.spacing.unit,
      },
    },
    MuiTooltip: {
      tooltip: {
        borderRadius: 4,
      },
    },
    MuiDivider: {
      root: {
        backgroundColor: '#404854',
      },
    },
    MuiListItemText: {
      primary: {
        fontWeight: theme.typography.fontWeightMedium,
      },
    },
    MuiListItemIcon: {
      root: {
        color: 'inherit',
        marginRight: 0,
        '& svg': {
          fontSize: 20,
        },
      },
    },
    MuiAvatar: {
      root: {
        width: 32,
        height: 32,
      },
    },
  },
  props: {
    MuiTab: {
      disableRipple: true,
    },
  },
  mixins: {
    ...theme.mixins,
    toolbar: {
      minHeight: 48,
    },
  },
};

const styles = {
  root: {
    display: 'block',
  },
  appContent: {
    display: 'flex',
    flexDirection: 'column',
  },
  mainContent: {
    padding: '1.5em 1.5em 1.5em 1.5em',
    background: '#eaeff1',
  },
  container: {
    padding: '2em',
    color: '#ffffff',
    zIndex: '20',
    [theme.breakpoints.up('md')]: {
      width: '70%',
    },
  },
  paper: {
    padding: '2em',
    margin: '-3em 0 0 0',
    zIndex: '50',
    position: 'relative',
    minHeight: '90vh',
    color: '#555555',
    [theme.breakpoints.up('md')]: {
      padding: '3rem',
    },
  },
  paperText: {
    textAlign: 'center',
  },
  header: {
    color: '#ffffff',
    [theme.breakpoints.down('md')]: {
      fontSize: '3rem',
    },
  },
  title: {
    color: '#ffffff',
  },
  iframe: {
    margin: "1.5rem 0 1rem 0",
  },
  spacer: {
    display: 'flex',
    height: '70px',
    width: '100%',
  },

  searchSpacer: {
    margin: '1rem 0',
  },
};

class RVA extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <MuiThemeProvider theme={theme}>
        <div className={classes.root}>
          <CssBaseline />
          <Header />
          <div className={classes.spacer}></div>
          <Parallax filter image={require("../images/mixer_board.jpg")}>
            <div className={classes.container}>
              <Typography variant="h2" gutterBottom className={classes.header}>
                Our passion is your success.
              </Typography>
              <Typography variant="body1" className={classes.title}>
                At RVA Canada, we are committed to providing exceptional customer service and support to all our clients. 
                <br /><br />We provide a wide range of professional audio and broadcasting products for broadcast, post production and recording studios.
              </Typography>
            </div>
          </Parallax>

          <div className={classes.appContent}>
            <main className={classes.mainContent}>
              <Paper elevation={3} className={classes.paper}>
                <Typography variant="h4" className={classes.paperText} gutterBottom>
                  Our products
                </Typography>
                <Typography variant="body1" className={classes.paperText}>
                  Please take a look at a list of our suppliers below.
                </Typography>
                <div className={classes.searchSpacer}>
                  <Search />
                </div>
              </Paper>
            </main>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

RVA.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RVA);
