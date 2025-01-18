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
            <Link to="/" className="link-reset"><div > Home </div></Link>
          </li>
          <li>
            <Link to="/about" className="link-reset">About Us</Link>
          </li>
          <li>
            <Link to="contact" className="link-reset">Contact Us</Link>
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
