import React from "react"
import PointsOfUnity from "./PointsOfUnity"
import * as Scroll from 'react-scroll';
import blo from "./static/blo.jpg"
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import nobannowall from "./static/nobannowall.jpg"
import tree from "./static/tree_roots.jpg"
import housekeysnothandcuffs from "./static/housekeysnothandcuffs.jpg"
import daisy from "./static/daisy.png"
const About = () => (

<div>
    <div className="jumbotron" id="about" style={{backgroundColor: "white", height: 500}}> </div>
    <div className="container"> 
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <h1 style={{marginTop: -50, textAlign: "center", fontSize: 60}}>About us</h1>
    <br></br>
    {/* <Link activeClass="active"
    to="points-of-unity"
    spy={true}
    smooth={true}
    offset={-70}
    duration= {500}
>Points of Unity </Link> */}
<div className="container" style={{textAlign: "center"}}>
    <div style={{fontSize: 18}}>The Brass Liberation Orchestra makes loud on the streets to inspire, instigate, agitate, mourn, celebrate, and communicate.
     <br></br>
     We stand in solidarity with groups and movements who are working for a more just and equitable world. We are a work in progress. 
     <br></br>
     We work to build a multigender/multiracial/multigenerational group that enhances and strengthens the culture of the left.
  <br></br>
  <br></br>
     There are many issues that are important to us as a group and individually. <br></br> The band has agreed on two key areas that we prioritize
      when accepting gigs. <br></br> Our goal is to actively work to build relationships with other groups in our communities <br></br>who are organizing around these issues:
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="priorities" style={{ textAlign: "center"}}>
     <div style={{ display: "inline-block", width: 400, marginRight: 50}}>
     <img style= {{height: 250, width: 200}}src={housekeysnothandcuffs} />
      <h2>Housing Justice</h2>
      <div style={{fontSize: 16}}>One of the highest political priorities for the BLO is fighting the displacement caused by gentrification.
       We believe that everyone has a right to
           a stable home and that low-cost housing and small businesses should be protected from the boom and bust cycles of the real estate market.
                    <a href="/housing-justice"> Read more
           </a>
           </div>
           </div>
           <div style={{display:"inline-block", width: 400, verticalAlign: "top", marginLeft: 50}}>
      <img style= {{height: 250, width: 200}}src={nobannowall} />
           <h2>Immigrant Rights</h2>
      <div style={{fontSize: 16}}>In recent years, immigrants have faced devastating attacks from the federal government, 
      the media, and parts of the U.S.-born population. People have been arrested, separated from their children, and 
      "disappeared". We believe that immigrants and U.S.-born 
          people must stand together to resist these attacks.
           <a href="/immigrant-rights"> Read more
           </a>
       
          
           </div>
           </div>
           </div>
           </div>
           <br></br>
           <br></br>
           <br></br>
           <br></br>
           <div style={{textAlign: "center"}}>
           <img style={{  height: 200}}src={tree}></img>
           <div style={{fontSize: 16}}className="organizing-structure">
          <h2>Organizing Structure</h2>
          <div>
           BLO uses a modified consensus process to make decisions within the band. <br></br>We strive to create a supportive environment
            where we can all develop skills and <br></br>leadership andtake on 
           the various tasks necessary to keep the band going.
           </div>
           </div>
           </div>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<div style={{textAlign:"center"}}>
     <div id={'points-of-unity'} style={{marginLeft: "16%", marginRight: "30%", width: 750, fontSize: 16, textAlign: "center"}} > 
     <img style={{height: 200}}src={daisy}></img>
     <h2 > Points of Unity</h2>
   The members of the BLO have agreed to work together towards a common set of goals.<br></br>
         This is the core of our collective vision for the band's work but is of course a work in progress.
     
   <br></br>
   <br></br>
   <br></br>
   <h3>Music is liberation</h3>
   <div>
   Culture is a celebration of life and human creativity.<br></br> We use music and artistic expression as a response to oppressive society, <br></br>
   to sustain and build our movements, and as an expression of the world that we want to live in.
   <br></br>BLO is a group of musicians (of all levels) and cultural workers who use culture to support causes of a broadly left nature.
   </div>
 <br></br>

   <h3>Racial and Social Justice</h3>
   <div>We work to challenge and eliminate all forms of domination (racism, class oppression, sexism, hetero-sexism, cis-sexism, ageism, abilism,
        etc.) both within our group and within the broader society. We pay particular attention to racism and white supremacy as we see 
        these forms of oppression as a primary obstacle to building the just society that we all want to live in. </div>
 <br></br>
  <h3>Diversity of Political Strategy</h3>
  <div>We agree that we will work together, making political art to contribute to leftist struggles without promoting any ideological tendency on the Left over another.
       We work in the spirit of Left unity to overcome the fragmentation of the Left in the United States.</div>
 <br></br>
     
       <h3>Respect for Culture</h3>
  <div>We work for a society that respects all cultures and work to promote cross-cultural understanding, social justice and human solidarity. <br></br>We attempt to do this in a manner
       that avoids exploitation, stealing or ignorance of the world's cultures.</div>
 <br></br>
       
       <h3>Respect for the Earth</h3>
       <div>We work to reverse the trend of domination and misuse of the world's natural resources. Many of us are against capitalism because the 
           destruction of the world's environment has reached the level of ecocide</div>
 <br></br>
       
 
           </div>
           </div>
   </div>
   </div>
)
export default About