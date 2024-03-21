import React from "react";
import Slider from "react-slick";




const settings = {
  infinite: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
};

export const CategoryBanner = ({ children }) => {
  return (
    <div className="">
      <Slider {...settings}>{children}</Slider>
    </div>
  );
};