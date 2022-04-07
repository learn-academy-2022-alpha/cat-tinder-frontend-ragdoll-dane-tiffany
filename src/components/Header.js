import React, { Component } from 'react'
import {
  Collapse,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  Nav,
  NavbarText,
  Navbar
} from 'reactstrap'

export class Header extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }
  render() {
    return (
      <div>
        <Navbar
          color="dark"
          container
          dark
          expand="md"
          fixed="top"
        >
          <NavbarBrand href="/">
            <span className='app-title'>barkbuds 🐾</span>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.collapse} navbar>
            <Nav
              className="me-auto"
              navbar
            >
              <NavItem>
                <NavLink href="/">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/dogindex">
                  All Dogs
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/dognew">
                  New Dog
                </NavLink>
              </NavItem>
            </Nav>
            <NavbarText>
              Find Your Dog A Buddy 🦴
            </NavbarText>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

export default Header
