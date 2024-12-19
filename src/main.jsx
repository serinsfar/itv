import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter, Outlet } from 'react-router-dom';
import Navbar from './Components/navbar/Navbar.jsx';
import FooterF from './Components/footer/FooterF.jsx';

const Layout = () => {
  return (
<div>
  <Navbar />
  <Outlet />
  <FooterF />
</div>
  );
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> {/* Wrap the App with BrowserRouter */}
      <App />
    </BrowserRouter>
  </StrictMode>,
);


