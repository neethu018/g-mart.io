import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

const SubCategory = ({ products }) => {
  const { category,subcategory } = useParams();
  console.log("category : ", category);
  console.log("sub category : ", subcategory);
  console.log("products : ", products);

  // Filter products based on the category parameter
  const filteredProducts = subcategory
    ? products[subcategory] || [] // Use an empty array if the category is not found
    : [];
  console.log("Filtered products : ", filteredProducts.length);

  // const check = filteredProducts.find((product)=>product.productId == 599991275);
  // console.log("ckeck",check);


  return (
    <Container className="product-list-container">
      <h3>{category} : {subcategory}</h3>

      <Row>
        {filteredProducts.map((product) => (
          <Col key={product.id} xs={12} md={6} lg={4}>
            <ProductCard key={product.id} product={product} category={category} subcategory={subcategory}/>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default SubCategory;
