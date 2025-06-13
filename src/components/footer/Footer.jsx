import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { SiVisa } from "react-icons/si";
import { FaCcPaypal } from "react-icons/fa";
import { LiaCcJcb } from "react-icons/lia";

const Footer = () => {
  return (
    <div className="">
          <div className="flex justify-around leading-10 m-5">
      <div>
        <h1 className="text-2xl font-bold">Social</h1>
        <p className="flex items-center gap-2">
          <FaInstagram />
          instagram
        </p>
        <p className="flex items-center gap-2">
          <FaTwitter />
          twitter
        </p>
        <p className="flex items-center gap-2">
          <FaFacebook />
          facebook
        </p>
        <p className="flex items-center gap-2">
          <FaYoutube />
          YouTube
        </p>
      </div>
      <div>
        <h1 className="text-2xl font-bold">Contact</h1>
        <p>Contact Us</p>
        <p>yourexample@email.com</p>
        <p>example@email.com</p>
        <p>Call us: +1 254 568-5479</p>
      </div>
      <div>
        <h1 className="text-2xl font-bold">About</h1>
        <p>Support Center</p>
        <p>Customer Support</p>
        <p>About Us</p>
        <p>Copyright</p>
      </div>
      <div>
        <h1 className="text-2xl font-bold">Customer Care</h1>
        <p>FAQ & Helps</p>
        <p>Shipping & Delivery</p>
        <p>Return & Exchanges</p>
      </div>
      <div>
        <h1 className="text-2xl font-bold">Our Information</h1>
        <p>Privacy policy update</p>
        <p>Terms & conditions</p>
        <p>Return Policy</p>
        <p>Site Map</p>
      </div>
      <div>
        <h1 className="text-2xl font-bold">Top Categories</h1>
        <p>men's wear</p>
        <p>men's wear</p>
        <p>kid's wear</p>
        <p>sport wear</p>
      </div>
    </div>
    <hr />
    <div className="flex justify-between mx-10 items-center m-5">
      <p>copyright © 2024 Zeeshan Haider Soomro All rights reserved</p>
      <div className="flex justify-between w-[150px] text-3xl">
        <p><FaCcMastercard />
        </p>
        <p><SiVisa />
        </p>
        <p><FaCcPaypal />
        </p>
        <p><LiaCcJcb />
        </p>
      </div>
    </div>
    </div>
  );
};

export default Footer;
