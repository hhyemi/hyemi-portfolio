import React, { useContext } from 'react';
import { Container, NavLink } from 'reactstrap';

// eslint-disable-next-line arrow-body-style
const Footer = () => {
  return (
    <footer className="footer navbar-static-bottom">
      <Container>
        <span className="back-to-top">
          <NavLink to="hero" duration={1000}>
            <i className="fa fa-angle-up fa-2x" aria-hidden="true" />
          </NavLink>
        </span>
        <div className="social-links">
          <a href="https://github.com/cobidev/gatsby-simplefolio" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-refresh" />
          </a>
        </div>
        <hr />
        <p className="footer__text">
          © {new Date().getFullYear()} - Template developed by{' '}
          <a href="https://github.com/cobidev" target="_blank" rel="noopener noreferrer">
            Jacobo Martínez
          </a>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
