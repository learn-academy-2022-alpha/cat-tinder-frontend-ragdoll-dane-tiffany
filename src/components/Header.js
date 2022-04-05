import React, { Component } from 'react'
import { Collapse, NavbarBrand, NavbarToggler, NavItem, NavLink, Nav, DropdownToggle, DropdownMenu, DropdownItem, UncontrolledDropdown, NavbarText, Navbar  } from 'reactstrap'



export class Header extends Component {
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
          dogtinder 🐾
        </NavbarBrand>
        <NavbarToggler onClick={function noRefCheck(){}} />
        <Collapse navbar>
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
                Index
              </NavLink>
            </NavItem>
            <UncontrolledDropdown
              inNavbar
              nav
            >
              <DropdownToggle
                caret
                nav
              >
                Options
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
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