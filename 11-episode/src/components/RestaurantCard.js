import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const fontStyle = "text-slate-800 font-medium"
    const { name, costForTwo, cuisines, avgRating, cloudinaryImageId } = props.restData;
    return (<div style={{ backgroundColor: "#f0f0f0" }} className="m-1 p-1 w-80 bg-gray-300 rounded-md">
        <img alt="res-logo" src={CDN_URL + cloudinaryImageId}/>
        <h3 className="font-bold text-2xl text-sky-700">{ name }</h3>
        <h4 className="text-slate-800 font-medium">{cuisines.join(', ')}</h4>
        <h4 className={ fontStyle}>{avgRating}</h4>
        <h4 className={ fontStyle}>{costForTwo}</h4>
    </div>)
}


export default RestaurantCard;