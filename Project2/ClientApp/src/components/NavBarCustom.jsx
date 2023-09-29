import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import illustra from "./../assets/illustra-logo.jpg";
import { NavLink } from "react-router-dom";

const NavBarCustom = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <img
          src={illustra}
          width="100"
          height="100"
          className="d-inline-block align-top"
          alt="Illustra"
        />
        <Navbar.Brand href="#home">Illustra Realty Incorporated</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink className="nav-link active" to="/">
              Home
            </NavLink>
            <NavLink className="nav-link active" to="#link">
              Link
            </NavLink>
            <NavDropdown title="About" id="basic-nav-dropdown">
                          <NavDropdown.Item >
                              <NavLink to="/WhoIsIllustra">
                                  About the company
                              </NavLink>                 
                          </NavDropdown.Item>
                          {/*<NavDropdown.Item >*/}
                          {/*    <NavLink to="/WhoIsIllustra">*/}
                          {/*        Who is Illustra?*/}
                          {/*    </NavLink>*/}
                
                          {/*  </NavDropdown.Item>*/}
              {/*<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>*/}
              {/*<NavDropdown.Divider />*/}
              {/*<NavDropdown.Item href="#action/3.4">*/}
              {/*  Separated link*/}
              {/*</NavDropdown.Item>*/}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarCustom;
