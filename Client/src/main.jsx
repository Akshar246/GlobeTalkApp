import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import CssBaseline from '@mui/material/CssBaseline'; // Correct import
import { Helmet, HelmetProvider } from 'react-helmet-async';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <CssBaseline /> {/* Use CssBaseline */}
      <App />
    </HelmetProvider>
  </StrictMode>,
);