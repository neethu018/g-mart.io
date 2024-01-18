import React from "react";
import { Carousel, Image } from "react-bootstrap";

const TopCarousal = ({ topCarousalOffer }) => {
  return (
    <Carousel className="mt-4 px-0">
      {topCarousalOffer &&
        topCarousalOffer.map((image, index) => (
          <Carousel.Item key={index} interval={image.interval}>
            {/* <ExampleCarouselImage text="First slide" /> */}
            <Image src={image.imageUrl} className="d-block w-100" />
          </Carousel.Item>
        ))}
    </Carousel>
  );
};

export default TopCarousal;
