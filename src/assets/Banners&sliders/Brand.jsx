import React from 'react';
import Slider from 'react-slick'; 


import logo1 from "../images/apple.png";
import logo2 from "../images/realme.png";
import logo3 from "../images/sony.png";
import logo4 from "../images/mi.png";
import logo5 from "../images/sumsung.png";
import logo6 from "../images/lg.png";
import logo7 from "../images/dell.png";



export default function Brand() {
  const settings = {
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };

  const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];

  return (
    <>
    <div className=" col-10 m-auto  ">
      <h1 className="topBrands  text-black ">Top Brands</h1>
      <Slider {...settings}>
        {logos.map((logo, index) => (
          
          <div key={index} className="slider-item center align-items-center  w-full    ">
            <img src={logo} alt={`Logo ${index + 1}`} className="logo-image bg-white max-h-20 " />
          </div>
        ))}
      </Slider>
    </div>
    </>
  );
}
