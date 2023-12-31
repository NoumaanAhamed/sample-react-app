import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/sample3.png";
import img2 from "../assets/sample4.jpg";

const Services = () => {
  return (
    <div className="services">
      <Carousel>
        <div>
          <img src={img1} alt="Item1" />
          <p>Full Stack</p>
        </div>
        <div>
          <img src={img2} alt="Item2" />
          <p>Full Stack</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Services;
