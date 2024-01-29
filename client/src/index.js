import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ApiContext from './Contexts/ApiContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApiContext.Provider value="http://localhost:5000/api">
    <App />
  </ApiContext.Provider>
);