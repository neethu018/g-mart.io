import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Col, Container, Row, Card } from "react-bootstrap";
import ProductCard from "../components/ProductCard";
import SortBtn from "../components/SortBtn";
import CategoryAccordions from "../components/CategoryAccordions";

const NoProduct = () => {
  return (
    <>
      <Container className="d-flex justify-content-center align-items-center">
        <Card bg="light" text="dark" className="m-5">
          <Card.Body>
            <Card.Title>No Products Available</Card.Title>
            <Card.Text>
              Sorry, we couldn't find any products matching your search.
            </Card.Text>
            {/* You can add additional styling or content as needed */}
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

const Search = ({ products }) => {
  console.log("products", products);
  const { searchTerm } = useParams();
  if (!searchTerm) {
    return <NoProduct />;
  }
  const searchTermLower = searchTerm.toLowerCase();
  console.log("searchTerm", searchTermLower);
  //starting fetch
  let searchedProducts = products.filter(
    (product) =>
      product.shortDesc.toLowerCase().split(" ").includes(searchTermLower) &&
      product
  );

  console.log("results", searchedProducts);
  if (searchedProducts.length === 0) {
    // Display the NoProduct component when there are no search results
    return <NoProduct />;
  }
  searchedProducts.length > 0 ? console.log("true") : console.log("false");

  //sortbtn
  const [selectedSortItem, setSelectedSortItem] = useState("Discount");
  const handleDropdownSelect = (selected) => {
    setSelectedSortItem(selected);
  };
  console.log("selectedSortItem", selectedSortItem);

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
    searchedProducts = searchedProducts;
  } else if (selectedSortItem == "Discount") {
    console.log("based on discount");
    searchedProducts = searchedProducts
      .slice()
      .sort((a, b) => b.discount - a.discount);
  } else if (selectedSortItem == "Popularity") {
    console.log("based on popularity");
    searchedProducts = searchedProducts
      .slice()
      .sort((a, b) => b.ratings - a.ratings);
  } else if (selectedSortItem == "Price:High to Low") {
    console.log("based on ascending price");
    // findDiscount(140,39);
    searchedProducts = searchedProducts.slice().sort((a, b) => findDiscount(b.mrp,b.discount) - findDiscount(a.mrp,a.discount));
  } else if (selectedSortItem == "Price:Low to High") {
    console.log("based on descending price");
    searchedProducts = searchedProducts.slice().sort((a, b) =>findDiscount(a.mrp,a.discount) - findDiscount(b.mrp,b.discount));
  } else {
    console.log("selectedSortItem is empty");
  }

  return (
    <>
      {/* <Container className="product-list-container">
        <h3 className="text-muted h5">search results</h3>
        {searchedProducts.length > 0 ? (
          <Row>
            {searchedProducts.map((product) => (
              <Col key={product.productId} xs={12} md={6} lg={4}>
                <ProductCard
                  key={product.productId}
                  product={product}
                  category={"searched"}
                />
              </Col>
            ))}
          </Row>
        ) : (
          <Row>
            <Col xs={12} md={6} lg={4}>
              <p>No results found</p>
            </Col>
          </Row>
        )}
       
      </Container> */}
      <Container fluid className="product-list-container">
        {/* First Row with Breadcrumbs */}
        {/* <Row>
        <Col>
          <BreadCrumbs mainTitle={mainTitle} mainUrl={mainUrl} />
        </Col>
      </Row> */}
        {/* Second Row with Two Columns */}
        <Row>
          {/* Left Column with Category Accordions */}
          {/* <Col md={3} lg={3}>
          <CategoryAccordions mainCategory={mainTitle} />
        </Col> */}
          {/* Right column */}
          <Col md={12}>
            {/* {maincategoryBannerAdImage &&<Row>
            <Col>
              <Image
                src={maincategoryBannerAdImage}
                fluid
                rounded
                style={{ height: '200px',width:"100%",objectFit:"cover"}}
              />
            </Col>
          </Row>} */}
            <Row className=" mt-3 justify-content-end">
              <Col>
                <SortBtn
                  selectedSortItem={selectedSortItem}
                  handleDropdownSelect={handleDropdownSelect}
                />
              </Col>
            </Row>
            <Row className=" mt-3 ">
              {searchedProducts.map((product) => (
                <Col key={product.productId} xs={12} md={6} lg={4}>
                  <ProductCard
                    key={product.productId}
                    product={product}
                    category={"searched"}
                  />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Search;
