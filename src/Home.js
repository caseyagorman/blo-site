import React from "react"
import blo from "./static/blo.jpg"
import "./app.css"
import {Link} from "react-router-dom"
const lineDivStyle = {textAlign: "center", marginTop: -20, marginBottom: 20}
const textBoxStyle= {display: "inline-block", textAlign: "center", width: 350, margin:15, fontSize: 16}
const linkStyle={color:"#ef0067"}

const Home = () => (

    <div className="container">
        <div className="jumbotron" style={{backgroundColor: "white"}}> </div>



        <div style={textBoxStyle}>
          
                <h3>Book</h3>
                <div style={lineDivStyle}>_______________________________</div> 
                Have an action coming up that you'd like BLO to play at? We play for free at marches,
                 strikes, or your landlord's house at 3 a.m. <Link to= "/gig-request" style={linkStyle}> Fill out a gig request form! </Link>
        <br></br>
        <br></br>
      
        
            </div>


            <div style={textBoxStyle}> 
            <h3 >Who We Are</h3>
            <div style={lineDivStyle}>_______________________________</div> 
            <div>
            The Brass Liberation Orchestra is a radical street band that stands in solidarity with groups and movements who are working for a more just and equitable world. <Link to= "/about"  style={linkStyle}> Learn more </Link> about BLO's mission and history 
            </div>
        </div>

            <div style={textBoxStyle}>  
                <h3 style={{textAlign: "center"}}>Play With Us</h3>
                <div style={lineDivStyle}>_______________________________ </div> 
                If you see us on the street, we are always open to folks coming up and playing with us. If you want to get more involved,
                <Link to= "/signup"  style={linkStyle}>  Get in touch </Link> and tell us a little bit about yourself!
                <br></br>
        <br></br>
      
            </div>
       
        

   </div>
 
)

export default Home