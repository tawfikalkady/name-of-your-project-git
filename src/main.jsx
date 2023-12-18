import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './assets/components/Home.jsx';
import ProductCard from './assets/components/ProductCard.jsx';
// import { params } from 'react-router-dom';
const router = createBrowserRouter([
  {
    path: "/",element: <App/>,
    children:[
      {path: "/products",element: <Home/>,loader:() => fetch('http://localhost:3000/products')},
      {path: "/products/:id",element: <ProductCard/>,loader:({params}) => fetch(`http://localhost:3000/products/${params.id}`) }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)
