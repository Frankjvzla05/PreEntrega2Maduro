import React, { useEffect, useState } from 'react'
import { ProductResume } from '../product/productResume';

export const ItemListContainer = () => {
  let [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=25')
            .then(res=>res.json())
            .then(data=>setProducts(data))
  },[])
  return (
    <>
      <div className='items-container'>Productos del sitio Web</div>
      {
        products ? 
          products.map((product, index) => {
            return(
              <ProductResume key={index} product={product} />
            )
          }) :
        "Loading..."
      }
    </>
    
  )
}
