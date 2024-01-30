import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import CartIcon from "../CartIcon";
import Sidenavbar from "./Sidenavbar";
// import { useAuth } from "../../context/AuthContext";
import { useAppContext } from "../../context/AppContext";
import { FormControl, Button } from 'react-bootstrap';

// import Home from "../../pages/Home";
const TopNavbar = () => {
  // const { isLoggedIn, logout } = useAuth();
  const { logoutUser, currentUser } = useAppContext();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (event, searchbtn) => {
    // console.log("search product",searchTerm);
    // console.log("option",searchbtn);
    if (event.key === "Enter" || searchbtn == "searchbtn") {
      event.preventDefault();
      navigate(`/search/${searchTerm}`);
    }
  };
  const [sidebar, setSidebar] = useState(false);

  const showsidebar = () => setSidebar(!sidebar);
  useEffect(() => {
    if (currentUser) {
      console.log("current user:", currentUser);
    } else {
      console.log("user not login");
    }
  }, [logoutUser]);

  return (
    <>
      <nav
        className="navbar navbar-expand "
        style={{ backgroundColor: "#0078ad" }}
      >
        <div className="container-fluid my-2 w-100">
          <div className="d-flex justify-contents-center align-items-center">
            <IconButton className="rounded-5" onClick={showsidebar}>
              <MenuIcon className="fs-1 mx-3 text-white" />
            </IconButton>

            <Link className="d-none d-sm-block fs-4 text-white fw-bold navbar-brand text-decoration-none" to="/">
             <img src="/gmartlogo.jpeg" width={"100px"} height={"30px"} style={{borderRadius:"5px"}}/>
            </Link>
          </div>
          
          <div className="d-flex flex-row justify-contents-end">
            <div className="sb-search d-flex gap-2">
              <SearchIcon
                onClick={(event) => handleSearch(event, "searchbtn")}
                style={{ cursor: "pointer" ,height:"40px"}}
              />
              <FormControl type="Search" placeholder="G-mart Search" className="search-box px-2 py-0" onChange={(e) => setSearchTerm(e.target.value)} onKeyDown={handleSearch} style={{boxShadow:"none"}}/>
            </div>
            <div className="d-none d-sm-block sec-div">
              <IconButton>
                <Link
                  className="fs-5 text-white fw-bold navbar-brand"
                  to="/cart"
                >
                  {/* <ShoppingCartIcon className="text-white fs-2" /> */}
                  <CartIcon />
                </Link>
              </IconButton>
              {currentUser ? (
                <button
                  class="btn text-white border-0 px-1  fs-5 fw-bold  btn-signin"
                  type="submit"
                  onClick={logoutUser}
                >
                  Logout
                </button>
              ) : (
                <IconButton className="rounded-5" as={Link} to={"/loginsignup"}>
                  <PersonIcon className="text-white fs-2" />

                  <button
                    class="btn text-white border-0 px-1  fs-5 fw-bold  btn-signin"
                    type="submit"
                  >
                    Sign In
                  </button>
                </IconButton>
              )}
            </div>
          </div>
        </div>
      </nav>
      <Sidenavbar sidebar={sidebar} showsidebar={showsidebar} />
    </>
  );
};

export default TopNavbar;
