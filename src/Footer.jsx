import React from "react";
import { BsFacebook, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className=" h-32 bg-black  w-full text-white flex flex-col justify-center items-center gap-4">
      <span>Холбоо барих</span>
      <span>88200314</span>
      <div className="flex gap-2 text-2xl">
        <BsFacebook />
        <BsInstagram />
      </div>
    </div>
  );
};

export default Footer;
