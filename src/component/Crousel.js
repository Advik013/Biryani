import React ,{useState,useEffect} from 'react'
import './style/home.css'

const Crousel = () => {
// set state
let [crousel_1,setcrousel_1]=useState("./image/crousel_1.jpg")
let [crousel_2,setcrousel_2]=useState("./image/crousel.jpg")
let [crousel_3,setcrousel_3]=useState("./image/crousel_2.jpg")
let [text , settext]=useState("")
let fulltext="Welcome To BiryaniByIhm";
let [index,setindex]=useState(0)

useEffect(()=>{
if(index<fulltext.length){
    setTimeout(() => {
        settext(text+fulltext[index])
        setindex(index+1)
    }, 50);
}

},[index,fulltext,text])


     window.addEventListener("resize",()=>{
        let isMobile = window.matchMedia("screen and (max-width: 393px)").matches|| window.matchMedia("screen and (max-width: 393px)").onchange;
  // console.log(isMobile);   
  let device1 = window.matchMedia("screen and (max-width: 620px)").matches|| window.matchMedia("screen and (max-width: 620px)").onchange;
  let device2 = window.matchMedia("screen and (max-width: 820px)").matches|| window.matchMedia("screen and (max-width: 820px)").onchange;
  // console.log(isMobile);   
//   let device3 = window.matchMedia("screen and (max-width: 912px)").matches|| window.matchMedia("screen and (max-width: 912px)").onchange;
  let device4 = window.matchMedia("screen and (max-width: 440px)").matches|| window.matchMedia("screen and (max-width: 440px)").onchange;
   

     
  if (isMobile===true) {
    setcrousel_1("./image/co3.jpeg")
    setcrousel_2("./image/c01.jpeg")
    setcrousel_3("./image/c02.jpeg")
  }
  else if (device4===true) {
    setcrousel_1("./image/d02.jpeg")
    setcrousel_2("./image/A00.jpg")
    setcrousel_3("./image/A001.jpg")
  }
  else if (device1===true) {
   
  setcrousel_1("./image/d02.jpeg")
  setcrousel_2("./image/d01.jpeg")
  setcrousel_3("./image/d03.jpeg")
  }

  else if (device2===true) {
    

    setcrousel_1("../h_img/re393/c21.jpeg")
    setcrousel_2("../h_img/re393/c22.jpeg")
    setcrousel_3("../h_img/re393/c23.jpeg")



  }
  else {

    setcrousel_1("./image/crousel_2.jpg")
    setcrousel_2("./image/crousel_1.jpg")
    setcrousel_3("./image/crousel_1.jpg")
 
 
 }
     })


  return (
    <>
     <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
    <ol className="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>
    <div className="carousel-inner ">
      <div className="carousel-item active">
        <img src={crousel_2} className="d-block w-100  crouse"  id="crouse1" alt="..."/>
      </div>
      <div className="carousel-item">
        <img src={crousel_1} className="d-block w-100  crouse" id="crouse2" alt="..."/>
      </div>
      <div className="carousel-item">
        <img src={crousel_3} className="d-block w-100  crouse" id="crouse3" alt="..."/>
      </div>
    </div>
    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="sr-only">Next</span>
    </a>
  </div>

  <div className="overlay">
    {/* <!-- <div className="imagebanner"></div> --> */}
    <div className="texts">
      <span id="m-text">{text}</span>
    </div>
  </div>  
    </>
  )
}

export default Crousel
