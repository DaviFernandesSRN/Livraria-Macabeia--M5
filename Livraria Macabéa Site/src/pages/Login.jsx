import React, {useContext, useState} from 'react';
import { AuthContext } from '../context/AuthContext';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LoginBox from '../components/LoginBox'

function Login() {
   return (
    <div>
      <Header />
      <Navbar />
  
    <LoginBox/>
    <Footer />
    </div>
  )
}

export default Login;
