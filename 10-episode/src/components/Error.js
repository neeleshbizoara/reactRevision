import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log(err);
    return (<div>
        <h1>OOP's Some thing Wrong.</h1>
        <p>{err?.error?.message}</p>
        <p>{err?.status} : { err?.statusText}</p>
    </div>)
}
export default Error;