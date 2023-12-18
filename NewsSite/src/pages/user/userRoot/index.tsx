import React from "react";
import Navbar from "../../../layout/navbar";
import { Outlet } from "react-router-dom";
import Home from "../home";
import Footer from "../../../layout/footer";

type Props = {};

function UserRoot({}: Props) {
  return (
    <>
      <Navbar />
      {/* <Home /> */}
      <Outlet />
      <Footer />
    </>
  );
}

export default UserRoot;
