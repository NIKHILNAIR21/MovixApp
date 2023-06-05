import React from "react";
import HeroBanner from "./heroBanner/HeroBanner";
import Trending from "./trending/Trending";
import Popular from "./popular/Popular";
import TopRated from "./topRated/TopRated";
import "./home.scss";
const Home = () => {
  return (
    <div className="homepage">
      <HeroBanner />
      <Trending />
      <Popular />
      <TopRated />
      {/* <div style={{ height: "100px" }}></div> */}
    </div>
  );
};

export default Home;
