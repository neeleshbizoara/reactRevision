
import { useState } from "react";
import logo from "../assets/logo.svg"
const Header = () => {
    const [btnName, setBtnName] = useState('Login')
    return (<div className="header">
        <div className="logo-container">
            <img alt="logo" src={logo} className="logoSize" />
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
                <button className="login" onClick={() => {
                    btnName === 'Login' ? setBtnName('Logout') : setBtnName('Login')
                    }}>{btnName}</button>
            </ul>
        </div>
    </div>)
}
export default Header;