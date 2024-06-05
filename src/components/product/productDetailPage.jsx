import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

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
    (<div>
        <img src={product.image} alt={product.title} />
        <h2>{product.title}</h2>
        <p>${product.price}</p>
    </div>) :
    "Loading..."
  )
}
