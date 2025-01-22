import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resID) => {

    let isSubscribed = true;
    const [restInfo, setRestInfo] = useState(null)
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${MENU_API}${resID}`);
                const data = await response.json();
                if (isSubscribed) {
                    setRestInfo(data);
                }
            } catch (error) {
                console.error("Error occur while fetching resInfo: " + error);
            }
        }

        fetchData();

        return () => {
            isSubscribed = false;
        }
    }, [])
    return restInfo;
}

export default useRestaurantMenu;