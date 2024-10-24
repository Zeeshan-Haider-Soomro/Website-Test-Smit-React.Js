import React from "react";
import { NavLink } from "react-router-dom";
import { IoHomeSharp } from "react-icons/io5";
import Header from "../components/header/Header";

const NotFound = () => {
  return (
    <div className="flex flex-col gap-10">
      <Header />
      <div className="flex justify-center items-center flex-col h-[100vh] gap-5">
        <img src="../images/404.svg" alt="" />
        <h1 className="text-4xl font-medium">Looks like you are lost</h1>
        <h2 className="font-extralight text-[20px]">We can't find the page you're looking for</h2>
        <div className="flex bg-black text-white p-3 rounded-lg items-center gap-1 px-5 ">
          <IoHomeSharp />
          <NavLink to="/home">
            <button className="">Go Home</button>
          </NavLink>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default NotFound;
