import React from "react";
// import { useLocation } from "react-router-dom";

const MainCarousel = () => {
  // const location = useLocation();

  // Check if the current route is "/cart"
  // if (location.pathname === "/cart") {
  //   return null; // Don't render the Header component on the "Cart" page
  // }
  return (
    <>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide mt-5"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/home/maincarouse/item2.webp" className="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="/home/maincarouse/item3.webp" className="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="/home/maincarouse/item4.webp" className="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="/home/maincarouse/item5.webp" className="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img
              src="/home/maincarouse/item6.webp"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img src="/home/maincarouse/item7.webp" className="d-block w-100" alt="..." />
          </div>
         
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
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
          data-bs-target="#carouselExampleAutoplaying"
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

export default MainCarousel;