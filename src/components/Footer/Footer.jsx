/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
import { withStyles } from "@material-ui/core";
import { Link } from "gatsby";
import Button from '@material-ui/core/Button';

import footerStyle from "./footerStyle.jsx";
import imageLogo from '../../images/rva-logo.jpg';

function Footer({ ...props }) {
  const { classes, whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.center}>
          <Button className={classes.button} component={Link} to="/" color="inherit">
            Home
          </Button>
          <Button className={classes.button} component={Link} to="/products" color="inherit">
            Products
          </Button>
          <Button className={classes.button} component={Link} to="/contact" color="inherit">
            Contact
          </Button>
        </div>
      </div>
      <div className={classes.container}>
        <div className={classes.right}>
          <img src={imageLogo} className={classes.footerLogo} /><br />
          &copy; {1900 + new Date().getYear()} RVA Canada Limited.
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  whiteFont: PropTypes.bool
};

export default withStyles(footerStyle)(Footer);
