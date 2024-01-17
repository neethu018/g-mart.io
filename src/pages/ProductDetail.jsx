// src/pages/ProductDetail.js
import React from "react";
import { useLocation,} from "react-router-dom";
import { Container, Row, Col, Image,Button,Carousel} from "react-bootstrap";
import { CartContext } from "../context/CartContext";
import { useContext,useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faShareNodes,
  faStar,
  faBank,
  faGift,
  faReceipt
} from "@fortawesome/free-solid-svg-icons";
import BreadCrumbs from "../components/BreadCrumbs";

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
  const { cartItems, addToCart } = useContext(CartContext);
  const product = state.product;
  //add to cart
  const handleAddToCart = () => {
    addToCart(product);
  };

  //for breadcrumbs
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
//useEffect to scroll top, once page reload
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
return (
    <Container className='mt-2' fluid>
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
      <Row>
        <Col className="fixed-row" style={{marginLeft:"30px",}}>
        <div className="d-flex justify-content-center" style={{marginRight:"130px"}}>
            <Carousel
              style={{ width: "500px",
               height: "400px",
               borderRadius:"20px",
               boxShadow:"0px 0px 10px 5px rgba(0, 0, 0, 0.1)" 
              }}
              fade
              data-bs-theme="light"
            >
              {product.productImage.map((image, index) => (
                <Carousel.Item key={index}>
                  <Image
                    className="d-block"
                    src={image}
                    alt={`Product Image ${index + 1}`}
                    style={{
                       objectFit: "fill", 
                       height: "400px",
                       width:"500px",
                      }}
                    />
                  </Carousel.Item>
              ))}
            </Carousel>
          </div>
       
        <Button className='mt-5 md-6 addtocart' 
        style={{width:"500px", 
        borderRadius:"18px",
        fontSize:"20px",
        fontWeight:"bold"}}
        onClick={handleAddToCart}
        >
          Add to Cart
        </Button>
        </Col>
        <Col className="scrollable-no-scrollbar" style={{maxHeight:"80vh",overflowY:"auto"}}> 
        
        <h5 style={{color:"blue"}}>{product.brand}</h5>
          <h5>{product.shortDesc}</h5>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "flex" }}>
              <FontAwesomeIcon icon={faStar} color="gold" />
              <FontAwesomeIcon icon={faStar} color="gold" />
              <FontAwesomeIcon icon={faStar} color="gold" />
              <FontAwesomeIcon icon={faStar} color="gold" />
              <FontAwesomeIcon icon={faStar} color="gold" />
              <p style={{marginLeft:"10px",paddingLeft:"5px"}}>{product.ratings}</p>
            </div>
            <div>
              <FontAwesomeIcon icon={faHeart} style={{ width: 20, height: 20,marginRight:"10px" }} />
              <FontAwesomeIcon icon={faShareNodes} style={{ width: 20, height: 20 }} />
            </div>
            </div>
            <div>
            {product.discount > 0 ? (
              <div>
                <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                  <p style={{ fontSize: 20, fontWeight: "bold" }}>
                    {(
                      product.mrp -
                      product.mrp * (product.discount / 100)
                    ).toFixed()}
                  </p>
                  <p style={{ color: "green",backgroundColor:"rgb(197,219,197)",
                borderRadius:"5px",padding:"5px",
                fontWeight:"bold" }}>{product.discount}% off</p>
                </div>
                <div>
                  <p style={{color:"grey",fontWeight:"bold" }}>
                    <span style={{textDecoration: "line-through"}}>
                      M.R.P:{product.mrp}
                    </span>
                    (Incl.of. all taxes)
                  </p>
                </div>
              </div>
            ) : (
              <p>M.R.P:{product.mrp}</p>
            )}
             <div>
                
                {product.colour && (
                <>
                 <hr />
                <h3><strong>Colour</strong></h3>
                </>
                )}
                <p style={{color:"grey", fontWeight: "bold" }}>{product.colour}</p>
                {product.size && (
                <>
                <hr />
                <h3><strong>size</strong></h3>
                </>
                )}
                <p style={{color:"grey", fontWeight: "bold" }}>{product.size}</p>
                <hr />
                <div>
                  <h2><strong>Offers (20)</strong></h2>
                  <div style={{ display: "flex"}}>
                    <FontAwesomeIcon icon={faGift} color="green" />
                    <h6 style={{fontWeight:"bold", paddingLeft:"5px"}}>ADDITIONAL OFFER</h6>
                  </div>
                  <p style={{color:"grey", fontWeight: "bold" }}>{product.additionalOffers}</p>
                  <div style={{ display: "flex" }}>
                    <FontAwesomeIcon icon={faBank} color="green" />
                    <h6 style={{fontWeight:"bold", paddingLeft:"5px"}}>BANK OFFER</h6>
                  </div>
                  <p style={{color:"grey", fontWeight: "bold" }}>{product.bankOffers}</p>
                  <div style={{ display: "flex" }}>
                    <FontAwesomeIcon icon={faReceipt} style={{ color: 'green' }} />
                  <h6 style={{fontWeight:"bold", paddingLeft:"5px"}}>COUPONS</h6>
                  </div>
                  <p style={{color:"grey", fontWeight: "bold" }}>{product.coupons}</p>
                </div>
              </div>
            </div>
            <hr />
            <div>
            <h2><strong>Delivered by</strong></h2>
              <p style={{color:"grey", fontWeight: "bold" }}>629171 Chennai</p>
              <h5 style={{color:"green",fontWeight:"bold"}}>{product.status}</h5>
            </div>
          <hr />
          <div>
          <h2><strong>Sold by</strong></h2>
            <h5 style={{color:"blue", fontWeight:"bold"}}>{product.soldBy}</h5>
          </div> 
          {product.KeyFeatures && (
          <>
            <hr />
            <h2><strong>key Features</strong></h2>
          </>
          )}
          <p style={{color:"grey", fontWeight: "bold" }}>
          {product.KeyFeatures}
          </p>
          <hr />
          <div>
          <h2><strong>Description</strong></h2>
          <p style={{color:"grey", fontWeight: "bold" }}>
          {product.description}
          </p>
          {product.Nutrition && (
          <h6 style={{fontWeight:"bold", paddingLeft:"5px"}}>Nutrition</h6>
          )}
          <p style={{color:"grey", fontWeight: "bold" }}>
          {product.Nutrition}
          </p>
          {product.HealthBenefits && (
          <h6 style={{fontWeight:"bold", paddingLeft:"5px"}}>Health Benifits</h6>
          )}
          <p style={{color:"grey", fontWeight: "bold" }}>
          {product.HealthBenefits}
          </p>
          {product.ShelfLifeStorage && (
          <h6 style={{fontWeight:"bold", paddingLeft:"5px"}}>Shelf Life & Storage</h6>
          )}
          <p style={{color:"grey", fontWeight: "bold" }}>
          {product.ShelfLifeStorage}
          </p>
          {product.Disclaimer && (
          <h6 style={{fontWeight:"bold", paddingLeft:"5px"}}>Disclaimer</h6>
          )}
          <p style={{color:"grey", fontWeight: "bold" }}>
          {product.Disclaimer}
          </p>
            <Button style={{backgroundColor:"white",color:"blue",borderRadius:"15px"}}>
              More Details 
            </Button>
          </div>
          <hr />
          <div>
           <h2><strong>Product Information</strong></h2>
           <h5 style={{color:"grey"}}>GENERAL INFORMATION</h5>
           <h5><strong>Expiry Date:</strong></h5>
           <p style={{color:"grey", fontWeight: "bold" }}>
            30-07-2024
            </p>
           <h5><strong>Brand:</strong></h5>
           <p style={{color:"grey", fontWeight: "bold" }}>
           {product.brand}
            </p>
           <h5><strong>Country of Origin:</strong> </h5>
           <p style={{color:"grey", fontWeight: "bold" }}>
           {product.countryOfOrigin}
           </p>
           <h5><strong>Manufacturer:</strong> </h5>
           <p style={{color:"grey", fontWeight: "bold" }}>
           {product.manufacturer}
           </p>
           <h5><strong>Manufacturer Address:</strong> </h5>
           <p style={{color:"grey", fontWeight: "bold" }}>
           {product.manufacturerAddress}
            </p>
           <Button style={{backgroundColor:"white",color:"blue",borderRadius:"15px"}}>
              More Details 
           </Button>
          </div>
          <hr />
          <h2><strong>Return Policy</strong></h2>
          <p style={{color:"grey", fontWeight: "bold" }}>
            This product is returnable within 3 days.
          </p>
        </Col>
      </Row>
    </Container>
   
  );
};

export default ProductDetail;
