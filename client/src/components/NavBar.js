
import React from "react"
import {Link} from "react-router-dom"



export default function NavBar(){

    return(
<div className="navBar">

 <nav>
  <ul>
  <li><Link to="/">Home </Link></li>
  <li><Link to ="/journals">Journal Entries</Link></li>
  <li><Link to ="/mindfulness">Mindfulness Tips</Link></li>
  <li><Link to ="/feelings">Feelings Wheel</Link></li>


  </ul>
</nav> 

</div>



    )
}