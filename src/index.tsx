import React from 'react';
import ReactDOM from 'react-dom/client';
import Dashboard from './pages/Dashborard';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Dashboard />
  </React.StrictMode>
);

