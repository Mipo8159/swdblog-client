import { Outlet } from "react-router-dom";
import { Fragment } from "react";
import { NavBar } from "./Navbar";

export const RouterLayout: React.FC = () => {
  return (
    <Fragment>
      <NavBar />
      <Outlet />
    </Fragment>
  );
};
