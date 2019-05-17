import React from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider, createMuiTheme, withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from '../components/Navigation/AppBar';
import Paper from '@material-ui/core/Paper';
import Parallax from '../components/Parallax/Parallax';
import Typography from '@material-ui/core/Typography';

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
    margin: "0 0 30px 0",
  },
  spacer: {
    display: 'flex',
    height: '70px',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      height: '80px',
    },
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
          <Parallax filter image={require("../images/dials.jpg")}>
            <div className={classes.container}>
              <Typography variant="h2" gutterBottom className={classes.header}>
                Contact Us
              </Typography>
              <Typography variant="body1" className={classes.title}>
                At RVA Canada, we are committed to providing exceptional customer service and support to all our clients. 
                <br /><br />If you have any questions about our company or product lines, please contact us.
              </Typography>
            </div>
          </Parallax>

          <div className={classes.appContent}>
            <main className={classes.mainContent}>
              <Paper className={classes.paper}>
                <Typography variant="h4" className={classes.paperText} gutterBottom>
                  How To Reach Us
                </Typography>
                <iframe className={classes.iframe} title="Google Maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2878.595487396556!2d-79.25419194919408!3d43.82274934936623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d6d1396cfbd3%3A0x3c2a3ab12915911!2sRVA+Canada+Limited!5e0!3m2!1sen!2sca!4v1557704343677!5m2!1sen!2sca" width="100%" height="450" frameborder="0" allowfullscreen></iframe>
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
