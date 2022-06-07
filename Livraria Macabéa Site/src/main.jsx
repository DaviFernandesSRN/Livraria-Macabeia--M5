import React from 'react'
import ReactDOM from 'react-dom/client'
<<<<<<< HEAD
// import App from './App'
import './index.css'
import AppRoutes from "./routes";
=======
import Header from './components/Header'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
//import app from './views/home'
import AppHOME from './views/Home.jsx'
import './index.css'
import PaginaLivro from './views/Home.jsx'

>>>>>>> origin/master

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
<<<<<<< HEAD
       
       <AppRoutes />
    
=======
    <Header />
    <Navbar />
    <AppHOME/>
   
    <Footer />
>>>>>>> origin/master
  </React.StrictMode>
 
)

