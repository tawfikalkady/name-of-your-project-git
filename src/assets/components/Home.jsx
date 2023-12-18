import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

const Home = () => {
    const products=useLoaderData()
  return (
    <div>
        <h3>all products:{products.length}</h3>
        {
            products.map(product => <li key={product.id}>
                <Link to={`/products/${product.id}`}>{product.name}</Link>
            </li>) 
        }
    </div>
  )
}

export default Home