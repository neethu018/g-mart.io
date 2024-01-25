import React from "react";
import { Carousel, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const TopCarousal = ({ topCarousalOffer }) => {
  return (
    <Carousel className="mt-4 px-0" style={{zIndex: -1,}}>
      {topCarousalOffer &&
        topCarousalOffer.map((image, index) => (
          <Carousel.Item key={index} interval={image.interval}>
            {/* <ExampleCarouselImage text="First slide" /> */}
            <Link to={image.path}>
              <Image src={image.imageUrl} className="d-block w-100" />
            </Link>
          </Carousel.Item>
        ))}
    </Carousel>
  );
};

export default TopCarousal;
