import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    // Smoothly scroll to top when location changes
    window.scrollTo({ top: 5, behavior: 'smooth' });
  }, [location]);

  return <>{children}</>;
};

export default Layout;
