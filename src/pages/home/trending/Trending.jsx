import React, { useState } from "react";
import ContentWrapper from "../../../component/ContentWrapper/ContentWrapper";
import SwitchTab from "../../../component/switchTab/SwitchTab";
import useFetch from "../../../hooks/useFetch";
import Carousel from "../../../component/carousel/Carousel";

const Trending = () => {
  const [endPoint, setEndpoint] = useState("day");

  const { data, loading } = useFetch(`/trending/all/${endPoint}`);

  const onTabChange = (tab) => {
    setEndpoint(tab === "Day" ? "day" : "week");
  };

  return (
    <div className="carouselSection ">
      <ContentWrapper>
        <span className="carouselTitle">Trending</span>
        <SwitchTab data={["Day", "Week"]} onTabChange={onTabChange} />
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} />
    </div>
  );
};

export default Trending;
