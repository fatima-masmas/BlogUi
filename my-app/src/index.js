import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {newFunction()}
  </React.StrictMode>
);


function newFunction() {
  return <App />;
}

