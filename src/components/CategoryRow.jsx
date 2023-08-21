import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import CatHolder from "./CatHolder";

import { Link } from "react-router-dom";

const CategoryRow = (props) => {
  const id = props.id;
  const [catData, setCatData] = useState([]);
  const [category, setCategory] = useState([]);
  useEffect(() => {
    axios
      .get(`https://minggatu.zyberapi.site/categories/${id}/post`)
      .then((res) => setCatData(res.data.data))
      .then(
        axios
          .get(`https://minggatu.zyberapi.site/categories/${id}`)
          .then((res) => setCategory(res.data.data))
          .catch((e) => console.log(e))
      );
  }, []);

  return (
    <>
      <div className="flex justify-between items-end mx-5 my-2 lg:mx-20">
        <span className=" text-xl dark:text-white lg:text-2xl">{category.name}</span>
        <Link to={`/categories/${id}`}>
          <span className=" text-md text-blue-800 lg:text-xl lg:mr-4">Бүгдийг үзэх</span>
        </Link>
      </div>
      <div className=" flex flex-nowrap overflow-x-auto snap-x snap-mandatory w-full px-10 gap-8 pb-5 no-scrollbar lg:mx-10">
        {catData.map((list, index) => {
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
    </>
  );
};

export default CategoryRow;
