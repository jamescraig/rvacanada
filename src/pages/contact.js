import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { MuiThemeProvider, createMuiTheme, withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from '../components/Navigation/AppBar';
import Paper from '@material-ui/core/Paper';
import Parallax from '../components/Parallax/Parallax';
import Typography from '@material-ui/core/Typography';
import Footer from '../components/Footer/Footer';

// @material-ui/icons
import { Phone, Mail, AlternateEmail } from "@material-ui/icons";

// core components
import GridContainer from "../components/Grid/GridContainer.jsx";
import GridItem from "../components/Grid/GridItem.jsx";

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

  grid: {
    marginTop: '1rem',
    marginBottom: '1rem',
  },
  contactBlock: {
    display: 'flex',
    margin: '1.5rem 0',
    [theme.breakpoints.up('md')]: {
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
  icons: {
    width: '60px',
    height: '60px',
  },
  iconText: {
    marginLeft: '1rem',
  },
  infoArea: {
    position: 'relative',
    width: "100%",
    padding: '0 1rem',
    margin: "0 auto",
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      maxWidth: "440px",
      textAlign: 'left',
      marginBottom: '1.5rem',
    },
  },
  emailLink: {
    color: '#555555',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
};

class RVA extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <MuiThemeProvider theme={theme}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Contact Us - RVA Canada</title>
          <link rel="canonical" href="https://rvacanada.com/contact" />
        </Helmet>
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
              <Paper elevation={3} className={classes.paper}>
                <Typography variant="h4" className={classes.paperText} gutterBottom>
                  How To Reach Us
                </Typography>
                <GridContainer className={classes.grid}>

                  <GridItem xs={12} sm={12} md={4} className={classes.infoArea}>
                    <div className={classes.contactBlock}>
                      <Mail className={classes.icons} />
                      <Typography className={classes.iconText} variant="h5">
                        Via mail:
                      </Typography>
                    </div>
                    <div>
                      <Typography variant="body1">
                        RVA Canada Limited <br />
                        74 Dynamic Drive Unit 11 <br />
                        Toronto, ON <br />
                        M1V 3Z5
                      </Typography>
                    </div>
                  </GridItem>

                  <GridItem xs={12} sm={12} md={4} className={classes.infoArea}>
                    <div className={classes.contactBlock}>
                      <Phone className={classes.icons} />
                      <Typography className={classes.iconText} variant="h5">
                        Via phone:
                      </Typography>
                    </div>
                    <div>
                      <Typography variant="body1">
                        Tel: (416) 299-6442 <br />
                        Toll Free: 1-866-782-6934 <br />
                        Toll Free Fax: 1-866-877-7025
                      </Typography>
                    </div>
                  </GridItem>

                  <GridItem xs={12} sm={12} md={4} className={classes.infoArea}>
                    <div className={classes.contactBlock}>
                      <AlternateEmail className={classes.icons} />
                      <Typography className={classes.iconText} variant="h5">
                        Via e-mail:
                      </Typography>
                    </div>
                    <div>
                      <Typography variant="body1">
                        Sales: Ian Schmidt - <a className={classes.emailLink} href="mailto:ian@rvacanada.com">ian@rvacanada.com</a> <br />
                        Siegi Purkott - <a className={classes.emailLink} href="mailto:siegi@rvacanada.com">siegi@rvacanada.com</a> <br />
                        Accounting - <a className={classes.emailLink} href="mailto:accounting@rvacanada.com">accounting@rvacanada.com</a>
                      </Typography>
                    </div>
                  </GridItem>

                </GridContainer>

                <iframe className={classes.iframe} title="Google Maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2878.595487396556!2d-79.25419194919408!3d43.82274934936623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d6d1396cfbd3%3A0x3c2a3ab12915911!2sRVA+Canada+Limited!5e0!3m2!1sen!2sca!4v1557704343677!5m2!1sen!2sca" width="100%" height="500" frameborder="0" allowfullscreen></iframe>

              </Paper>
              <Footer />
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
