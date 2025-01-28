import { SWIGGY_API } from "../utils/constants";
import restaurants from "../utils/data";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useRef, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { _Input } from "./StyledComponent";
import Button from "@mui/material/Button";

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
    return (
      <h1>
        Looks like you are offline. Please check your Internet connection.
      </h1>
    );
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
    : <>
      <div className="flex m-2">
        {/* <div className="flex-col"> */}
        <div className="w-1/2 flex space-x-4">
          <_Input
            type="text"
            value={searchText}
            onChange={e => {
              setSearchText(e.target.value);
            }}
            ref={inputRef}
          />
          <button
            className="bg-blue-400 rounded-md w-24 mr-40"
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
        <div className="w-1/2 flex justify-end">
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
      </div>
        <div className="flex flex-wrap justify-center">
        {filteredRestaurants.map(ele =>
            (<div className="bg-gray-300 m-6 rounded-md hover:bg-gray-500" key={ele.info.id}>
            <Link
              to={"/restaurant/" + ele.info.id}
            >
              <RestaurantCard restData={ele.info} />
            </Link>
            </div>)
          )}
        </div>
    {/* </div> */}
      </>;
};

export default Body;
