import React from 'react'
import './home.css'
import Data from "./Data";


const Home = () => {
    return (
        <section id='home'>
            <div className="container">
                <div className="home__content">
                    <div className="home__img"></div>
                    <Data />
                </div>
            </div>
        </section>
    )
}

export default Home