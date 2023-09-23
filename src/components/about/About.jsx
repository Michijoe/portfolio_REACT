import React from 'react'
import './about.css'
import ME from '../../assets/apropos.webp'
import { FaAward } from 'react-icons/fa'
import { IoMdSchool } from 'react-icons/io'
import CV from '../../assets/cv.pdf'
import { TbUserHeart } from 'react-icons/tb'


const About = () => {
    return (
        <section id='about'>
            <h2>À propos</h2>
            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="Image section A propos" />
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <article className='about__card'>
                            <FaAward className='about__icon' />
                            <h5>Expérience</h5>
                            <small>1 an formation Fullstack</small>
                            <small>+5 ans médias numériques</small>
                        </article>
                        <article className='about__card'>
                            <IoMdSchool className='about__icon' />
                            <h5>Éducation</h5>
                            <small>AEC Conception et Développement de sites web</small>
                        </article>
                    </div>
                    <p>Forte d’une expérience de plus de 5 ans en tant que technicienne à la mise en ligne de contenus audiovisuels pour diverses plateformes numériques web et télé, j’ai développé un intérêt croissant pour les aspects techniques du développement web.</p>
                    <p>J’ai donc décidé en 2022 d’acquérir les compétences nécessaires pour pouvoir évoluer professionnellement dans ce domaine qui me passionne. Je termine présentement ma formation en Conception et programmation de sites web et je souhaite mettre en pratique les compétences que j’ai acquises en tant que développeuse full-stack.</p>
                    <a href={CV} download className='btn'>Téléchargez mon CV</a>
                </div>
            </div>
        </section >
    )
}

export default About