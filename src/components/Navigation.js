import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

const Navigation = () => (
  <Navbar
    fixedTop={true}
  >
    <Navbar.Header >
      <Navbar.Brand>
        <span>POS</span>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav pullRight>
      <NavItem
        className="toggle-button"
      >
        <span className="glyphicon glyphicon-option-vertical"></span>
      </NavItem>
    </Nav>
  </Navbar>
)

export default Navigation;