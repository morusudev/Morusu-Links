import React from 'react';
import ReactDOM from 'react-dom/client'
import RouteIndex from "./Routes/route"
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RouteIndex />  
  </React.StrictMode>
)