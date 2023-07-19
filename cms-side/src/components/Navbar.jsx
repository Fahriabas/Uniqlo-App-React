import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function ColorSchemesExample() {
  const forNavigate = useNavigate();

  const toProduct = (event) => {
    event.preventDefault()
    forNavigate("/")
  }

  const toCategory = (event) => {
    event.preventDefault()
    forNavigate("/category")
  }

  const toDashboard = (event) => {
    event.preventDefault()
    forNavigate("/dashboard")
  }

  const toRegister = (event) => {
    event.preventDefault()
    forNavigate("/register")
  }

  const logout = (event) => {
    event.preventDefault()
    localStorage.clear()
    forNavigate("/login")
  }


  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Ini sebuah Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={toProduct} >Product</Nav.Link>
            <Nav.Link onClick={toCategory} >Category</Nav.Link>
            <Nav.Link onClick={toDashboard} >Dashboard</Nav.Link>
            <Nav.Link onClick={toRegister} >register</Nav.Link>
            <Nav.Link onClick={logout} >logout</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;
