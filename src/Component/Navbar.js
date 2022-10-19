
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Box2Heart} from "react-bootstrap-icons";
import { SearchHeartFill } from "react-bootstrap-icons";
function NavbarUp() {
  return (
    <Navbar collapseOnSelect expand="lg" className="navbarmain">
      <Container>
        <Navbar.Brand href="#home">Good Morning Dr Everly</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Nav className="me-end">
            <Nav.Link href="#deets" className="me-2">
              <SearchHeartFill size={27} />
            </Nav.Link>
            <Nav.Link href="#deets" className="me-5">
              <Box2Heart size={27} />
            </Nav.Link>
            <NavDropdown title="Dr EverLy" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarUp;
