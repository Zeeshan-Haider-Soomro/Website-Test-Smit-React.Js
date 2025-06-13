import React from "react";
import { NavLink } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { PiShoppingBag } from "react-icons/pi";
// import "./header.css"


const Header = () => {
  return (
    <div className="flex justify-between items-center p-5  fixed w-[100%] top-0 left-0 z-50 bg-white">
      <div>
        <img src="../images/logo.svg" alt="" />
      </div>
      <div>
        <ul className="flex justify-center items-center gap-16">
          <li className="hover:border-b-4 hover:border-indigo-500">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="hover:border-b-4 hover:border-indigo-500">
            <NavLink to="/products">Products</NavLink>
          </li>
          <li className="hover:border-b-4 hover:border-indigo-500">
            <NavLink to="/contactus">ContactUs</NavLink>
          </li>
        </ul>
      </div>
      <div className="flex justify-center items-center gap-5">
        <select name="" id="">
          <option value="">English</option>
          <option value="">Hazarawal</option>
          <option value="">Sindhi</option>
          <option value="">Pashto</option>
          <option value="">Urdu</option>
          <option value="">Punjabi</option>
        </select>
        <p><IoSearch /></p>
        <p>SignIn</p>
        <p><PiShoppingBag /></p>
      </div>
    </div>
  );
};

export default Header;
