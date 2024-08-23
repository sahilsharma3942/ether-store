import React, { useState } from "react";
import "./Products.scss";
import List from "../../components/List/List";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";

const Products = () => {
  const param = useParams().id;
  const [selectedCategory, setSelectedCategory] = useState([param]);
  const [maxPrice , setMaxPrice] = useState(1000)
  const { data } = useFetch("https://fakestoreapi.com/products/categories");

  function clickHandler(e){
    if(e.target.value===param) return;
    if(e.target.checked){
      setSelectedCategory((prev)=>[...prev,e.target.value]);
    }else{
      setSelectedCategory(selectedCategory.filter((p)=>p!==e.target.value))
    }
  }

  function changeHandler(e){
    setMaxPrice(e.target.value);
  }
  console.log(selectedCategory);
  return (
    <div className="products">
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
          {data.map((category,index) => {
            return (
              <div className="inputItem" key={index}>
                <input type="checkbox" id={category} value={category} onClick={clickHandler}/>
                <label htmlFor={category}>{category}</label>
              </div>
            );
          })}
        </div>
        <div className="filterItem">
          <h2>Filter by price</h2>
          <div className="inputItem">
            <span>0</span>
            <input type="range" min={0} max={1000} onChange={changeHandler} />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h2>Sort by</h2>
          <div className="inputItem">
            <input type="radio" id="asc" value="asc" name="price" />
            <label htmlFor="asc">Price (Lowest first)</label>
          </div>
          <div className="inputItem">
            <input type="radio" id="desc" value="desc" name="price" />
            <label htmlFor="desc">Price (Highest first)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img
          className="catImg"
          src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
        />
        
        {
          selectedCategory.map((category)=>{
            return <List category={category} maxPrice/>
          })
        }
      </div>
    </div>
  );
};

export default Products;
