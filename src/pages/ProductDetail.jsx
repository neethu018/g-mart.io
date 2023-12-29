// src/pages/ProductDetail.js
import React from "react";
import { useLocation } from "react-router-dom";
import { Container, Row, Col, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faSearch,
  faShare,
  faShareNodes,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

const ProductDetail = () => {
  // Use useLocation to access the state object
  const location = useLocation();
  const { pathname, state } = location;
  console.log("pathname", pathname);
  console.log("state", state);
  // Check if the state object exists
  if (!state || !state.product) {
    return <div>No product data available.</div>;
  }

  const product = state.product;

  return (
    <Container>
      <Row>
        <Col>
          <Image src={product.productImage[0]} alt="product image" />
        </Col>
        <Col>
          <h5>{product.brand}</h5>
          <h6>{product.shortDesc}</h6>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ display: "flex" }}>
              <FontAwesomeIcon icon={faStar} color="gold" />
              <FontAwesomeIcon icon={faStar} color="gold" />
              <FontAwesomeIcon icon={faStar} color="gold" />
              <FontAwesomeIcon icon={faStar} color="gold" />
              <FontAwesomeIcon icon={faStar} color="gold" />
              <p>{product.ratings}</p>
            </div>
            <div>
              <FontAwesomeIcon
                icon={faHeart}
                style={{ width: 20, height: 20 }}
              />
              <FontAwesomeIcon
                icon={faShareNodes}
                style={{ width: 20, height: 20 }}
              />
            </div>
          </div>
          {product.discount > 0 ? (
            <div>
              <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                <p style={{ fontSize: 20, fontWeight: "bold" }}>
                  {
                    (product.mrp - (product.mrp * (product.discount / 100)))
                      .toFixed()
                  }
                </p>
                <p style={{ color: "green" }}>{product.discount}% off</p>
              </div>
              <div>
                <p>
                  <span style={{ textDecoration: "line-through" }}>
                    M.R.P:{product.mrp}
                  </span>
                  (Incl.of. all taxes)
                </p>
              </div>
            </div>
          ) : (
            <p>M.R.P:{product.mrp}</p>
          )}
          <p>{product.description}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
