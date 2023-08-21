import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import React from "react";
import SingleCat from "./SingleCat";
import NewsDetail from "./NewsDetail";
import Footer from "./Footer";

const Pages = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path={"/"} element={<Home />} />
          <Route path={"/categories/:catId"} element={<SingleCat />} />
          <Route path={"/post/:postId"} element={<NewsDetail />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
};

export default Pages;
