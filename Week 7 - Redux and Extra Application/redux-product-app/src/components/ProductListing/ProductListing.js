import React from 'react'
import { useSelector } from 'react-redux'
import { getAllProducts } from '../../features/products/productSlice'
import ProductCard from '../ProductCard/ProductCard'
import "../ProductListing/ProductListing.css"

const ProductListing = () => {
  const products = useSelector(getAllProducts);
/*   let renderProducts = ""; */

  let renderProducts = products.map((product, index) => {
    return (
      <ProductCard key={index} data={product} />
    );
  })


  return (
    <div>
      <div className='body'>
        {renderProducts}
      </div>
    </div>
  )
}

export default ProductListing