import React, { useState } from "react";
import ContentWrapper from "../../../component/ContentWrapper/ContentWrapper";
import SwitchTab from "../../../component/switchTab/SwitchTab";
import useFetch from "../../../hooks/useFetch";
import Carousel from "../../../component/carousel/Carousel";

const TopRated = () => {
  const [endPoint, setEndpoint] = useState("movie");

  const { data, loading } = useFetch(`/${endPoint}/top_rated`);

  const onTabChange = (tab) => {
    setEndpoint(tab === "Movies" ? "movie" : "tv");
  };

  return (
    <div className="carouselSection ">
      <ContentWrapper>
        <span className="carouselTitle">Top Rated</span>
        <SwitchTab data={["Movies", "TV shows"]} onTabChange={onTabChange} />
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} endPoint={endPoint} />
    </div>
  );
};

export default TopRated;
