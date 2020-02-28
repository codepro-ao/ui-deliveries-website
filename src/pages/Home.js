import React from 'react'
import Header from '../components shared/Header'
import Hero from '../components/Home/Hero'
import CardList from '../components/Home/CardList'
import AppWrapper from '../components/Home/AppWrapper'
import About from '../components/Home/About'
import DeliveryOptions from '../components/Home/DeliveryOptions'
import Describle from '../components/Home/Describle'
import Footer from '../components shared/Footer'
function Home (){
    return(
        <>
            <Header/>
            <Hero/>
            <CardList/>
            <AppWrapper/>
            <About/>
            <DeliveryOptions/>
            <Describle/>
            <Footer/>
        </>
    )
}

export default Home