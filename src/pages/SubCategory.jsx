import React, { useEffect, useMemo, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useParams, useLocation } from "react-router-dom";
import { Container, Row, Col,Image } from "react-bootstrap";
import BreadCrumbs from "../components/BreadCrumbs";
import CategoryAccordions from "../components/CategoryAccordions";
import SortBtn from "../components/SortBtn";
import {subcategoryAdImageData} from '../utils/adimage/subcategorybanneradimage';//subcategoryAdImageData

const SubCategory = ({ products }) => {
  const { category, subcategory } = useParams();
  console.log("category : ", category);
  console.log("sub category : ", subcategory);
  console.log("products : ", products);

  //for breadcrumbs
  const { pathname } = useLocation();
  console.log("pathnam:", pathname);
  const titles = pathname.split("/");
  console.log("titles", titles);
  const mainTitle = titles[1];
  const mainUrl = "/" + titles[1];
  console.log("mainTitle", mainTitle);
  console.log("mainUrl", mainUrl);
  const catTitle = titles[2];
  const catUrl = "/" + titles[1] + "/" + titles[2];
  console.log("catTitle", catTitle);
  console.log("catUrl", catUrl);
  const subcatTitle = titles[3];
  const subcatUrl = pathname;
  console.log("subcatTitle", subcatTitle);
  console.log("subcatUrl", subcatUrl);

    //sortbtn
    const [selectedSortItem, setSelectedSortItem] = useState("Discount");
    const handleDropdownSelect = (selected) => {
      setSelectedSortItem(selected);
    };
    console.log("selectedSortItem", selectedSortItem);
    
  // Filter products based on the category parameter
  let filteredProducts = subcategory
    ? products[subcategory] || [] // Use an empty array if the category is not found
    : [];
  console.log("Filtered products : ", filteredProducts.length);

  // const check = filteredProducts.find((product)=>product.productId == 599991275);
  // console.log("ckeck",check);

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
    filteredProducts = filteredProducts;
  } else if (selectedSortItem == "Discount") {
    console.log("based on discount");
    filteredProducts = filteredProducts.slice().sort((a, b) => b.discount - a.discount);
  } else if (selectedSortItem == "Popularity") {
    console.log("based on popularity");
    filteredProducts = filteredProducts.slice().sort((a, b) => b.ratings - a.ratings);
  } else if (selectedSortItem == "Price:High to Low") {
    console.log("based on ascending price");
    // filteredProducts = filteredProducts.slice().sort((a, b) => b.mrp - a.mrp);
    filteredProducts = filteredProducts.slice().sort((a, b) => findDiscount(b.mrp,b.discount) - findDiscount(a.mrp,a.discount));
  } else if (selectedSortItem == "Price:Low to High") {
    console.log("based on descending price");
    filteredProducts = filteredProducts.slice().sort((a, b) =>findDiscount(a.mrp,a.discount) - findDiscount(b.mrp,b.discount));
    // filteredProducts = filteredProducts.slice().sort((a, b) => a.mrp - b.mrp);
  } else {
    console.log("selectedSortItem is empty");
  }

    //ProductlistAdImage
    // const [subcategoryAdImage,setSubcategoryAdImage] = useState("");
  
    // useEffect(()=>{
    //   if(subcategory){
    //     console.log("subcategoryAdImageData key :",subcategory);
    //     setSubcategoryAdImage(subcategoryAdImageData[subcategory]);
    //   }
    // },[subcategory])
    // let subcategoryAdImage =""
    // if(subcatTitle){
    //   subcategoryAdImage=subcategoryAdImageData[subcatTitle]
    // }
    const subcategoryAdImage = useMemo(() => {
      if (subcatTitle) {
        return subcategoryAdImageData[subcatTitle];
      }
      // If subcatTitle is falsy, you may want to return a default value or handle it accordingly
      return defaultImage; // Replace defaultImage with your actual default value
    }, [subcatTitle, subcategoryAdImageData]);
    
  return (
    <Container fluid className="product-list-container">
      {/* First Row with Breadcrumbs */}
      <Row>
        <Col>
          <BreadCrumbs
            mainTitle={mainTitle}
            mainUrl={mainUrl}
            catTitle={catTitle}
            catUrl={catUrl}
            subcatTitle={subcatTitle}
            subcatUrl={subcatUrl}
          />
        </Col>
      </Row>
      {/* Second Row with Two Columns */}
      <Row>
        {/* Left Column with Category Accordions */}
        <Col md={3} lg={3}>
          <CategoryAccordions mainCategory={mainTitle} />
        </Col>
        {/* right column with product list */}
        <Col md={9}>
        {subcategoryAdImage && <Row>
              <Col>
                <Image
                  src={subcategoryAdImage}
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
                  category={category}
                  subcategory={subcategory}
                />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default SubCategory;
