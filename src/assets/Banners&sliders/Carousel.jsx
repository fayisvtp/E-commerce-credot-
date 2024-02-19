import React from 'react';
import banner1 from '../images/banner.png';
import { Link } from 'react-router-dom';


export default function Carousel() {
  return (
    <div className="carousel w-full relative overflow-hidden">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={banner1} className="w-full" alt="Banner 1" />
        <div className="absolute flex justify-between items-center transform -translate-y-1/2 left-5 right-5 top-1/2">
          <Link href="#slide3" className="btn btn-circle">❮</Link>
          <Link href="#slide2" className="btn btn-circle">❯</Link>
        </div>
      </div>
    </div>
  );
}
