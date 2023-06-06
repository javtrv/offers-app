import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavLink from 'react-bootstrap/NavLink'
import { Link, Outlet } from 'react-router-dom'
import Logo from './Logo'

const Navigation = () => {
  return (
    <>
      <header>
        <Navbar collapseOnSelect expand="sm" className='header-navbar'>
              <Navbar.Toggle aria-controls="navbarScroll" data-bs-toggle="collapse" data-bs-target="#navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav>
                  <NavLink data-testid='nav-item-home' eventKey="1" as={Link} to="/">All offers</NavLink>
                  <NavLink data-testid='nav-item-favorites' eventKey="2" as={Link} to="/favorites">Favorite Offers</NavLink>
                </Nav>
              </Navbar.Collapse>
          </Navbar>
      </header>
      <Logo/>
      <Outlet />
    </>
  )
}

export default Navigation
