import React, { useState } from "react";
import {
  Container,
  Carousel,
  Image,
  Row,
  Col,
  Card,
  Button,
} from "react-bootstrap";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const SmallBoxCarousal = ({ offers }) => {
  const settings = {
    className: "center",
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
    slidesToShow: offers.length > 3 ? 3 : offers.length,
    slidesToScroll: 3,
    swipeToSlide: true,
    // centerMode: true,
    // centerPadding: '60px',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: offers.length >= 3 ? 2 : offers.length,
          slidesToScroll: 3,
          infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: offers.length >= 3 ? 2 : offers.length,
          slidesToScroll: 3,
          infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: offers.length >= 3 ? 2 : offers.length,
          slidesToScroll: 2,
          infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // dots: true,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // dots: true,
        },
      },
    ],
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };
  return (
    <Col>
      {/* <div style={{width:"100%",display:"flex",justifyContent:"center"}}> */}
      {
        <Slider {...settings} style={{zIndex: -1,}}>
          {offers.map((offer, index) => (
            <div key={index} className="slick-active px-2">
              <Link to={offer.path}>
                <Image
                  src={offer.image}
                  style={{ width: "100%", height: "100%", objectFit: "fill" }}
                  alt="First slide"
                  className="hover-zoom-smallbox my-2"
                />
              </Link>
            </div>
          ))}
        </Slider>
      }
      {/* </div> */}
    </Col>
  );
};
const CustomNextArrow = (props) => (
  <div {...props} className="custom-arrow custom-next-arrow">
    <button>
      <FontAwesomeIcon icon={faArrowRight} color="black" />
    </button>
  </div>
);

const CustomPrevArrow = (props) => (
  <div {...props} className="custom-arrow custom-prev-arrow">
    <button>
      <FontAwesomeIcon icon={faArrowLeft} color="black" />
    </button>
  </div>
);
export default SmallBoxCarousal;
