import React from 'react'
import "../ProductCard/ProductCard.css";
import { Link } from "react-router-dom";


const ProductCard = (props) => {

  const { data } = props

  return (
    <div>
      <Link to={`/product/${data.id}`} >
        <div className='card'>
          <img className='img' src={data.image} alt={data.title} />
          <br />
          {data.title}
        </div>
      </Link>

    </div>
  )
}

export default ProductCard