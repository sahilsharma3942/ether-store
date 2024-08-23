import React from "react";
import "./List.scss";
import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";

const List = ({category}) => {

  const {data,loading} = useFetch(`https://fakestoreapi.com/products/category/${category}`);
  console.log("data");
  return (
    <div className="list">
      {loading?"loading...":data?.map((item) => <Card item={item} key={item.id} />)}
    </div>
  );
};

export default List;