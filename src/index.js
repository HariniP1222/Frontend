import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { createRoot } from "react-dom/client";

import {createBrowserRouter,RouterProvider,Route,Link,} from "react-router-dom";

import Login from './Login';
import CreateUser from './CreteUser';

const router = createBrowserRouter([
  
  {
    path:"/",
    element:<Login/>
  },
  {
    path:"/CreateUser",
    element:<CreateUser/>
  }
  
  
]);

  createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
