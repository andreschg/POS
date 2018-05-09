import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

const Sidebar = () => (
  <div id="sidebar-wrapper" className="active">
    <Navbar 
      fluid={true}
      className="full-height sidebar-nav"
    >
      <Nav>
        <NavItem className="sidebar-item"><Link to="/">Dashboard</Link></NavItem>
        <NavItem className="sidebar-item"><Link to="/order">Order</Link></NavItem>
      </Nav>
    </Navbar>
  </div>
);

export default Sidebar;