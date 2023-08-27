import "./index.css";
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import StudentsProvider from "./hooks/useStudents";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StudentsProvider>
      <App />
    </StudentsProvider>
  </React.StrictMode>
);
