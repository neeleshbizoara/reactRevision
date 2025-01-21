import useOnlineStatus from "../utils/useOnlineStatus"

const Test = () => {
    const isOnline = useOnlineStatus();
    debugger;
    return (<div>{isOnline.toString()}</div>)
}

export default Test;