import React from "react"
import {Navbar, Nav,} from "react-bootstrap"

const AppNav = () => (
<Navbar style={{backgroundColor: "black", color: "white"}}>
    <Navbar.Brand  href="#home" style={{ color: "white"}}>BLO</Navbar.Brand>
    <Nav className="mr-auto" style={{color: "white"}}>
      <Nav.Link href="#home" style={{ color: "white", margin: 20}}>About</Nav.Link>
      <Nav.Link href="#features" style={{color: "white", margin: 20}}>Play with us </Nav.Link>
      <Nav.Link href="#pricing" style={{color: "white", margin: 20}}>Book</Nav.Link>
      <Nav.Link href="#features" style={{color: "white", margin: 20}}> Music</Nav.Link>

    </Nav>
  </Navbar>

)

export default AppNav