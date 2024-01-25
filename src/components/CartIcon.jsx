import { useContext, useEffect } from 'react';
import { Nav, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useAppContext } from './../context/AppContext';

const CartIcon = () => {
  const { getCartItems,totalitemsincart,cartItems,currentUser,getTotalItems} = useAppContext();

  useEffect(()=>{
    getCartItems()
    // getTotalItems()
    console.log("cart:",cartItems);
    console.log("items:",totalitemsincart);
  },[currentUser])

  return (
    <Nav.Link as={Link} to="/cart" className='position-relative'>
        <span>
      <FontAwesomeIcon icon={faShoppingCart} size="lg" />
     
      {getTotalItems() > 0 && (
        <Badge bg="primary" pill className="position-absolute top-0 start-50 translate-middle-y">
          {getTotalItems()}
        </Badge>
      )}
       </span>
    </Nav.Link>
  );
};

export default CartIcon;
