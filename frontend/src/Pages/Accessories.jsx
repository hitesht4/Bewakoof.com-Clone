import React from "react";
import Popular from "../Components/Categories/Popular";
import Header from "../Components/Categories/Header";
import Trending from "../Components/Categories/Trending";
import Categories from "../Components/Categories/Categories";
import Slider from "../Components/Categories/Slider";
import Favourites from "../Components/Categories/Favourites";
import Whatsnew from "../Components/Categories/Whatsnew";
import Footer from "../Components/Home/Footer";
import Navabar from "../Components/Home/Navbar";
import data from "../Data.json";

const Accessories = () => {
  return (
    <div>
      <Navabar />
      <Header data={data.HeaderA} />
      <Popular data={data.popularA} />
      <Trending data={data.TrendingA} />
      <Categories data={data.Cat} />
      <Slider data={data.SliderA} />
      <Favourites data={data.FavA} />
      <Whatsnew data={data.WhatsnewA} />
      <Footer />
    </div>
  );
};

export default Accessories;
