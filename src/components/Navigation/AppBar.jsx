import React from 'react';
import { Link } from "gatsby";
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
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
    marginBottom: '20px'
  },
  link: {
    textDecoration: 'none',
    color: lightColor,
    '&:hover': {
      color: theme.palette.common.white,
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
    padding: '1em',
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
      <AppBar className={classes.appBar}>
        <Toolbar>
          <div className={classes.branding}>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              RVA Canada
            </Typography>
          </div>
          <div>
            <Button className={classes.button} component={Link} to="/" color="inherit">
              <Equalizer className={classes.icons} /> Home
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
