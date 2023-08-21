import React from "react";
import Navbar from "./components/Navbar";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const NewsDetail = () => {
  const { postId } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://minggatu.zyberapi.site/post/${postId}`)
      .then((res) => setData(res.data))
      .catch((e) => console.log(e));
  }, []);
  let desc = data.content;
  if (desc) desc = desc.substring(3, desc.length - 4);
  return (
    <div className=" min-h-screen dark:bg-[#1C1A27] overflow-x-hidden">
      <Navbar />
      <div className="flex flex-col items-center my-4">
        <img
          src={`https://minggatu.zyberapi.site/${data.cover}`}
          alt=""
          className="w-4/5 h-60 object-cover lg:w-[800px] lg:h-[400px] rounded "
        />
        <span className=" text-2xl font-bold dark:text-white">{data.title}</span>
        <div className="w-5/6 mx-11 ">
          <p className="text-justify break-all dark:text-gray-200">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
