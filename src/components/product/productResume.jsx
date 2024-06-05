import React from 'react'
import { Link } from 'react-router-dom'
import './productResume.css'

export const ProductResume = (props) => {
  return (
    <div className='product-resume'>
        <Link to={`/product/${props.product.id}`}>
            <img className="resume-img" src={props.product.image} alt='product-image' />
            <h4>{props.product.title}</h4>
        </Link>
    </div>
  )
}
