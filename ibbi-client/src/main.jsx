import React from 'react'
import ReactDOM from 'react-dom/client'
import './reset.css'
import Home from './Home.jsx'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import CadastrarProduto from './CadastrarProduto.jsx';
import CadastrarCategoria from './CadastrarCategoria.jsx';
import Cadastro from './Cadastro.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "cadproduto",
    element: <CadastrarProduto/>,
  },
  {
    path: "cadcategoria",
    element: <CadastrarCategoria/>,
  },
  {
    path: "caduser",
    element: <Cadastro/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
