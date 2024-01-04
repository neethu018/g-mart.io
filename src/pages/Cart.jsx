import { useContext } from "react";
import { CartContext } from '../context/CartContext';
import { Link } from "react-router-dom";
const Cart = () => {
  const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal ,getTotalItems} = useContext(CartContext);

  return (
    <div className="container">
      <h1 className="fw-bolder my-5">My Cart</h1>

      {cartItems.length === 0 ? (
        <div style={{height:"60vh",width:"100%"}} className="d-flex justify-content-center align-items-center">
          <div className="text-center">
            <h5>Your cart is empty</h5>
            <Link to="/" className="btn btn-primary">Shop Now</Link>
          </div>
        </div>
      ) : (
        <div className="row g-3">
          <div className="col-lg-8 mt-0">
            {cartItems.map((item) => (
              <div className="mt-3" key={item.productId}>
                <div className="d-flex gap-4 shadow-lg p-2 rounded-2">
                  <img src={item.productImage[0]} alt={item.shortDesc} className="rounded-2 img-thumbnail" style={{ width: "9rem", height: "12rem" }} />
                  <div className="d-flex flex-column">
                    <h4 className="fw-normal fs-5">{item.shortDesc}</h4>
                    <h5 className="text-black-50">Rs. {item.mrp}</h5>
                    <div className="d-flex align-items-center gap-4">
                      <button
                        className="btn btn-primary"
                        onClick={() => {
                          addToCart(item);
                        }}
                      >
                        +
                      </button>
                      <div>{item.quantity}</div>
                      <button
                        className="btn btn-primary"
                        onClick={() => {
                          removeFromCart(item);
                        }}
                      >
                        -
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="col-lg-4">
            <div className="shadow-lg p-2 rounded-2">
              <h3 className="fw-bold">Payment Details</h3>
              <h5>No of Cart Items:{getTotalItems()}</h5>
      
              <h5 className="border-top border-black">Total: Rs.{getCartTotal()}</h5>
            </div>
            <button className="btn btn-primary mt-3 p-3 fw-bold" style={{ width: "100%" }}>Place Order</button>
          </div>
        </div>
      )}

      {cartItems.length !== 0 && (
        <div className="text-center my-4">
          <button
            className="btn btn-dark"
            onClick={() => {
              clearCart();
            }}
          >
            Clear cart
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
