import React from "react";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import "./Cart.scss";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, resetCart } from "../../redux/cartSlice";

const Cart = () => {
  const products = useSelector((store)=>store.cart.products);
  const dispatch = useDispatch();
  console.log(products)
  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      <div className="wrapper">
        {products?.map((item) => (
          <div className="item" key={item.id}>
            <img src={item.image} alt="" />
            <div className="details">
              <h1>{item.title}</h1>
              <p>{item.desc?.substring(0, 100)}</p>
              <div className="price">
                {item.quantity} x ${item.price}
              </div>
            </div>
            <DeleteOutlinedIcon className="delete" onClick={()=>dispatch(removeFromCart(item))}/>
          </div>
        ))}
      </div>
      <div className="total">
        <span>SUBTOTAL</span>
        <span>$total</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className="reset" onClick={()=>dispatch(resetCart())}>Reset Cart</span>
    </div>
  );
};

export default Cart;
