import { Link } from 'react-router-dom';
import "./Footer.css"
import playstore_badge from "../assets/google-play-badge.png"
import appstore_badge from "../assets/apple-app-store-badge.png"
const Footer = () => {
  
  return (
    <footer className="bg-light text-black py-4">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md">
            <h5>All Categories</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="#"  className='link'>Grocery</Link>
              </li>
              <li>
                <Link to="#" className='link'>Electronics</Link>
              </li>
              <li>
                <Link to="#" className='link'>Fashion</Link>
              </li>
              <li>
                <Link to="#" className='link'>Beauty</Link>
              </li>
              <li>
                <Link to="#" className='link'>Home & Kitchen</Link>
              </li>
              <li>
                <Link to="#" className='link'>Premium Fruits</Link>
              </li>
              <li>
                <Link to="/SportsToysLuggages" className='link'>Furniture</Link>
              </li>
              <li>
                <Link to="#" className='link'>Books</Link>
              </li>
            </ul>
          </div>
          <div className="col-md">
            <h5>Popular Categories</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="#" className='link'>Staples</Link>
              </li>
              <li>
                <Link to="#" className='link'>Beverages</Link>
              </li>
              <li>
                <Link to="#" className='link'>Personal Care</Link>
              </li>
              <li>
                <Link to="#" className='link'>Home Care</Link>
              </li>
              <li>
                <Link to="#" className='link'>Fruits & Vegetables</Link>
              </li>
              <li>
                <Link to="#" className='link'>Baby Care</Link>
              </li>
              <li>
                <Link to="#" className='link'>Snacks & Branded Foods</Link>
              </li>
            </ul>
          </div>
          <div className="col-md">
            <h5>Customer Account</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="#" className='link'>My Account</Link>
              </li>
              <li>
                <Link to="#" className='link'>My Orders</Link>
              </li>
              <li>
                <Link to="#" className='link'>Wishlist</Link>
              </li>
              <li>
                <Link to="#" className='link'>Payment Methods</Link>
              </li>
              <li>
                <Link to="#" className='link'>Delivery Address</Link>
              </li>
              <li>
                <Link to="#" className='link'>Jiomart Wallet</Link>
              </li>
            </ul>
          </div>
          <div className="col-md">
            <h5>Help & Support</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="#" className='link'>About Us</Link>
              </li>
              <li>
                <Link to="#" className='link'>FAQ</Link>
              </li>
              <li>
                <Link to="#" className='link'>Terms & Conditions</Link>
              </li>
              <li>
                <Link to="#" className='link'>Privacy Policy</Link>
              </li>
              <li>
                <Link to="#" className='link'>E-waste Policy</Link>
              </li>
              <li>
                <Link to="#" className='link'>Cancellation & Return Policy</Link>
              </li>
              <li>
                <Link to="#" className='link'>Shipping & Delivery Policy</Link>
              </li>
              <li>
                <Link to="#" className='link'>AC Installation by resQ</Link>
              </li>
            </ul>
          </div>
          <div className="col-md col-lg-3">
            <h3>Links</h3>
            <ul className="list-unstyled">
              <li>
                WhatsApp Us:<span>70003 70003</span>
              </li>
              <li>
              Call Us:<span>180 890 1222</span>
              </li>
              <li>
                8:00 AM to 8:00 PM, 365 days
              </li>
            </ul>
            <p>
              Should you encounter any bugs, glitches, lack of functionality, delayed deliveries, billing errors or other problems in the website, please email us on <span>cs@jiomart.com</span>
            </p>
            <div>
              <h3>Download the app</h3>
              <div className='d-flex gap-1 align-items-center justify-content-between'>
                <Link to="#"><img src={playstore_badge} style={{width:"10.5rem"}} alt="play store" className='img-fluid'/></Link>
                <Link to="#"><img src={appstore_badge} style={{width:"8rem"}} alt="app store" className='img-fluid'/></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
