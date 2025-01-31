import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { useEffect, useLayoutEffect } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams()
  const resInfo = useRestaurantMenu(resId);
  console.log(resInfo);
  // debugger;
  const dispatch = useDispatch();

  const handelAddItem = (item) => {
    dispatch(addItem(item));
  }


  useEffect(() => {
    console.log('First useEffect......');
  }, []);

  useEffect(() => {
    console.log('Second useEffect......');
  }, []);

  useLayoutEffect(() => {
    console.log('Third useLayoutEffect....');
  }, [])

  return !resInfo || resInfo.length === 0 ? (
    <Shimmer />
  ) : (
      <div className="flex flex-col
    ">
      <h2 className="font-bold text-3xl text-sky-700">{resInfo.data.cards[0]?.card?.card?.text}</h2>
              <h3 className="font-semibold text-2xl text-sky-700">Menu</h3>
        {resInfo.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.map((item, index) => item.card.card.itemCards ? 
          <div key="index" className="flex-wrap">    
              {item.card.card.itemCards.map(
                (card) => {
                  const { name, imageId, id, category } = card?.card?.info;
                  return (
                      <div className="w-[200px] bg-gray-500 m-4" key={id}>
                        <div>
                          <h3 className="font-bold">{name}</h3>
                          <br /> {category}
                        </div>
                        <div>
                          <img
                            className="menuImage"
                            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${imageId}`}
                        />
                        <div className="flex justify-center">
                          <button type="button" class="m-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                            onClick={() => { handelAddItem(item); }
                          }>Add</button>
                        </div>
                      </div>
                      </div>
                  );
                } 
              )}
            </div> : '')}
        
        {/* {resInfo.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.map(item => console.log(item.card.card.itemCards ? item.card.card.itemCards : ''))} */}
              {/* <div className="flex-wrap">    
              {resInfo.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards.map(
                (card) => {
                  const { name, imageId, id, category } = card?.card?.info;
                  return (
                      <div className="w-[200px] bg-gray-500 m-4" key={id}>
                        <div>
                          <h3>{name}</h3>
                          <br /> {category}
                        </div>
                        <div>
                          <img
                            className="menuImage"
                            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${imageId}`}
                          />
                        </div>
                      </div>
                  );
                }
              )}
            </div> */}
    </div>
  );
};

export default RestaurantMenu;
