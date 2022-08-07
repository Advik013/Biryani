import React,{useState} from 'react'
import './style/home.css'
import {Link} from 'react-router-dom'
function Navigation() {

    let[buttonClass,setButtonClass] = useState("navbar-toggler");
    let [ arialExpanded ,setarialExpanded] = useState("false")
     let [divDispaly,setdivDispaly] = useState("collapse navbar-collapse")

    function collapse(){
      if (!arialExpanded.match("false")) {
         setButtonClass("navbar-toggler collapsed");
         setarialExpanded("false");
         setdivDispaly("collapse navbar-collapse")
      }
      else{
        setButtonClass("navbar-toggler");
        setarialExpanded("true");
        setdivDispaly("collapse navbar-collapse ")
      }
    }



  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
    <Link className="navbar-brand"  to="\">
      <img src="./image/biryanbyhm.png" alt="" className="logo"/>
      {/* <!-- <div className="span"></div> --> */}

    </Link>
    <button className={buttonClass} type="button" data-toggle="collapse" data-target="#navbarNav"
      aria-controls="navbarNav" aria-expanded={arialExpanded} aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className={divDispaly} id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <Link className="nav-link"  to="/" onClick={collapse} >HOME <span className="sr-only">(current)</span></Link>
        </li>

        <li className="nav-item active">
          <Link className="nav-link" to="/menu" onClick={collapse}  >MENU</Link>
        </li>
        {/* <!-- <li className="nav-item active">
          <Link className="nav-link" to="\contact">CONTACT US</a>
        </li> --> */}
        <li className="nav-item active">
          <Link className="nav-link " to="/about" tabIndex="-1" aria-disabled="false" onClick={collapse} >ABOUT US</Link>
        </li>
        <li className="nav-item active">
          <Link className="nav-link " to="/contact" tabIndex="-1" aria-disabled="false"onClick={collapse} >CONTACT US</Link>
        </li>
      </ul>
    </div>
  </nav>
  )
}

export default Navigation
