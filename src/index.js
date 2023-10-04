import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import { BookATable } from './pages';
import './index.css';
import App from './App';

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />
    },
    {
      path: "home",
      element: <App />
    },
    {
      path: "BookATable",
      element: <BookATable />
    }
  ]);

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <RouterProvider router={router}/>
);
