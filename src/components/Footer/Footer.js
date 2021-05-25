import React from 'react';
import { Container, NavLink } from 'reactstrap';

// eslint-disable-next-line arrow-body-style
const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <span className="back-to-top">
          <NavLink href="#home" duration={1000}>
            <i className="fa fa-angle-up fa-2x" aria-hidden="true" />
          </NavLink>
        </span>
        <div className="social-links">
          <a href="https://github.com/hhyemi" rel="noopener noreferrer" target="_blank">
            <i className="fab fa-github fa-3x" />
          </a>
        </div>
        <hr />
        <p className="footer__text">© Copyright 2021. Developer portfolio - by Hyemi</p>
      </Container>
    </footer>
  );
};

export default Footer;
