import React, {useState,useEffect} from 'react'
import './style/footer.css'
import {Link} from 'react-router-dom'
// import e from 'express'
// import { useEffect, useState } from 'react'

const Footer = () => {

  let [text , settext]=useState("")
let fulltext="order now ";
let [index,setindex]=useState(0)

useEffect(()=>{

  
if(index<fulltext.length){
  window.addEventListener("load",(e)=>{
    e.preventDefault()})
   setTimeout(() => {
        settext(text+fulltext[index])
        setindex(index+1)
    }, 500);
    // return ()=> clearTimeout(id)

}
else{
  setindex(0)
  settext("")
}
},[index,fulltext,text])
  function top(){
    window.scrollTo({top:0 , behavior:"smooth"})
  }
  // top()
  return (
    <>
    <footer className="mainfooter" role="contentinfo">
  <div className="footer-middle">
  <div className="container">
    <div className="row">
      <div className="col-md-3 col-sm-6">
        {/* <!--Column1--> */}
        <div className="footer-pad">
          <h4>Pages</h4>
          <ul className="list-unstyled">
           
            <li><Link  onClick={top} to="/">HOME</Link></li>
            <li><Link onClick={top}  to="/menu">MENU</Link></li>
            <li><Link onClick={top}  to="/contact">CONTACT US</Link></li>
            <li><Link onClick={top}  to="/about">ABOUT US</Link></li>
            <li><span  onClick={top} >TOP</span></li>
          </ul>
        </div>
      </div>
     
        <div className="col-md-3">
            <h4>Follow Us</h4>
            <ul className="social-network social-circle">
             <li><a href="https://www.facebook.com/biryanibyihm/" target="_blank" rel="noreferrer" className="icoFacebook" title="Facebook"><i className="fa fa-facebook"></i></a></li>
             <li><a href="https://www.instagram.com/biryanibyihm"  target="_blank" rel="noreferrer" className="icoInstagram" title="Instagram"><i className="fa fa-instagram"></i></a></li>
               </ul>    
        </div>
        <div className="col-md-3">
          
            <ul className="list-unstyled">
              <li><span>Call :</span><span >+91-8935898684</span> </li>
              <li><span>Write  :</span><span >biryanibyihm@gmail.com</span></li>
                          </ul>	
                   
        </div>
    </div>
    <div className="row">
        <div className="col-md-12 copy">
            <p className="text-center">&copy; Copyright 2022 - www.biryanibyihm.com  All rights reserved.</p>
        </div>
    </div>


  </div>
  </div>
</footer>

<div className="contact call">
  <li className=' rotatea'><a href="https://wa.me/+918935898684" target="_blank" rel="noreferrer"title="whatsapp" id="whatsapp"> <img src="./image/whatsapp.png" alt="" className="c-mg rotate" 
 
/> </a>
</li>
<span>{text}</span>

</div>  
    </>
  )
}

export default Footer
