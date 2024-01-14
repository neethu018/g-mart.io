import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { CartProvider } from "./context/CartContext";
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>    
      <App />
    </CartProvider>
  </React.StrictMode>,
)
