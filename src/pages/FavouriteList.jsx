import React, { useContext, useEffect } from "react";
// import { FavouriteContext } from "../context/FavouriteContext";
import { useAppContext } from "../context/AppContext";
import ProductCard from "../components/ProductCard";
import { Col, Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const FavouriteList = () => {
  // const { FavouriteItems, addToFavourite, removeFromFavourite } = useContext(FavouriteContext);
  //own favouritelist functionality
  const { favouriteItems, getWishlistItems, currentUser, clearWishlist } =
    useAppContext();
  console.log("favouriteitems:", favouriteItems);
  useEffect(() => {
    getWishlistItems();
    console.log("getcartitems:", favouriteItems);
  }, [currentUser]);
  return (
    <div>
      <Container>
        <Row className="mt-3">
          {favouriteItems.length == 0 ? (
            <Col>
              <div
                style={{ height: "60vh", width: "100%" }}
                className="d-flex justify-content-center align-items-center"
              >
                <div className="text-center">
                  <h5>Your wishlist is empty</h5>
                  <Link to="/" className="btn btn-primary">
                    Shop Now
                  </Link>
                </div>
              </div>
            </Col>
          ) : (
            favouriteItems.map((product) => (
              <Col key={product.productId} xs={12} md={6} lg={4} xl={3}>
                <ProductCard
                  key={product.productId}
                  product={product}
                  category={"allproducts"}
                />
              </Col>
            ))
          )}
        </Row>
        <Row>
          <Col>
            {favouriteItems.length > 0 && (
              <div className="text-center my-4">
                <button
                  className="btn btn-primary d-block"
                  style={{ width: "100%" }}
                  onClick={() => {
                    clearWishlist();
                  }}
                >
                  Clear Wishlist
                </button>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FavouriteList;
