import React from "react";
import MainSearch from "../components/MainSearch";
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Busca() {
    return (
        <div>
            <Header />
            <Navbar />
            <MainSearch/>
            <Footer />
        </div>
    )
}

export default Busca;