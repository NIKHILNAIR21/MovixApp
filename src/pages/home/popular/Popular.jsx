import React, { useState } from "react";
import ContentWrapper from "../../../component/ContentWrapper/ContentWrapper";
import SwitchTab from "../../../component/switchTab/SwitchTab";
import useFetch from "../../../hooks/useFetch";
import Carousel from "../../../component/carousel/Carousel";

const Popular = () => {
  const [endPoint, setEndpoint] = useState("movie");

  const { data, loading } = useFetch(`/${endPoint}/popular`);

  const onTabChange = (tab) => {
    setEndpoint(tab === "Movies" ? "movie" : "tv");
  };

  return (
    <div className="carouselSection ">
      <ContentWrapper>
        <span className="carouselTitle">What's Popular</span>
        <SwitchTab data={["Movies", "TV shows"]} onTabChange={onTabChange} />
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} endPoint={endPoint} />
    </div>
  );
};

export default Popular;
