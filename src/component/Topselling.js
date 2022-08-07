import React from "react";
import "./style/home.css";
let images = [
  "./ihm/bs1.jpg",
  "./ihm/bs2.jpg",
  "./ihm/bs3.jpg",
  "./ihm/bs4.jpg",
  "./ihm/bs5.jpg",
  "./ihm/bs6.jpg",
  "./ihm/bs7.jpg",
];
const Topselling = () => {
  return (
    <>
      <div className="sect">
        <h2 className="section-title my-10">BEST SELLING</h2>
      </div>
      {/* <!-- dv sta --> */}
      <div className="overflow-X" id="fig_flow">
        {images.map((e) => {
         return <div className="figure" key={e}>
            <div className="fig-card">
              <img src={e} className="fluid" alt="responsive" />
            </div>
          </div>;
        })}
      </div>
    </>
  );
};

export default Topselling;
