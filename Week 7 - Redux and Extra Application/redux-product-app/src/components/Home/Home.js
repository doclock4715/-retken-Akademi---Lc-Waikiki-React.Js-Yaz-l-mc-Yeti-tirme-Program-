import axios from 'axios';
import React from 'react'
import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { addProducts } from '../../features/products/productSlice';
import ProductListing from '../ProductListing/ProductListing'
const Home = () => {
  
  const dispatch = useDispatch()
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get(`https://fakestoreapi.com/products`).catch((err) => {
        console.log(err)
      });
     dispatch(addProducts(response.data)) 
    }
    fetchProducts()
  }, [])

  return (
    <div>
    <ProductListing/>
    </div>
  )
}

export default Home