import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './productDetailPage.css'

export const ProductDetailPage = () => {
    let [product, setProduct] = useState();
    let { productId } = useParams();

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${productId}`)
            .then(res=>res.json())
            .then(data=>setProduct(data))
    }, [])
  return (
    product ? 
    (<div className='product-container'>
        <img className="product-img" src={product.image} alt={product.title} />
        <div>
            <h2>{product.title}</h2>
            <p>${product.price}</p>
        </div>
        
    </div>) :
    "Loading..."
  )
}
