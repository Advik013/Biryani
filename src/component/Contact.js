import React,{useState,useEffect} from "react";
import "./style/contact.css";

const Contact = () => {
  let [text , settext]=useState("")
let fulltext="We are open";
let fullText="We are close";
let [index,setindex]=useState(0)

useEffect(()=>{
  const date = new Date();

  if(date.getHours()>=9&&date.getHours()<=17){
  if(index<fulltext.length){
  


  setTimeout(() => {
    settext(text+fulltext[index])
    setindex(index+1) 
}, 50)
}}
else{
  if(index<fullText.length){



  setTimeout(() => {
    settext(text+fullText[index])
    setindex(index+1)
}, 50)

}
  }

})
  return (
    <div>
      {/* <div> */}
      {/* <!-- overlay --> */}
      <div className="overlay-out">
        {/* <!-- <div className="imagebanner"></div> --> */}
        <div className="texts">
          <span id="text">Contact Us</span>
          {/* <!-- <hr> --> */}

          <p>Better yet, See us in person!</p>
          <p>
            We love our coustomers, so feel free to visit during normal business
            hour.
          </p>
          <div className="whts">
            <a
              href="https://wa.me/+918935898684"
              className="btn-whts"
              role="button"
              aria-pressed="true"
            >
              <img src="./image/whatsapp.png" alt="" /> Message us on Whatsapp
            </a>
          </div>

          <hr />

          <h3 className="dlskn" id="dlskn" style={{ font_size: "49%" }}>
            Biryani By IHM
          </h3>
        </div>
      </div>
      {/* <!--  --> */}

      <div className="embed-responsive embed-responsive-16by9">
        <video
          className="embed-responsive-item"
          src="./image/mixkit-bubbling-water-in-slow-motion-182.mp4"
          allowFullScreen
          autoPlay
          muted
          loop
        ></video>
      </div>
     

      {/* <!-- MAP -->  */}

      <div className="mapBox">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.048583197776!2d77.5159625647179!3d28.478083497806058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cea87c7f3b00f%3A0xb57297b2d5f2c978!2sAlpha%202%20Main%20Market%2C%20Block%20F%2C%20Sector%20Alpha%20II%2C%20Greater%20Noida%2C%20Uttar%20Pradesh%20201310!5e0!3m2!1sen!2sin!4v1656994860490!5m2!1sen!2sin"
          title="map"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
       {/* details */}
       <div className="d-container">
        <div className="d-container-v">

        
        <div className="open">
          <p className="font" id="cp"> Opening Hour</p>
          <p className="font" id="cp" >9:00 AM</p>
        </div>
        <div className="close-t">
          <p className="font" id="cp"> Closing Hour</p>
          <p className="font" id="cp">5:00 PM</p>
        </div>
        </div>
        <div className="auto-mesage">
          {text}
        </div>
      </div>
    </div>
  );
};

export default Contact;
