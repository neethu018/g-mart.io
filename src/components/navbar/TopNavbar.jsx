import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./Navbar.css";
import { Link } from "react-router-dom";
// import Home from "../../pages/Home";
const TopNavbar = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg "
        style={{ backgroundColor: "#0078ad" }}
      >
        <div className="container-fluid my-2">
          <IconButton className="rounded-5">
            <MenuIcon className="fs-1 mx-3 text-white" />
          </IconButton>

          <Link className="fs-4 text-white fw-bold navbar-brand" to="/">
            GMart
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex ms-auto mb-lg-0 mx-4" role="search">
              {/* <div className="inputWithIcon">
                {" "}
                <i class="search fa-solid text-dark fa-magnifying-glass"></i>
                
                <input type="text" class="form-control me-5 fw-1 rounded-5" placeholder="Search Gmart" aria-label="Username"></input>
                <i class="list fa-solid fa-list"></i>
              </div> */}

              {/* <i class="fs-5 mx-3 text-white fa-solid fa-cart-shopping shop"></i> */}

              <div className="sb-search">
                <SearchIcon />
                <input placeholder="Search" className="search-box" />
              </div>
              <IconButton>
              <Link className="fs-4 text-white fw-bold navbar-brand" to="/cart">
                <ShoppingCartIcon className="text-white fs-2" />
                </Link>
              </IconButton>
              <IconButton className="rounded-5">
                <PersonIcon className="text-white fs-2" />

                <button
                  class="btn text-white border-0 px-1  fs-5 fw-bold  btn-signin"
                  type="submit"
                >
                  Sign In
                </button>
              </IconButton>
            </form>
          </div>
          <form className="d-flex ms-auto"> </form>
        </div>
      </nav>
    </>
  );
};

export default TopNavbar;
