import React, { useState } from "react";
//import "@/AnimationLogin/LoginSignup.css";
//import TopNavbar from '../components/navbar/TopNavbar';
//import Header from '../components/Header';
//import Footer from "../components/Footer"
import "./LoginSignup.css";
//import "./AuthLayout";
import { FaGoogle } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
//import AuthLayout from './AuthLayout';
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";

const LoginSignup = () => {
  const { loginUser, signUpUser } = useAppContext();
  
  //handles function
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = () => {
    // Validate input fields
    if (!username || !email || !password) {
      alert("Please fill in all fields");
      return;
    }
    // Use signUpUser function from context
    const user = signUpUser(username, email, password);

    if (user) {
      navigate("/"); // Redirect to the home page on successful signup
      alert("Sign up successful");
    } else {
      alert("User with this email already exists");
    }

    // // Check if the user already exists
    // const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    // const userExists = existingUsers.some((user) => user.email === email);

    // if (userExists) {
    //   alert("User with this email already exists");
    //   return;
    // }

    // // Save user to local storage
    // const newUser = { username, email, password };
    // const updatedUsers = [...existingUsers, newUser];
    // localStorage.setItem("users", JSON.stringify(updatedUsers));
    // setIsSignUp(!isSignUp);
    // setButtonActive(!isButtonActive)
    // setUsername("");
    // setEmail("");
    // setPassword("");
    // alert("Sign up successful");
  };
  const handleSignIn = () => {
    // Validate input fields

    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }
     // Use loginUser function from context
     const user = loginUser(email, password);

     if (user) {
       navigate("/"); // Redirect to the home page on successful login
       alert("Sign in successful");
     } else {
       alert("Invalid email or password");
     }
    // // Check if the user exists
    // const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    // const user = existingUsers.find(
    //   (user) => user.email === email && user.password === password
    // );

    // if (!user) {
    //   alert("Invalid email or password");
    //   return;
    // }
    // setIsLoggedIn(true);
    // navigate("/");
    // alert("Sign in successful");
  };

  const [isSignUp, setIsSignUp] = useState(true);

  const toggleForm = () => {
    setIsSignUp((prevIsSignUp) => !prevIsSignUp);
  };
  const [isLoginPage, setIsLoginPage] = useState(true);
  const [isButtonActive, setButtonActive] = useState(true);

  const handleButtonClick = () => {
    setButtonActive(!isButtonActive);
    setIsSignUp(!isSignUp);
    setUsername("");
    setEmail("");
    setPassword("");
  };
  console.log("username: ", username);
  console.log("email: ", email);
  console.log("password: ", password);
  return (
    <div className={`container ${isSignUp ? "active" : ""}`}>
      <div className="d-flex justify-content-center mt-5 mb-5">
        <div className={`login-signup-container ${isSignUp ? "active" : ""}`}>
          <Container>
            <Row>
              <Col md={12} sm={6} lg={12} className="form-containers centered">
                {/* signup form */}
                <div className="form-container sign-up">
                  
                    <form>
                      <h1>Create Accounts</h1>
                      <div className="social-icons">
                        <a href="#" className="icon">
                          <FaGoogle />
                        </a>
                        <a href="#" className="icon">
                          <FaInstagram />
                        </a>
                        <a href="#" className="icon">
                          <FaSquareFacebook />
                        </a>
                        <a href="#" className="icon">
                          <FaGithub />
                        </a>
                      </div>
                      <span>or use your email for registration</span>
                      <input type="text" placeholder="Name" required value={username}
                    onChange={(e) => setUsername(e.target.value)}/>
                      <input type="email" placeholder="Email" required value={email}
                    onChange={(e) => setEmail(e.target.value)}/>
                      <input type="password" placeholder="Password" required value={password}
                    onChange={(e) => setPassword(e.target.value)}/>
                      <button onClick={handleSignUp}>Sign Up</button>
                    </form>
                  
                </div>
                {/* signin form */}
                <div className="form-container sign-in">
                  <form>
                    <label className="label mb-3 d-block d-md-none">
                      <div className="toggleBtn">
                        <input
                          className="toggleBtn-state"
                          type="checkbox"
                          name="check"
                          value="check"
                          // placeholder="signup"
                          onChange={handleButtonClick}
                        />
                        <div className="indicator">
                          <span
                            style={{
                              position: "absolute",
                              top: 10,
                              right: 0,
                              marginRight: 25,
                              fontSize: 16,
                              fontWeight: "bold",
                              color: "white",
                            }}
                          >
                            signin
                          </span>
                          <span
                            style={{
                              position: "absolute",
                              top: 10,
                              left: 0,
                              marginLeft: 25,
                              fontSize: 16,
                              fontWeight: "bold",
                              color: "white",
                            }}
                          >
                            signup
                          </span>
                        </div>
                      </div>
                    </label>
                    {isButtonActive ? (
                      <>
                        <h1>Sign In</h1>
                        <div className="social-icons">
                          <a href="#" className="icon">
                            <FaGoogle />
                          </a>
                          <a href="#" className="icon">
                            <FaGoogle />
                          </a>
                          <a href="#" className="icon">
                            <FaSquareFacebook />
                          </a>
                          <a href="#" className="icon">
                            <FaGithub />
                          </a>
                        </div>
                        <span>or use your email password</span>
                        <input type="email" placeholder="Email" required value={email}
                    onChange={(e) => setEmail(e.target.value)}/>
                        <input
                          type="password"
                          placeholder="Password"
                          required
                          value={password}
                    onChange={(e) => setPassword(e.target.value)}
                        />
                        <a href="#">Forget Your Password?</a>
                        <button onClick={handleSignIn}>Sign In</button>
                      </>
                    ) : (
                      <>
                        <h1>Create Accounts</h1>
                        <div className="social-icons">
                          <a href="#" className="icon">
                            <FaGoogle />
                          </a>
                          <a href="#" className="icon">
                            <FaInstagram />
                          </a>
                          <a href="#" className="icon">
                            <FaSquareFacebook />
                          </a>
                          <a href="#" className="icon">
                            <FaGithub />
                          </a>
                        </div>
                        <span>or use your email for registration</span>
                        <input type="text" placeholder="Name" required value={username}
                    onChange={(e) => setUsername(e.target.value)}/>
                        <input type="email" placeholder="Email" required value={email}
                    onChange={(e) => setEmail(e.target.value)}/>
                        <input
                          type="password"
                          placeholder="Password"
                          required
                          value={password}
                    onChange={(e) => setPassword(e.target.value)}
                        />
                        <button onClick={handleSignUp}>Sign Up</button>
                      </>
                    )}
                  </form>
                </div>
              </Col>
              <Col>
                {/* left or right */}
                <div className="toggle-container">
                  <div className="toggle">
                    <div className="toggle-panel toggle-left">
                      <h1>Welcome Back!</h1>
                      <p>
                        Enter your personal details to use all of site features
                      </p>
                      <button className="hidden" onClick={toggleForm}>
                        Sign In
                      </button>
                    </div>
                    <div className="toggle-panel toggle-right">
                      <h1>Hello, Friend!</h1>
                      <p>
                        Register with your personal details to use all of site
                        features
                      </p>
                      <button className="hidden" onClick={toggleForm}>
                        Sign Up
                      </button>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
