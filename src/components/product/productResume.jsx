import React from 'react'
import { Link } from 'react-router-dom'

export const ProductResume = (props) => {
  return (
    <div>
        <Link to={`/product/${props.product.id}`}>
            <img src={props.product.image} alt='product-image' />
            <h4>{props.product.title}</h4>
        </Link>
    </div>
  )
}
