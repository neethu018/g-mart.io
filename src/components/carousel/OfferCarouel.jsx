import React from "react";
// import { useLocation } from "react-router-dom";

const OfferCarousel = () => {
  // const location = useLocation();

  // Check if the current route is "/cart"
  // if (location.pathname === "/cart") {
  //   return null; // Don't render the Header component on the "Cart" page
  // }
  return (
    <>
      <div
        id="carouselExampleAutoplaying1"
        className="carousel slide mt-5"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="/home/poster/smallcaroual/item1.jpg"
              className="d-block w-50"
              alt="..."
            /> 
            <img
              src="/home/poster/smallcaroual/item1.jpg"
              className="d-block w-50 "
              alt="..."
            /> 
         
          </div>
          {/* <div class="carousel-item">
            <img
              src="/home/poster/smallcaroual/item2.jpg"
              className="d-block w-50"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="/home/poster/smallcaroual/item3.jpg"
              className="d-block w-50"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="/home/poster/smallcaroual/item4.jpg"
              className="d-block w-50"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="/home/poster/smallcaroual/item5.jpg"  
              className="d-block w-50"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="/home/poster/smallcaroual/item6.jpg"
              className="d-block w-50"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="/home/poster/smallcaroual/item7.jpg"
              className="d-block w-50"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="/home/poster/smallcaroual/item8.jpg"
              className="d-block w-50"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="/home/poster/smallcaroual/item9.jpg"
              className="d-block w-50"
              alt="..."
            />
          </div> */}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying1"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying1"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default OfferCarousel;
