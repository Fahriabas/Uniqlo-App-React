import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ColorSchemesExample from './components/Navbar.jsx'
import Sidebar from './components/SideBar.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import FooterAdmin from './components/FooterAdmin.jsx'
// import 'bootstrap-icons/font/bootstrap-icons.css'
import { RouterProvider } from "react-router-dom"
import router from './routes/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)
