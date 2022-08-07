import React, { useEffect, useState } from "react";
import "./style/about.css";
const image = [
  "./ihm/bs1.jpg",
  "./ihm/bs2.jpg",
  "./ihm/bs3.jpg",
  "./ihm/bs4.jpg",
  "./ihm/bs5.jpg",
  "./ihm/bs6.jpg",      "./ihm/bs7.jpg",
];
const About = () => {
  let [Display, setDisplay] = useState("none");
  let [textRead, settextRead] = useState("Read more");
  let [renderImage, setrenderImage] = useState("./ihm/bs6.jpg");

  function read() {
    if (textRead.match("Read more")) {
      setDisplay("inline-block");
      settextRead("Read less");
    } else {
      setDisplay("none");
      settextRead("Read more");
    }
  }

  useEffect(()=>{
    const intervalId= setInterval(() => {
      setrenderImage(image[Math.floor(Math.random()*image.length)])
    }, 5000);
    return ()=>clearInterval(intervalId);
  })




  return (
    <>
      <div
        style={{ background: "antiquewhite", border: "1px solid transparent" }}
      >
        <div className="section my-11">
          <div className="my-3"></div>
          <div className="my-3"></div>
          <div className="my-3"></div>
          <div className="sect">
            <h2 className="section-title">ABOUT US</h2>
          </div>

          <div className="section-subtitle-contain">
            <div className="section-subtitle">
              We love Biryani as much as you do. That’s why we’ve been helping
              them fill tables. Welcome to
              <strong>
                <span>Biryani By IHM</span>
              </strong>
            </div>
          </div>
        </div>
        {/* <!-- history --> */}
        <div className="sect">
          <h2 className="section-title my-10">HISTORY</h2>
        </div>
        <div
          className="container px-4 px30"
          style={{
            margin_bottom: "30px",
          }}
        >
          <div className="row gx-5">
            <div className="row gx-5">
              <div className="col">
                <div>
                  The{" "}
                  <strong>
                    Biryani is an evergreen classic that really needs no
                    introduction.
                  </strong>
                  India offers so much on its culinary platter but the one dish
                  Indians unanimously love indulging in is the mouth-watering
                  biryani. With local and hyperlocal variations having evolved
                  into distinctive styles of biryanis<span id="dots">...</span>
                  <div style={{ display: Display }} id="more">
                    ,one is spoilt for options when it comes to experiencing
                    this melting pot of flavours.
                    <div className="p-3">
                      AThough it may appear to be a dish indigenous to India, in
                      reality the dish originated quite far away. Biryani is
                      derived from the Persian word Birian, which means ‘fried
                      before cooking’ and Birinj, the Persian word for rice.
                      While there are multiple theories about{" "}
                      <strong> how biryani made its way to India,</strong> it is
                      generally accepted that it originated in West Asia.
                    </div>
                  </div>
                </div>
                <button onClick={read} id="myBtn">
                  {textRead}
                </button>
              </div>
            </div>
          </div>
          <div className="col a">
            <div className="p-3 border bg-light center">
              <img
                src={renderImage}
                className="img-fluid"
                id="changer_auto"
                alt="Responsive_image"
              />
            </div>
          </div>
        </div>

        {/* <!--  --> */}
      </div>
    </>
  );
};

export default About;
