import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

// eslint-disable-next-line arrow-body-style
const Header = () => {
  return (
    <>
      <section id="home">
        <div className="header-div">
          <Nav>
            <NavItem>
              <NavLink href="#home">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#skills">Skills</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#projects">Projects</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#career">Career</NavLink>
            </NavItem>
          </Nav>
          <hr />
        </div>
      </section>
    </>
  );
};

export default Header;
