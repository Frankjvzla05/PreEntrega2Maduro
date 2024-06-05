import React, { useEffect, useState } from 'react'
import { ProductResume } from '../product/productResume';
import './ItemListContainer.css'

export const ItemListContainer = () => {
  let [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=25')
            .then(res=>res.json())
            .then(data=>setProducts(data))
  },[])
  return (
    <>
    <h3>Productos del sitio Web</h3>
      <div className='items-container'>
      {
        products ? 
          products.map((product, index) => {
            return(
              <ProductResume key={index} product={product} />
            )
          }) :
        "Loading..."
      }
      </div>
    </>
    
  )
}
