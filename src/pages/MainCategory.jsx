import React, { useEffect, useState } from "react";
import { Col, Container, Row,Image } from "react-bootstrap";
import ProductCard from "../components/ProductCard";
import { useLocation } from "react-router-dom";
import BreadCrumbs from "../components/BreadCrumbs";
import CategoryAccordions from "../components/CategoryAccordions";
import SortBtn from '../components/SortBtn';
import {maincategorybanneradimagedata} from '../utils/adimage/maincategorybanneradimage';

const MainCategory = ({ products }) => {
  const { pathname } = useLocation();
  console.log("path", pathname);
  //breadcrumbs
  const mainTitle = pathname?.substring(1);
  const mainUrl = pathname;

  //sortbtn
  const [selectedSortItem, setSelectedSortItem] = useState("Discount");
  const handleDropdownSelect = (selected) => {
    setSelectedSortItem(selected);
  };
  console.log("selectedSortItem", selectedSortItem);

  let filteredProducts = [].concat(...Object.values(products));
  console.log("filteredProducts", filteredProducts);

  //unique productid check
  // const check = filteredProducts.find((product)=>product.productId == 599990499);
  // console.log("check",check);

  //sortbtn filter
  const findDiscount =(mrp,discount)=>{
    const discountMrp = ((
      mrp -
      mrp * (discount / 100)
    ).toFixed())
    console.log("discountMrp:",discountMrp);
    return discountMrp
  }
  if (selectedSortItem == "All Products") {
    console.log("based on all Products sorting");
    // Example usage:
    filteredProducts = shuffleArray(filteredProducts);
  } else if (selectedSortItem == "Discount") {
    console.log("based on discount");
    filteredProducts = filteredProducts
      .slice()
      .sort((a, b) => b.discount - a.discount);
  } else if (selectedSortItem == "Popularity") {
    console.log("based on popularity");
    filteredProducts = filteredProducts
      .slice()
      .sort((a, b) => b.ratings - a.ratings);
  } else if (selectedSortItem == "Price:High to Low") {
    console.log("based on ascending price");
    // filteredProducts = filteredProducts.slice().sort((a, b) => b.mrp - a.mrp);
    filteredProducts = filteredProducts.slice().sort((a, b) => findDiscount(b.mrp,b.discount) - findDiscount(a.mrp,a.discount));
  } else if (selectedSortItem == "Price:Low to High") {
    console.log("based on descending price");
    // filteredProducts = filteredProducts.slice().sort((a, b) => a.mrp - b.mrp);
    filteredProducts = filteredProducts.slice().sort((a, b) =>findDiscount(a.mrp,a.discount) - findDiscount(b.mrp,b.discount));
  } else {
    console.log("selectedSortItem is empty");
  }

  function shuffleArray(array) {
    // Create a copy of the original array to avoid modifying the original array
    const shuffledArray = [...array];

    // Fisher-Yates Shuffle Algorithm
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }

    return shuffledArray;
  }
//ProductlistAdImage
const [maincategoryBannerAdImage,setmaincategoryBannerAdImage] = useState("");
  
useEffect(()=>{
  if(mainTitle){
    console.log("subcategoryAdImageData key :",mainTitle);
    setmaincategoryBannerAdImage(maincategorybanneradimagedata[mainTitle]);
  }
},[mainTitle])

  return (
    <Container fluid className="product-list-container">
      {/* First Row with Breadcrumbs */}
      <Row>
        <Col>
          <BreadCrumbs mainTitle={mainTitle} mainUrl={mainUrl} />
        </Col>
      </Row>
      {/* Second Row with Two Columns */}
      <Row>
        {/* Left Column with Category Accordions */}
        <Col md={3} lg={3}>
          <CategoryAccordions mainCategory={mainTitle} />
        </Col>
        {/* Right column */}
        <Col md={9}>
        {maincategoryBannerAdImage &&<Row>
            <Col>
              <Image
                src={maincategoryBannerAdImage}
                fluid
                rounded
                style={{ height: '200px',width:"100%",objectFit:"cover"}}
              />
            </Col>
          </Row>}
          <Row className=" mt-3 justify-content-end">
            <Col>
              <SortBtn
                selectedSortItem={selectedSortItem}
                handleDropdownSelect={handleDropdownSelect}
              />
            </Col>
          </Row>
          <Row className=" mt-3 ">
            {filteredProducts.map((product) => (
              <Col key={product.productId} xs={12} md={6} lg={4}>
                <ProductCard
                  key={product.productId}
                  product={product}
                  category={"allproducts"}
                />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default MainCategory;
