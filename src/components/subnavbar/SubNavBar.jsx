const SubNavBar = () => {
  return (
    <nav class="navbar  navbar-expand-lg" style={{backgroundColor:"#0c5273"}}>
      <div class="container-fluid ">
       
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContents"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse mx-2" id="navbarSupportedContents">
          <ul class="navbar-nav tet-white me-auto mb-2 mx-5 mb-lg-0">
            {/* Groceries */}
            <li class="nav-item dropdown">
              <a
                class="nav-link text-white fw-5"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Groceries
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                </li>

                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            {/* Premium Fruits */}
            <li class="nav-item  dropdown">
              <a
                class="nav-link text-white fw-bold"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Premium Fruits
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            {/* Home & Kitchen */}
            <li class="nav-item  dropdown">
              <a
                class="nav-link text-white fw-bold"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Home & Kitchen
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                </li>

                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            {/* Fashion */}
            <li class="nav-item  dropdown">
              <a
                class="nav-link text-white fw-bold"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Fashion
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                </li>

                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            {/* Electronics */}
            <li class="nav-item  dropdown">
              <a
                class="nav-link text-white fw-bold"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Electronics
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            {/* Beauty */}
            <li class="nav-item  dropdown">
              <a
                class="nav-link text-white fw-bold"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Beauty
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            {/* Home Improvement */}
            <li class="nav-item  dropdown">
              <a
                class="nav-link text-white fw-bold"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Home Improvement
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            {/* Sports,Toys & Luggage */}
            <li class="nav-item  dropdown">
              <a
                class="nav-link text-white fw-bold"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Sports,Toys & Luggage
              </a>
              <ul class="dropdown-menu">
                {/* Toys & Games  */}
                <li>
                  <a class="dropdown-item" href="#">
                    Toys & Games
                  </a>

                  {/* <ul className="dropdown">
                <li className="dropdown-item">Action & Toy Figures</li>
                <li className="dropdown-item" href="#"> Baby & Toddler Toys</li>
                <li className="dropdown-item" href="#">Bikes, Trikes & Ride-Ons</li>
                <li className="dropdown-item" href="#">Building & Construnction Toys</li>
                <li className="dropdown-item" href="#">Dolls & Accessories</li>
                <li className="dropdown-item" href="#">Dress Up & Pretend Play</li>
              </ul> */}
                </li>
                {/* Bags & Travel Luggage */}
                <li>
                  <a class="dropdown-item" href="#">
                    Bags & Travel Luggage
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Sporting Goods & Fitness
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Sporting Goods & Fitness Equipments
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default SubNavBar;
