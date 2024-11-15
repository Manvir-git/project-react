import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Home from './home/Home';
import Products from './components/Products';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PumpDetail from './components/PumpDetail';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "products", element: <Products /> },
      { path: "pumpDetail/:pumpId", element: <PumpDetail /> },  // Correct path for dynamic param
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
