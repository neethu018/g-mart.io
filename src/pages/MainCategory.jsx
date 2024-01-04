import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProductCard from "../components/ProductCard";
import {useLocation} from 'react-router-dom';
import BreadCrumbs from "../components/BreadCrumbs";

const MainCategory = ({ products }) => {
  const {pathname} = useLocation();
  console.log("path", pathname);
  //breadcrumbs
  const mainTitle = pathname?.substring(1);
  const mainUrl = pathname;
  
  const filteredProducts = [].concat(...Object.values(products));
  console.log("filteredProducts", filteredProducts);

  //unique productid check
  // const check = filteredProducts.find((product)=>product.productId == 599990499);
  // console.log("check",check);

  console.log("Filtered products : ", filteredProducts);

  

  function shuffleArray(array) {
    // Create a copy of the original array to avoid modifying the original array
    const shuffledArray = [...array];
  
    // Fisher-Yates Shuffle Algorithm
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
  
    return shuffledArray;
  }
  
  // Example usage:
  const shuffledArray = shuffleArray(filteredProducts);
  
  console.log(shuffledArray);
  
  return (
    <Container className="product-list-container">
      {/* First Row with Breadcrumbs */}
      <Row>
        <Col>
          <BreadCrumbs mainTitle={mainTitle} mainUrl={mainUrl} />
        </Col>
      </Row>
      {/* Second Row with Two Columns */}
      <Row>
        {shuffledArray.map((product) => (
          <Col key={product.productId} xs={12} md={6} lg={4}>
            <ProductCard key={product.productId} product={product} category={"allproducts"} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MainCategory;
