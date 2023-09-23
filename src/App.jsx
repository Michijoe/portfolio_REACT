import React from 'react'
import Home from './components/home/Home.jsx'
import Nav from './components/nav/Nav.jsx'
import About from './components/about/About.jsx'
import Competences from './components/competences/Competences.jsx'
import Portfolio from './components/portfolio/Portfolio.jsx'
import Contact from './components/contact/Contact.jsx'
import Footer from './components/footer/Footer.jsx'

const App = () => {
    return (
        <>
            <Home />
            <Nav />
            <About />
            <Competences />
            <Portfolio />
            <Contact />
            <Footer />
        </>
    )
}

export default App