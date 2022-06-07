import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AppRoutes from './routes'
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <AppRoutes>
       <App />
       </AppRoutes>
  </React.StrictMode>
)
