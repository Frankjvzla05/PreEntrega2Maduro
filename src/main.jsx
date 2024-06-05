import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
    createBrowserRouter,
} from "react-router-dom";
import Inicio from './components/categorias/inicio';
import "./css/main.css";
import ErrorPage from './error-page';
import { RopaMujer } from './components/categorias/ropaMujer';
import RopaHombre from './components/categorias/ropaHombre';
import Joyas from './components/categorias/joyas';
import Electronica from './components/categorias/electronica';
import App from './App';
import { ProductDetailPage } from './components/product/productDetailPage';
import { Category } from './components/categorias/category';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Inicio />
      },
      {
        path: "category/:categoryId",
        element: <Category />
      },
      {
        path: "product/:productId",
        element: <ProductDetailPage />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
