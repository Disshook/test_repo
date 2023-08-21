import React from "react";
import axios from "axios";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import CategoryRow from "./components/CategoryRow";
import Footer from "./Footer";

const Home = () => {
  const onRight = () => {
    const isLast = currentSlideIndex === slides.length - 1;
    const newIndex = isLast ? 0 : currentSlideIndex + 1;
    setCurrentSlideIndex(newIndex);
  };
  const onLeft = () => {
    const isFirst = currentSlideIndex === 0;
    const newIndex = isFirst ? slides.length - 1 : currentSlideIndex - 1;
    setCurrentSlideIndex(newIndex);
  };
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const slides = [
    {
      url: "https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?cs=srgb&dl=pexels-pixabay-531880.jpg&fm=jpg",
    },
    {
      url: "https://marketplace.canva.com/EAD2962NKnQ/2/0/1600w/canva-rainbow-gradient-pink-and-purple-virtual-background-_Tcjok-d9b4.jpg",
    },
    {
      url: "https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?cs=srgb&dl=pexels-miguel-%C3%A1-padri%C3%B1%C3%A1n-255379.jpg&fm=jpg",
    },
  ];
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://minggatu.zyberapi.site/categories`)
      .then((response) => setData(response.data.data))
      .catch((e) => console.log(e));
  }, []);
  return (
    <div className=" min-h-screen dark:bg-[#1C1A27] overflow-x-hidden overflow-y-auto">
      <Navbar />
      <div className="flex items-center ">
        <div className=" w-3/4 flex justify-center flex-col gap-4 my-5 relative mx-auto items-center">
          <div
            style={{ backgroundImage: `url(${slides[currentSlideIndex].url})` }}
            className=" w-full h-64 rounded-2xl bg-center bg-cover duration-500 lg:w-[800px] lg:h-[400px]"
          ></div>
          <div
            onClick={onLeft}
            className="absolute top-[45%] -translate-x-0 translate-y-[-50] left-3 lg:left-[350px] text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
          >
            <BsChevronCompactLeft size={20} />
          </div>
          <div
            onClick={onRight}
            className="absolute top-[45%] -translate-x-0 translate-y-[-50] right-3 lg:right-[350px] text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
          >
            <BsChevronCompactRight size={20} />
          </div>
        </div>
      </div>
      <div>
        {data.map((list, index) => {
          return <CategoryRow id={list._id} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Home;
