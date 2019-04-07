import React from "react"
import blo from "./static/blo.jpg"
import "./app.css"
import WhoWeAre from "./WhoWeAre"
import PlayWithUs from "./PlayWithUs"
import Contact from "./Contact"

const Home = () => (
    <div className="container">
    <div className="jumbotron" style={{backgroundColor: "white"}}> </div>
   <WhoWeAre/>
   <PlayWithUs/>
   <Contact/>
   </div>
 
)

export default Home