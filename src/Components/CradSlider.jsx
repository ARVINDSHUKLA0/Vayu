import React from "react";
import "../ComponentsStyle/CardSlider.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const CardSlider = () => {
  const cardArr = [
    {
      title:"My recent experience at Vayu Spa was truly unforgettable. The unique self-guided thermal spa journey was incredibly relaxing and rejuvenating. The blend of ancient rituals and modern technology created a truly immersive experience. I highly recor snend it to anyone seeking a unique and transformative wellness escape.",
    },
    {
      title:"My recent experience at Vayu Spa was truly unforgettable. The unique self-guided thermal spa journey was incredibly relaxing and rejuvenating. The blend of ancient rituals and modern technology created a truly immersive experience. I highly recor snend it to anyone seeking a unique and transformative wellness escape.",
    },
    {
      title:"My recent experience at Vayu Spa was truly unforgettable. The unique self-guided thermal spa journey was incredibly relaxing and rejuvenating. The blend of ancient rituals and modern technology created a truly immersive experience. I highly recor snend it to anyone seeking a unique and transformative wellness escape..",
    },
    {
      title:"My recent experience at Vayu Spa was truly unforgettable. The unique self-guided thermal spa journey was incredibly relaxing and rejuvenating. The blend of ancient rituals and modern technology created a truly immersive experience. I highly recor snend it to anyone seeking a unique and transformative wellness escape..",
    },
  ];

  const cardSettings = {
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2, 
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1022,  
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="card-slider-container">
      <Slider {...cardSettings}>
        {cardArr.map((cardValue, index) => (
          <div key={index} className="card-slide">
            <p className="text-start custom-slick-par p-0">{cardValue.title}</p>
            <hr />
            <div className="d-flex justify-content-between align-items-center">
              <p className="text-start text-capitalize">Arvind</p>
              <ul className="d-flex gap-2 p-0">
                <li className="list-none">
                    <Link>
                    <i className="fa-solid fa-star text-white"></i>
                    </Link>
                </li>
                <li className="list-none">
                    <Link>
                    <i className="fa-solid fa-star text-white"></i>
                    </Link>
                </li>
                <li className="list-none">
                    <Link>
                    <i className="fa-solid fa-star text-white"></i>
                    </Link>
                </li>
                <li className="list-none">
                    <Link>
                    <i className="fa-solid fa-star text-white"></i>
                    </Link>
                </li>
              </ul>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardSlider;
