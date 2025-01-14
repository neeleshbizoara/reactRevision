import restaurants from "../utils/data";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
    return (<div className="body">
        <div className="search">Search</div>
        <div className="res-container">
            {restaurants.map(ele => <RestaurantCard key={ele.info.id} restData={ele.info} />)}
            </div>
    </div>)
}

export default Body;