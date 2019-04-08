import React from "react"
import {Navbar, Nav,} from "react-bootstrap"
import "./app.css"
const AppNav = () => (
<Navbar style={{backgroundColor: "black", color: "white", fontFamily: "Open Sans"}}>
    <Navbar.Brand  href="/" style={{ color: "white"}}>BLO</Navbar.Brand>
    <Nav className="mr-auto" style={{color: "white"}}>
      <Nav.Link href="/about" style={{ color: "white", margin: 20}}>About</Nav.Link>
      <Nav.Link href="/signup" style={{color: "white", margin: 20}}>Play with us </Nav.Link>
      <Nav.Link href="/gig-request" style={{color: "white", margin: 20}}>Book</Nav.Link>
      <Nav.Link href="/music" style={{color: "white", margin: 20}}> Music</Nav.Link>

    </Nav>
  </Navbar>

)

export default AppNav