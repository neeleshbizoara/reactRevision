import { useState } from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  console.log(useState());
  console.log(process.env.REACT_APP_API_URL, process.env.REACT_APP_ENV);
  return (
    <div className="flex justify-between bg-slate-300">
      <div className="w-24">
        <img alt="logo" src={logo} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li>
            <Link to="/">
              <div className="px-4"> Home </div>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <div className="px-4">About Us</div>
            </Link>
          </li>
          <li>
            <Link to="contact">
              <div className="px-4">Contact Us</div>
            </Link>
          </li>
          <li>
            <div className="px-4">Cart</div>
          </li>
          <button
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
