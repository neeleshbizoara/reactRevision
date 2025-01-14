import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./logo.svg";
import restaurants from './data';

const AppLayout = () => {
    return <div className="app">
        <Header></Header>
        <Body></Body>
    </div>
}

const Header = () => {
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
            </ul>
        </div>
    </div>)
}

const Body = () => {
    return (<div className="body">
        <div className="search">Search</div>
        <div className="res-container">
            {restaurants.map(ele => <RestaurantCard key={ele.info.id} restData={ele.info} />)}
            </div>
    </div>)
}

const RestaurantCard = (props) => {
    const { name, costForTwo, cuisines, avgRating } = props.restData;
    console.log(props)
    return (<div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
        <img className="res-logo" alt="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/edec78a57012c218745c734e47fd2c83"/>
        <h3>{ name }</h3>
        <h4>{cuisines.join(', ')}</h4>
        <h4>{avgRating}</h4>
        <h4>{costForTwo}</h4>
    </div>)
}

const head = React.createElement('h1', {}, "Header");
const rootElement = ReactDOM.createRoot(document.getElementById('root'));

rootElement.render(<AppLayout/>);