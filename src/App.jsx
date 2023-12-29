import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Category from "./pages/Category";
import Home from "./pages/Home";
import SubCategory from "./pages/SubCategory";
import { premiumFruits } from "./utils/premiumfruitsdata";//data
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
            element={<ProductDetail products={premiumFruits} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
