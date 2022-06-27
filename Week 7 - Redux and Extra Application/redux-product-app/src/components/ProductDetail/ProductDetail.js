import React from 'react'
import { useSelector } from 'react-redux'
import { getAllProducts } from '../../features/products/productSlice'
import { useParams } from "react-router-dom";
import '../ProductDetail/ProductDetail.css'
const ProductDetail = () => {

  const product = useSelector(getAllProducts);
  const { id } = useParams();

  return (
    <div>
      <div className='detail'>
        <div> {<img className='image-detail' src={product[id - 1].image} alt={product[id - 1].title} />}</div>
        <div className='product-detail'>{product[id - 1].title}
          <br />
          <br />
          {product[id - 1].description}</div>
      </div>
    </div>
  )
}

export default ProductDetail