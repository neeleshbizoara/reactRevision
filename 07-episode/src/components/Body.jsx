import { SWIGGY_API } from "../utils/constants";
import restaurants from "../utils/data";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]); // state variable
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_API);
    const json = await data.json();
    const liveData =
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
    setListOfRestaurants(liveData);
    setFilteredRestaurants(liveData);
  };

  return listOfRestaurants.length === 0
    ? <Shimmer />
    : <div className="body">
        <div className="filter">
          <div className="search">
            <input
              type="text"
              className="search-box"
              value={searchText}
              onChange={e => {
                setSearchText(e.target.value);
              }}
            />
            <button
              onClick={() => {
                const filteredData = listOfRestaurants.filter(ele =>
                  ele.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setFilteredRestaurants(filteredData);
              }}
            >
              Search
            </button>
          </div>
          <button
            className="filter-btn"
            onClick={() => {
              const filteredList = restaurants.filter(
                ele => ele.info.avgRating >= 4.5
              );
              console.log(filteredList);
              setListOfRestaurants(filteredList);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
        <div className="res-container">
          {filteredRestaurants.map(ele =>
            <Link to={"/restaurant/" + ele.info.id} key={ele.info.id} className="link-reset">
              <RestaurantCard restData={ele.info} />
            </Link>
          )}
        </div>
      </div>;
};

export default Body;
