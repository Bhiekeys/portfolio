import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ProjectProvider } from './context/projectContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProjectProvider>
      <App />
    </ProjectProvider>
  </React.StrictMode>
);