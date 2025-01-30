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


// Higher Order Function
export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        console.log(props.restData.aggregatedDiscountInfoV3)
        return (<div>
            <label className="absolute bg-black text-white m-2 p-2 rounded-lg">{props.restData.aggregatedDiscountInfoV3.header} {props.restData.aggregatedDiscountInfoV3.subHeader}</label>
            <RestaurantCard {...props}/>
        </div>)
    }
}

export default RestaurantCard;