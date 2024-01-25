import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { useAppContext } from "../context/AppContext";

const Cart = () => {
  //own cart functionality
  const {
    getCartItems,
    addToCart,
    removeFromCart,
    cartItems,
    clearCart,
    currentUser,
    getTotalItems,
    getTotalMRP,
    getTotalAmountSaved,
    getTotalDiscount,
    getItemAmountSaved,
    getItemDiscount,
  } = useAppContext();
  useEffect(() => {
    getCartItems();
    console.log("getcartitems:", cartItems);
  }, [currentUser]);
  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-between align-items-center gap-1">
        <h1 className="fw-bolder my-5">My Cart</h1>

        <h5 className="fw-bold">No of Items: {getTotalItems()}</h5>
      </div>

      {cartItems.length === 0 ? (
        <div
          style={{ height: "60vh", width: "100%" }}
          className="d-flex justify-content-center align-items-center"
        >
          <div className="text-center">
            <h5>Your cart is empty</h5>
            <Link to="/" className="btn btn-primary">
              Shop Now
            </Link>
          </div>
        </div>
      ) : (
        <div className="row g-3">
          <div className="col-lg-8 mt-0">
            {cartItems.map((item) => (
              <div className="mt-3" key={item.productId}>
                <div className="d-flex gap-4 shadow-lg p-2 rounded-2">
                  <img
                    src={item.productImage[0]}
                    alt={item.shortDesc}
                    className="rounded-2 img-thumbnail"
                    style={{ width: "9rem", height: "12rem" }}
                  />
                  <div className="d-flex flex-column position-relative">
                    <h4
                      className="fw-normal text-black-50"
                      style={{ fontSize: "1.2rem" }}
                    >
                      {item.shortDesc}
                    </h4>
                    <div className="d-flex align-items-center gap-3">
                      {getItemDiscount(item) > 0 && (
                        <>
                          <h5
                            className="text-black fw-bold"
                            style={{ fontSize: "1.1rem" }}
                          >
                            &#8377;{getItemDiscount(item) * item.quantity}
                          </h5>
                        </>
                      )}
                      <h5
                        className={`text-${
                          getItemDiscount(item) === 0 ? "black" : "black-50"
                        } ${getItemDiscount(item) === 0 ? "fw-bold" : ""} ${
                          getItemDiscount(item) === 0
                            ? "text-decoration-none"
                            : "text-decoration-line-through"
                        }`}
                        style={{ fontSize: "1.1rem" }}
                      >
                        &#8377;{item.mrp * item.quantity}
                      </h5>
                    </div>
                    {getItemDiscount(item) > 0 && (
                      <>
                        <h5
                          className="text-success bg-success-subtle px-3 py-1 fw-bold rounded-1 mt-2 mb-5 mb-md-0"
                          style={{ width: "max-content", fontSize: ".8rem" }}
                        >
                          You Save &#8377;
                          {getItemAmountSaved(item) * item.quantity}
                        </h5>
                      </>
                    )}

                    <div
                      className="d-flex align-items-center gap-4 position-absolute"
                      style={{ bottom: ".5rem", left: "0" }}
                    >
                      <button
                        className="btn btn-outline-secondary rounded-2"
                        onClick={() => {
                          addToCart(item);
                        }}
                      >
                        <FontAwesomeIcon icon={faPlus} />
                      </button>
                      <div>{item.quantity}</div>
                      <button
                        className="btn btn-outline-secondary rounded-2"
                        onClick={() => {
                          removeFromCart(item);
                        }}
                      >
                        <FontAwesomeIcon icon={faMinus} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {cartItems.length !== 0 && (
              <div className="text-center my-4">
                <button
                  className="btn btn-dark d-block"
                  style={{ width: "100%" }}
                  onClick={() => {
                    clearCart();
                  }}
                >
                  Clear cart
                </button>
              </div>
            )}
          </div>
          <div className="col-lg-4">
            <div className="shadow-lg p-2 rounded-2">
              <h3 className="fw-bold mb-3">Payment Details</h3>

              <div className="d-flex justify-content-between align-items-center py-2 border-top border-black-50">
                <h5 className="mb-0">MRP Total</h5>
                <h5 className="mb-0">&#8377;{getTotalMRP()}</h5>
              </div>
              <div className="d-flex justify-content-between align-items-center py-2 border-top border-black-50">
                <h5 className="mb-0">Product Discount</h5>
                <h5 className="mb-0 text-success">
                  - &#8377;{getTotalAmountSaved()}
                </h5>
              </div>
              <div className="d-flex justify-content-between align-items-center py-2 border-top border-black-50">
                <h5 className="mb-0">Total</h5>
                <h5 className="mb-0 fw-bold">&#8377;{getTotalDiscount()}</h5>
              </div>
            </div>
            <button
              className="btn btn-primary mt-3 p-3 fw-bold"
              style={{ width: "100%" }}
            >
              Place Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
