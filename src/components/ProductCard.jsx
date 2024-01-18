

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, Button } from "react-bootstrap";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { CartContext } from "../context/CartContext";

import { faPlus ,faMinus} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as fasolid } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";



const ProductCard = ({ product, category, subcategory }) => {
  const { pathname } = useLocation();
  console.log("pathname:",pathname);
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  // ... (rest of the code remains unchanged)

  const handleAddToCart = () => {
    // Check if the item is already in the cart
    const isItemInCart = cartItems.find((cartItem) => cartItem.productId === product.productId);

    // If the item is in the cart, don't add a new one; instead, increment its quantity
    if (isItemInCart) {
      addToCart(product);
    } else {
      addToCart(product);
    }
  };

  const handleIncrement = () => {
    addToCart(product);
  };

  const handleDecrement = () => {
    removeFromCart(product);
  };

  const renderAddToCartButton = () => {
    // Check if the item is already in the cart
    const isItemInCart = cartItems.find((cartItem) => cartItem.productId === product.productId);

    // If the item is in the cart, show increment and decrement buttons along with quantity
    if (isItemInCart) {
      return (
        <button className="btn btn-outline-primary d-flex align-items-center justify-content-center gap-2 w-100">
          <div onClick={handleDecrement} style={{padding:".2em",width:"2rem",height:"2rem"}}>
          <FontAwesomeIcon icon={faMinus} />
          </div>
          <span style={{ margin: '0 10px' }} className="text-black fw-bold">{isItemInCart.quantity}</span>
          <div onClick={handleIncrement} style={{padding:".2em",width:"2rem",height:"2rem"}}>
          <FontAwesomeIcon icon={faPlus} />
          </div>
        </button>
      );
    }

    // If the item is not in the cart, show the "Add to Cart" button
    return (
      <Button className="rounded-lg bg-white w-100 " onClick={handleAddToCart}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            color: "black",
            alignItems: "center",
            marginRight: "20px",
            marginLeft: "20px",
          }}
        >
          <div style={{ fontSize: 20, fontWeight: 800 }}>Add</div>
          <div>
            <FontAwesomeIcon icon={faPlus} />
          </div>
        </div>
      </Button>
    );
  };



  let path = "";
  if (subcategory) {
    path = `${product.productId}`;
  } else if (category === "allproducts") {
    path = `${category}/${product.shortDesc.split(" ")[0]}/${
      product.productId
    }`;
  }else if (category == "searched") {
    // path = `${product.shortDesc.split(" ").slice(0, 3).join(' ')}`;
    path = `${product.productId}`;
  } else if (category) {
    path = `${product.shortDesc.split(" ")[0]}/${product.productId}`;
    console.log("only category :",path);
  } else {
    navigate("/");
  }

  // const handleAddToCart = () => {
  //   addToCart(product);

  // };
  const maxLength=35;
  const prod=product.shortDesc;
  const sd=prod.length > maxLength ? `${prod.slice(0,maxLength)}...`:prod;

  const [liked,setLiked]=useState(false);
  const handleLikeToggle=()=>{
    setLiked(!liked)
  };


  return (
    <Card
     style={{height:"500px"}}
     className="card rounded-3 mb-5 p-3 shadow-lg">
      <Link to={`${pathname}/${path}`} state={{ product }}>
        <div style={{height:"15rem",width:"100%"}}>
        <Card.Img
          variant="top"
          className="card-img" style={{height:"100%",width:"100%"}}
          src={product.productImage[0]}
          alt={product.productImage}
        />
        </div>
      </Link>
      <Card.Title style={{ position: "absolute", top: 30, right: 30 }}>
        
        {liked?
        <span onClick={handleLikeToggle}>
        <FontAwesomeIcon
          icon={fasolid}
          style={{ width: "30", height: "30", cursor:"pointer"}
        }
        />
        </span>
        :
        <span onClick={handleLikeToggle}>
        <FontAwesomeIcon
          icon={faHeart}
          style={{ width: "30", height: "30", cursor:"pointer"}
        }
        />
        </span>
        }
       
      </Card.Title>
      <Card.Body>
        <Card.Title style={{fontSize:"1rem",fontWeight:"bold"}}>{sd}</Card.Title>
        <Card.Text>
        {product.discount > 0 ? (
            <div className="d-flex flex-row justify-content-start gap-2">
              <div style={{ fontWeight: "bold" }}>
                &#x20B9;
                {(
                  product.mrp -
                  product.mrp * (product.discount / 100)
                ).toFixed()}
              </div>
              <p style={{ textDecoration: "line-through" }}>
              &#x20B9;{product.mrp}
              </p>
              <p style={{ color: "green",backgroundColor: "#ABEBC6",borderRadius:"5px",padding:"0px 5px" }}>{product.discount}% off</p>
            </div>
          ) : (
            <p style={{ fontWeight: "bold" }}>&#x20B9; {product.mrp}</p>
          )}
        </Card.Text>
        {renderAddToCartButton()}
        {/* <Button className="rounded-lg bg-white w-100 " onClick={handleAddToCart}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              color: "black",
              alignItems: "center",
              marginRight: "20px",
              marginLeft: "20px",
             
            }}
            
          >
            <div style={{ fontSize: 20, fontWeight: 800 }}>Add</div>
            <div>
              <FontAwesomeIcon icon={faPlus} />
            </div>
          </div>
        </Button> */}
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
