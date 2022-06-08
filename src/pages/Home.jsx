import React from 'react'
import BannerTop from '../components/BannerTop'
import TopCards from '../components/TopCards'
import BookShop from '../components/BookShop'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import {AuthContext} from '../context/AuthContext';
import { useState} from 'react'
import axios from 'axios'


function Home() {
       
    return (
        <div>
             <Header />
                <Navbar />
             <BannerTop />
            <TopCards />
            <BookShop />
            <Footer />
        </div>  
    )
}

export default Home