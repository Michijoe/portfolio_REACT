import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio.jpg'
import Stampee from '../../assets/portfolio-stampee.png'
import { FiGithub } from 'react-icons/fi'
import { HiOutlineExternalLink } from 'react-icons/hi'


const data = [
    {
        id: 1,
        image: Stampee,
        title: 'Stampee, plateforme d\'enchères de timbres',
        description: "Gestion des utilisateurs, création de compte membre, création et modification d'enchères, placement de mises, recherche par critères dans les catalogues.",
        tags: 'UX/UI, POO, CRUD',
        languages: 'PHP, MySQL, JS',
        github: 'https://github.com/Michijoe/s4_php_Stampee',
        demo: 'https://stampee.johannapenet.com/'
    },
    {
        id: 2,
        image: IMG1,
        title: 'Projet à venir',
        description: 'Projet à venir',
        languages: 'Projet à venir',
        github: 'https://github.com',
        demo: '#'
    },
    {
        id: 3,
        image: IMG1,
        title: 'Projet à venir',
        description: 'Projet à venir',
        languages: 'Projet à venir',
        github: 'https://github.com',
        demo: '#'
    }
]
const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {
                    data.map(({ id, image, title, description, tags, languages, github, demo }) => {
                        return (
                            <article key={id} className='portfolio__item'>
                                <div className="portfolio__item-image">
                                    <a href={demo} target='_blank'><img src={image} alt={title} /></a>
                                </div>
                                <h3>{title}</h3>
                                <div className='portfolio__item-description'>
                                    <p>{description}</p>
                                    <span><strong>Concepts :</strong> {tags}</span>
                                    <span><strong>Languages :</strong> {languages}</span>
                                </div>
                                <div className="portfolio__item-cta">
                                    <a href={github} target='_blank'><FiGithub /></a>
                                    <a href={demo} target='_blank'><HiOutlineExternalLink /></a>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Portfolio