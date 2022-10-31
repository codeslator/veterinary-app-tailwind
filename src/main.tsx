import React from 'react';
import ReactDOM from 'react-dom/client';
import VeterinaryApp from './VeterinaryApp';
import './views/assets/styles/index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <VeterinaryApp />
  </React.StrictMode>
)
