import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
    const { resId } = useParams()
  const [resInfo, setResInfo] = useState([]);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      `${MENU_API}${resId}`
    );
    const json = await data.json();
    console.log(json.data.cards);
    setResInfo(json.data.cards);
  };


  return resInfo.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <h2>{resInfo[0]?.card?.card?.text}</h2>
              <h2>Menu</h2>
              {resInfo[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.map(item => console.log(item.card.card.itemCards ? item.card.card.itemCards : ''))}
      {/* {resInfo[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.itemCards?.name} */}
              <ul>
                  
        {resInfo[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards.map(
          (card) => {
            const { name, imageId, id, category } = card?.card?.info;
            // console.log(card?.card?.info);
            return (
              <li key={id}>
                <div className="menuContainer">
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
              </li>
            );
          }
        )}
        {/* <li>Biryani </li>
        <li>Burger</li>
        <li>Tea</li> */}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
