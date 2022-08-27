import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../Store/cartSlice";
const Cart = () => {

  const dispatch = useDispatch()
  const products = useSelector( (state) => state.cart);

  const handleRemove = (productId) => {
   
    dispatch(remove(productId))

  }



  return (
    <div>
      <h3> Cart </h3>
      <div className="cardWrapper">
        {products.map((product, index) => (
          <div className="cartCard" key={index}>
            <img src={product.image} alt="shopping" />
            <p>{product.price}</p>
            <p>{product.category} </p>
            {/* <p>{products.title}</p> */}
            <button className="btn" onClick={() => handleRemove(product.id)}> Remove </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
