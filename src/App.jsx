import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";

import { premiumFruits } from "./utils/premiumfruitsdata"; //premiumfruits data
import { Beauty } from "./utils/beauty"; //beauty data
import { SportsToysLuggages } from "./utils/sportstoysluggages"; //sportstoysLuggages data
import { Fashion } from "./utils/Fashion"; //fashion
import { Electronics } from "./utils/electronics"; //electronics

import Header from "./components/Header";

import Home from "./pages/Home";
import MainCategory from "./pages/MainCategory";
import Category from "./pages/Category";
import TopNavbar from "./components/navbar/TopNavbar";
import SubCategory from "./pages/SubCategory";
import ProductDetail from "./pages/ProductDetail";
import AllCatogries from "./pages/AllCatogries";
import Footer from "./components/Footer"

import Cart from "./pages/Cart";
import Search from "./pages/Search";

function App() {
  console.log("premiumfruits data :", premiumFruits);
  // data for search products
  const totalProducts = Object.values(premiumFruits)
    .concat(Object.values(SportsToysLuggages))
    .concat(Object.values(Fashion))
    .concat(Object.values(Beauty))
    .concat(Object.values(Electronics))
    .flat();
  // console.log("total products", totalProducts);
  return (
    <>
      <Router>
        <TopNavbar />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* premiumfruits routings */}
          <Route
            path="/premiumfruits"
            element={<MainCategory products={premiumFruits} />}
          />
          <Route
            path="/premiumfruits/:category"
            element={<Category products={premiumFruits} />}
          />
          <Route
            path="/premiumfruits/:category/:subcategory"
            element={<SubCategory products={premiumFruits} />}
          />
          <Route
            path="/premiumfruits/:category/:subcategory/:product"
            element={<ProductDetail />}
          />
          {/*beauty routings */}
          <Route path="/Beauty" element={<MainCategory products={Beauty} />} />
          <Route
            path="/Beauty/:category"
            element={<Category products={Beauty} />}
          />
          <Route
            path="/Beauty/:category/:subcategory"
            element={<SubCategory products={Beauty} />}
          />
          <Route
            path="/Beauty/:category/:subcategory/:product"
            element={<ProductDetail />}
          />
          {/*fashion routings */}
          <Route
            path="/Fashion"
            element={<MainCategory products={Fashion} />}
          />
          <Route
            path="/Fashion/:category"
            element={<Category products={Fashion} />}
          />
          <Route
            path="/Fashion/:category/:subcategory"
            element={<SubCategory products={Fashion} />}
          />
          <Route
            path="/Fashion/:category/:subcategory/:product"
            element={<ProductDetail />}
          />
          {/*Electronics routings */}
          <Route
            path="/Electronics"
            element={<MainCategory products={Electronics} />}
          />
          <Route
            path="/Electronics/:category"
            element={<Category products={Electronics} />}
          />
          <Route
            path="/Electronics/:category/:subcategory"
            element={<SubCategory products={Electronics} />}
          />
          <Route
            path="/Electronics/:category/:subcategory/:product"
            element={<ProductDetail />}
          />
           {/* sportsToysLuggages */}
          <Route
            path="/SportsToysLuggages"
            element={<MainCategory products={SportsToysLuggages} />}
          />
          <Route
            path="/SportsToysLuggages/:category"
            element={<Category products={SportsToysLuggages} />}
          />
          <Route
            path="/SportsToysLuggages/:category/:subcategory"
            element={<SubCategory products={SportsToysLuggages} />}
          />
          <Route
            path="/SportsToysLuggages/:category/:subcategory/:product"
            element={<ProductDetail />}
          />
          {/* search */}
          <Route
            path="/search/"
            element={<Search products={totalProducts} />}
          />
          <Route
            path="/search/:searchTerm"
            element={<Search products={totalProducts} />}
          />
          <Route
            path="/search/:searchTerm/:productId"
            element={<ProductDetail />}
          />
          {/* cart */}
          <Route path="/cart" element={<Cart />} />
          {/* allcategory */}
          <Route path="/allcategory" element={<AllCatogries />} />
        </Routes>
        <Footer/>
      </Router>
    
    </>
  );
}

export default App;
