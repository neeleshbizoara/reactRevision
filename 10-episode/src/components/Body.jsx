import { SWIGGY_API } from "../utils/constants";
import restaurants from "../utils/data";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useRef, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from '../utils/useOnlineStatus';
import { _Input } from './StyledComponent';
import Button from '@mui/material/Button';


const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]); // state variable
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  const onLineStatus = useOnlineStatus();

  useEffect(() => {
    if (onLineStatus) {
      try {
        fetchData();
      } catch (error) {
        console.log(error);
      }
    }
  }, []);

  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  });

  // const changeInput = (e) => {
  //   console.log(e.target.value);
  // };


  if (!onLineStatus) {
      return <h1>Looks like you are offline. Please check your Internet connection.</h1>
    }

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
            <_Input
              type="text"
              className="search-box"
              value={searchText}
              onChange={e => {
                setSearchText(e.target.value);
            }}
             ref={inputRef} 
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
        <Button
            variant="contained"
            className="filter-btn"
            onClick={() => {
              const filteredList = restaurants.filter(
                ele => ele.info.avgRating >= 4.5
              );
              console.log(filteredList);
              setFilteredRestaurants(filteredList);
            }}
          >
            Top Rated Restaurant
          </Button>
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
