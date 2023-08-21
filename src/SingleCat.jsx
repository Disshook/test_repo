import React from "react";
import Navbar from "./components/Navbar";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import CatHolder from "./components/CatHolder";
import axios from "axios";
import { Link } from "react-router-dom";

const SingleCat = () => {
  const { catId } = useParams();
  const [data, setData] = useState([]);
  const [cat, setCat] = useState([]);
  useEffect(() => {
    axios
      .get(`https://minggatu.zyberapi.site/categories/${catId}/post`)
      .then((res) => setData(res.data.data))
      .then(
        axios
          .get(`https://minggatu.zyberapi.site/categories/${catId}`)
          .then((res) => setCat(res.data.data))
          .catch((e) => console.log(e))
      )
      .catch((e) => console.log(e));
  }, []);
  return (
    <div className=" min-h-screen dark:bg-[#1C1A27] overflow-x-hidden">
      <Navbar />
      <div className=" flex flex-col gap-2 items-center my-2">
        <span className="text-2xl my-2 dark:text-white">{cat.name}</span>
        <div className="h-full overflow-y-auto flex flex-col gap-4 pb-5 no-scrollbar flex-nowrap lg:grid lg:grid-cols-4 lg:gap-4">
          {data.map((list, index) => {
            return (
              <Link to={`/post/${list._id}`}>
                <CatHolder
                  key={index}
                  img={`https://minggatu.zyberapi.site/${list.cover}`}
                  name={list.title}
                  description={list.content}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SingleCat;
