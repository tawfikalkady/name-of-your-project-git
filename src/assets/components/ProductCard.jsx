import React from 'react'
import { useLoaderData } from 'react-router-dom'

const ProductCard = () => {
    const product=useLoaderData()
  return (
    <div>
        <h1>single product page</h1>
        <h3>name: {product.name}</h3>
        <img src={product.img} alt="" />
    </div>
  )
}

export default ProductCard