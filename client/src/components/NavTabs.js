import React from "react";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
// import "../styles/styles.css";

const styles = {
  navbar: {
    // display: "flex",
    // width: "100%",
    // padding: "0.5rem",
    // justifyContent: "space-between",
    backgroundColor: "#344E41",
    // color: "white",
    marginBottom: "2rem",
    // paddingBottom: "0.5rem",
    // paddingTop: "0.5rem",
  },
  mainLink: {
    // display: "flex",
    // alignItems: "center",
    // textDecoration: "none",
    // color: "#FAEDCD",
    // padding: ".25rem .5rem",
    // margin: ".25rem",
    // paddingRight: "2rem",
    fontSize: "2rem",
    textDecoration: "none",
    color: "#FAEDCD",
  },
  links: {
    textDecoration: "none",
    color: "#FAEDCD",
    fontSize: "1.25rem",
  },
  h1: {
    // marginTop: "0.75rem",
    // paddingLeft: "2rem",
    // color: "#FAEDCD",
  },
  collapse: {},
};

function NavTabs() {
  return (
    // <nav style={styles.navbar}>
    //   <div>
    //     <h1 className="center" style={styles.h1}>
    //       Andrew Pieratt
    //     </h1>
    //   </div>
    //   <Navbar collapseOnSelect expand="lg" bg="#FAEDCD" variant="dark">
    //     <Container className="navbar">
    //       <Navbar.Toggle />
    //       <Navbar.Collapse style={styles.collapse} id="responsive-navbar-nav">
    //         <Nav>
    //           <NavLink
    //             className="navLinks"
    //             href="#home"
    //             exact
    //             activeClassName="active"
    //             to="/"
    //           >
    //             Home
    //           </NavLink>
    //           <NavLink
    //             className="navLinks"
    //             href="#projects"
    //             exact
    //             activeClassName="active"
    //             to="/projects"
    //           >
    //             Projects
    //           </NavLink>
    //           <NavLink
    //             className="navLinks"
    //             href="#resume"
    //             exact
    //             activeClassName="active"
    //             to="/resume"
    //           >
    //             Resume
    //           </NavLink>
    //           <NavLink
    //             className="navLinks"
    //             href="#contact"
    //             exact
    //             activeClassName="active"
    //             to="/contact"
    //           >
    //             Contact
    //           </NavLink>
    //         </Nav>
    //       </Navbar.Collapse>
    //     </Container>
    //   </Navbar>
    // </nav>

    <Navbar style={styles.navbar} collapseOnSelect expand="lg" variant="dark">
      <Container>
        <Navbar.Brand>
          <NavLink
            style={styles.mainLink}
            href="#home"
            exact
            activeClassName="active"
            to="/"
          >
            Andrew Pieratt
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link>
              <NavLink
                style={styles.links}
                href="#projects"
                exact
                activeClassName="active"
                to="/projects"
              >
                Projects
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink
                style={styles.links}
                href="#resume"
                exact
                activeClassName="active"
                to="/resume"
              >
                Resume
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink
                style={styles.links}
                href="#contact"
                exact
                activeClassName="active"
                to="/contact"
              >
                Contact
              </NavLink>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavTabs;
