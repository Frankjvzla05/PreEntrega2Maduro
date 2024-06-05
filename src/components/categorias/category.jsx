import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { ProductResume } from '../product/productResume';

export const Category = () => {
    let [categoryProducts, setCategoryProducts] = useState();
    let {categoryId} = useParams();

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/category/${categoryId}`)
            .then(res=>res.json())
            .then(data=>setCategoryProducts(data))
    }, [categoryId])
  return (
    categoryProducts ?
    (<div>
        <h2>{categoryId}</h2>
       { categoryProducts.map((product, index) => {
        return(
           <ProductResume key={index} product={product} /> 
        )
       })}
    </div>) :
    "Loading ..."
  )
}
