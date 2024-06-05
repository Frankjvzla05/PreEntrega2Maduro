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
        path: "category/",
        children: [
          {
            path: "ropa-mujer",
            element: <RopaMujer />
          },
          {
            path: "ropa-hombre",
            element: <RopaHombre />
          },
          {
            path: "joyas",
            element: <Joyas />
          },
          {
            path: "electronica",
            element: <Electronica />
          },
        ]
      },
      {
        path: "product/:product-id",
        element: <ProductDetailPage />
      }
    ]
  }
]);

/* const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path="/" element={<App />}>
          <Route index element={<Inicio />} />
          <Route path="/ropa-mujer" element={<RopaMujer />} />
          <Route path="/ropa-hombre" element={<RopaHombre />} />
          <Route path="/electronica" element={<Electronica />} />
          <Route path="/joyas" element={<Joyas />} />
      </Route>
  )
); */

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
