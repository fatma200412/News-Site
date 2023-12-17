import React from "react";
import Navbar from "../../../layout/navbar";
import { Outlet } from "react-router-dom";
import Home from "../home";

type Props = {};

function UserRoot({}: Props) {
  return (
    <>
      <Navbar />
      {/* <Home /> */}
      <Outlet />
    </>
  );
}

export default UserRoot;
