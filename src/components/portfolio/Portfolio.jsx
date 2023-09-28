import React from 'react'
import './portfolio.css'
import Stampee from '../../assets/portfolio-stampee.webp'
import Cinema from '../../assets/portfolio-cinema.webp'
import { FiGithub } from 'react-icons/fi'
import { HiOutlineExternalLink } from 'react-icons/hi'


const data = [
    {
        id: 1,
        image: Stampee,
        title: 'Stampee, plateforme d\'enchères de timbres',
        description: "Conception de maquettes graphiques, modélisation de la base de données et programmation orientée objet. Fonctionnalités: Gestion des utilisateurs, création de compte membre, création et modification d'enchères, placement de mises, recherche par critères dans les catalogues.",
        tags: 'UX/UI, POO, CRUD',
        languages: 'PHP, SQL, JS',
        github: 'https://github.com/Michijoe/s4_php_Stampee',
        demo: 'https://stampee.johannapenet.com/'
    },
    {
        id: 2,
        image: Cinema,
        title: 'TMDB, sorties cinéma',
        description: "Application web monopage exploitant les données de l'API de The Movie Data Base pour afficher la liste des films présentement à l'affiche dans les cinémas canadiens, ainsi que des informations détaillées sur chaque films.",
        tags: 'REST API, SPA, Node JS, NPM',
        languages: 'JS',
        github: 'https://github.com/Michijoe/s4_SPA_REST_API_TMDB',
        demo: 'https://tmdb-ish.onrender.com/'
    },
    {
        id: 3,
        image: '',
        title: 'Portfolio',
        description: '',
        tags: 'à venir',
        languages: 'à venir',
        github: '#',
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
                                    <a href={demo} target='_blank' rel="noreferrer"><img src={image} alt={title} /></a>
                                </div>
                                <h3>{title}</h3>
                                <div className='portfolio__item-description'>
                                    <p>{description}</p>
                                    <span><strong>Concepts :</strong> {tags}</span>
                                    <span><strong>Languages :</strong> {languages}</span>
                                </div>
                                <div className="portfolio__item-cta">
                                    <a href={github} aria-label='Projet Github' target='_blank' rel="noreferrer"><FiGithub /></a>
                                    <a href={demo} aria-label='Projet demo' target='_blank' rel="noreferrer"><HiOutlineExternalLink /></a>
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