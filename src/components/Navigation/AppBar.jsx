import React from 'react';
import { Link } from "gatsby";
import Helmet from "react-helmet";
import PropTypes from 'prop-types';
import imageLogo from '../../images/rva-logo.jpg';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';

// @material-ui/icons
import { Phone, Equalizer } from "@material-ui/icons";

const lightColor = 'rgba(255, 255, 255, 0.7)';

const styles = theme => ({
  appBar: {
    backgroundColor: '#ffffff',
    color: '#555555',
    border: '0',
    padding: '0.625rem 0',
    boxShadow: '0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15)',
    marginBottom: '20px',
    paddingLeft: '0.5rem',
    paddingRight: '0.5rem'
  },
  link: {
    textDecoration: 'none',
    color: lightColor,
    '&:hover': {
      color: theme.palette.common.white,
    },
  },
  logo: {
    width: 'auto',
    height: '52px',
    [theme.breakpoints.up('md')]: {
      height: '72px',
    },
  },
  toolbar: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  branding: {
    flex: '1',
  },
  button: {
    padding: '0.5em',
    [theme.breakpoints.up('md')]: {
      padding: '1em',
    },
  },
  navIcon: {
    width: "20px",
    height: "20px",
    marginRight: "3px"
  },
});

function Header(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <Helmet>
        <script src="https://cdn.polyfill.io/v2/polyfill.min.js" />
      </Helmet>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <div className={classes.branding}>
            <Link to="/">
              <img src={imageLogo} className={classes.logo} />
            </Link>
          </div>
          <div>
            <Button className={classes.button} component={Link} to="/products" color="inherit">
              <Equalizer className={classes.icons} /> Products
            </Button>
            <Button className={classes.button} component={Link} to="/contact" color="inherit">
              <Phone className={classes.icons} /> Contact
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  onDrawerToggle: PropTypes.func.isRequired,
};

export default withStyles(styles)(Header);
