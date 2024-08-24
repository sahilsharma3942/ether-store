import React from "react";
import { useState } from "react";
import "./Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";

const Product = () => {
  const id = useParams().id;
  const {data} = useFetch(`https://fakestoreapi.com/products/${id}`)
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  return (
    <div className="product">
          <div className="left">
            <div className="images">
              <img
                src={data.image}
                alt=""
              />
              
            </div>
            <div className="mainImg">
              <img
                alt=""
                src={data.image}
              />
            </div>
          </div>
          <div className="right">
            <h1>{data.title}</h1>
            <span className="price">${data.price}</span>
            <p>{data.description}</p>
            <div className="quantity">
              <button
                onClick={() =>
                  setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                }
              >
                -
              </button>
              {quantity}
              <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
            </div>
            <button
              className="add"
              onClick={()=>dispatch(addToCart({
                ...data,
                quantity:quantity
              }))}
            >
              <AddShoppingCartIcon /> ADD TO CART
            </button>
            <div className="links">
              <div className="item">
                <FavoriteBorderIcon /> ADD TO WISH LIST
              </div>
              <div className="item">
                <BalanceIcon /> ADD TO COMPARE
              </div>
            </div>
            <div className="info">
              <span>Vendor: Polo</span>
              <span>Product Type: T-Shirt</span>
              <span>Tag: T-Shirt, Women, Top</span>
            </div>
            <hr />
            <div className="info">
              <span>{data.description}</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
            </div>
          </div>
    </div>
  );
};

export default Product;