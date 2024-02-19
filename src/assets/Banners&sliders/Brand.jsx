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
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 768, // Breakpoint for tablets and larger mobile devices
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024, // Breakpoint for small desktops and tablets
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1280, // Breakpoint for larger desktops
        settings: {
          slidesToShow: 7,
        },
      },
    ],
  };

  const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold text-center my-4 md:text-3xl lg:text-4xl">
        Top Brands
      </h1>
      <Slider {...settings} className="mb-8">
        {logos.map((logo, index) => (
          <div key={index} className="slider-item">
            <img
              src={logo}
              alt={`Logo ${index + 1}`}
              className="logo-image bg-white max-h-20 mx-auto"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
