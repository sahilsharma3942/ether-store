import React, { useEffect, useState } from "react";
import "./FeaturedProducts.scss";
import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";
import Shimmer from "../Shimmer/Shimmer";

const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    "https://fakestoreapi.com/products?limit=4"
  );

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas.
        </p>
      </div>
      <div className="bottom">
        {error
          ? "Something went wrong!"
          : loading
          ? <Shimmer n={4}/>
          : data.map((item) => <Card item={item} key={item.id} />)}
          
      </div>
      
    </div>
  );
};

export default FeaturedProducts;
