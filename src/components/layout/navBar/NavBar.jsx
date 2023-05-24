import { useState } from "react"
import { CartWidget } from "../../common/CartWidget/CartWidget"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap'
import "./navBar.css"


export const NavBar = () => {

  const [isOpen, setIsOpen] = useState(false)
  
  const toggle = () => setIsOpen(!isOpen)

  return (
    <div>
      <Navbar color='dark' dark={true} fixed='top' container='lg' expand='lg'>
        <NavbarBrand href="/" className='navTitle headerTitle'>One-Manga</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
        <Nav className="me-auto" navbar>
            <NavItem>
            <NavLink href="/productos/">Productos</NavLink>
            </NavItem>
            <NavItem>
            <NavLink href='/proximos/'>
                Próximos
            </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
                Editoriales
            </DropdownToggle>
            <DropdownMenu right>
                <DropdownItem>Ivrea</DropdownItem>
                <DropdownItem>Panini</DropdownItem>
                <DropdownItem>Ovni Press</DropdownItem>
            </DropdownMenu>
            </UncontrolledDropdown>
        </Nav>
        </Collapse>
        <CartWidget />
      </Navbar>
    </div>
  )
}
