import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import  {add} from "../Store/cartSlice";

const Products = () => {

  const dispatch = useDispatch();
  const [product, setProduct] = useState([]);

  useEffect(() => {

    const fetchStoreData = async () => {

      await axios.get('https://fakestoreapi.com/products')
      .then((res) => setProduct(res.data))
      .catch((err) => console.error(err))
    };

    fetchStoreData();
  }, []);


  const handleAdd = (products) => {

      dispatch(add(products))
  }

  return <div className="productsWrapper">

  {
    
    product.map( (products, index) => (

        <div className="card" key={products.id}>

            <img src={products.image} alt="shopping" />
            <p>{products.price}</p>
            <p>{products.category} </p>
            {/* <p>{products.title}</p> */}
            <button className="btn" onClick={() => handleAdd(products)}>Add to Chart</button>
        </div>
    ))
  }

  </div>;
};

export default Products;
