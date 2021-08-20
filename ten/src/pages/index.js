import React from 'react'
import Header from '../components/Header'
import ImageSection from '../components/ImageSection'
import Feature from '../components/Feature'
import Benefit from '../components/Benefit'
import Testimonial from '../components/Testimonial'
import VideoComponent from '../components/VideoComponent'
import Footer from '../components/Footer'


const Home = () => {
    return (
        <div>
            <Header />
            <ImageSection />    
            <Feature />
            <Benefit />
            <Testimonial />
            <VideoComponent />
            <Footer />
        </div>
    )
}

export default Home
