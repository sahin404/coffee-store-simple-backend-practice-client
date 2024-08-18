import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Update from './components/Update/Update.jsx';
import Add from './components/Add/Add.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader:()=>fetch('http://localhost:5000/coffee')
  },
  {
    path:'/update/:id',
    element:<Update></Update>,
    loader: ({params})=>fetch(`http://localhost:5000/update/${params.id}`)
  },
  {
    path:'/add',
    element:<Add></Add>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
