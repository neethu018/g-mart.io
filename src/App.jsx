import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Category from "./pages/Category";
import Home from "./pages/Home";
import Cart from "./pages/Cart"
import SubCategory from "./pages/SubCategory";
import { premiumFruits } from "./utils/premiumfruitsdata";//premiumfruits data
import { beauty } from "./utils/beauty";//beauty data
import { SportsToysLuggages } from "./utils/sportstoysluggages"; //sportstoysLuggages data
import MainCategory from "./pages/MainCategory";
import Header from "./components/Header";
import ProductDetail from "./pages/ProductDetail";
function App() {
  console.log("premiumfruits data :", premiumFruits);
  return (
  
    <>
      <Router>
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
           <Route
            path="/beauty"
            element={<MainCategory products={beauty} />}
          />
          <Route
            path="/beauty/:category"
            element={<Category products={beauty} />}
          />
          <Route
            path="/beauty/:category/:subcategory"
            element={<SubCategory products={beauty} />}
          />
          <Route
            path="/beauty/:category/:subcategory/:product"
            element={<ProductDetail />}
          />
           {/* sportsToysLuggages */}
          <Route
            path="/SportsToys&Luggages"
            element={<MainCategory products={SportsToysLuggages} />}
          />
          <Route
            path="/SportsToys&Luggages/:category"
            element={<Category products={SportsToysLuggages} />}
          />
          <Route
            path="/SportsToys&Luggages/:category/:subcategory"
            element={<SubCategory products={SportsToysLuggages} />}
          />
          <Route
            path="/SportsToys&Luggages/:category/:subcategory/:product"
            element={<ProductDetail />}
          />
              <Route path="/cart" element={<Cart/>}/>
        </Routes>
      </Router>
    </>

  );
}

export default App;
