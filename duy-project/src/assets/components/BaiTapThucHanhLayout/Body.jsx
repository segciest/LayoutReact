import React from "react";
import BodyBanner from "./BodyBanner";
import BodyItem from "./BodyItem";

const Body = () => {
  return (
    <div className="body container ">
      <div
        className="bodyBanner mx-5 mt-10 rounded "
        style={{ backgroundColor: "#F8F9FA" }}
      >
        <BodyBanner />
      </div>
      <div className="bodyContent grid grid-cols-2 grid-rows-3 mt-10 mx-5 gap-5 mb-7">
        <BodyItem />
      </div>
    </div>
  );
};

export default Body;
