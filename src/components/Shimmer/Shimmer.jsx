import React from "react";
import "./Shimmer.scss";

const Shimmer = ({ n }) => {
  const arr = new Array(n);
  const shimmers = arr.fill();

  return (
    <div className="shimmer-wrapper">
      {shimmers.map((index) => {
        return (
          <div className="card-shimmer" key={Math.random()}>
            <div className="image-shimmer"></div>
            <div className="title-shimmer"></div>
            <div className="prices-shimmer">
              <div className="oldPriceShimmer"></div>
              <div className="newPriceShimmer"></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Shimmer;
