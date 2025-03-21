import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Home from './home/Home';
import Products from './components/Products';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PumpDetail from './components/PumpDetail';
import AboutUs from './components/About';
import ContactUs from './components/contact';
// import AdminPortal from '../../admin/AdminPortal/AdminPortal';
import 'font-awesome/css/font-awesome.min.css';
import PumpDetails from './components/PumpDetails';
import ContactForm from './components/Enquery';
import Layout from './components/Scroll'; 

const router = createBrowserRouter([
  {
    path: "",
    element: (
      <Layout> 
        <App />
      </Layout>
    ),
    children: [
      { index: true, element: <Home /> },
      { path: "products", element: <Products /> },
      { path: "pumpDetail/:pumpId", element: <PumpDetail /> },
      { path: "pumpDetails/:pumpId", element: <PumpDetails /> },
      { path: "about", element: <AboutUs /> },
      { path: "contact", element: <ContactUs /> },
      { path: "Enquery", element: <ContactForm /> },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


