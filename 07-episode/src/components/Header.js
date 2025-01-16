import { useState } from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  console.log(useState());
  console.log(process.env.REACT_APP_API_URL, process.env.REACT_APP_ENV);
  return (
    <div className="header">
      <div className="logo-container">
        <img alt="logo" src={logo} className="logoSize" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/"> Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
