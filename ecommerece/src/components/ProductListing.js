import React, {useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";
import ProductComponents from "./ProductComponents"
import {setProducts} from "../redux/actions/productAction";
import axios from "axios"


const ProductListing = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch()
  console.log("products:", products);

  const fetchProducts = async () => {
         const response = await axios.get('https://fakestoreapi.com/products').catch((error) =>{
                console.error("fuck off! error occured", error)
         })
         dispatch(setProducts(response.data))
  }
  useEffect(() =>{
         fetchProducts();
  }, [])

  return (
    <div className="ui grid container">
      <ProductComponents/>
    </div>
  );
};

export default ProductListing;
