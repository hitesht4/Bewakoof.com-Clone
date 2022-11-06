import React from "react";
import Bannerss from "../Components/Categories/Bannerss";
import Bargain from "../Components/Categories/Bargain";
import Discount from "../Components/Categories/Discount";
import Header from "../Components/Categories/Header";
import Map from "../Components/Categories/Map";
import Popular from "../Components/Categories/Popular";
import Whatsnew from "../Components/Categories/Whatsnew";
import Footer from "../Components/Home/Footer";
import Navabar from "../Components/Home/Navbar";
import data from "../Data.json";

const Banners = [
  "https://images.bewakoof.com/uploads/grid/app/desktop-tod-strip-women-1654149139.jpg",
  "https://images.bewakoof.com/uploads/grid/app/desktop---strip-1440---x-150---tribe-1634552003.png",
  "https://images.bewakoof.com/uploads/grid/app/design-survey-desktop-ticker-banner-1646808890.gif",
];

const Women = () => {
  return (
    <div>
      <Navabar />
      <Header data={data.Slider1W} />
      <Bannerss source={Banners[0]} />
      <Popular data={data.PopularW} />
      <Map data={data.mapW} />
      <Discount data={data.discountW} />
      <Whatsnew data={data.bestsellerW} />
      <Header data={data.Slider2W} />
      <Bargain data={data.BargainW} />
      <Discount data={data.stupid} />
      <Whatsnew data={data.bestsellerW} />
      <Bannerss source={Banners[1]} />
      <Bannerss source={Banners[2]} />
      <Footer />
    </div>
  );
};

export default Women;
