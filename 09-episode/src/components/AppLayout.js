import { Outlet } from "react-router-dom";
import Body from "./Body";
import Header from "./Header";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
      {/* <Body /> */}
    </div>
  );
};

export default AppLayout;
