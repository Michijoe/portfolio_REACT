import React from 'react'
import './footer.css'
import HomeSocials from '../home/HomeSocials'

const Footer = () => {
    return (
        <footer>
            <a href="#home" className='footer__logo'>Johanna Pénet</a>

            <ul className='permalinks'>
                <li><a href="#home">Accueil</a></li>
                <li><a href="#about">À Propos</a></li>
                <li><a href="#competences">Compétences</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="footer__socials">
                <HomeSocials />
            </div>
            <div className="footer__copyright">
                <small>&copy;2023 Johanna Pénet | Tous droits réservés.</small>
            </div>
        </footer>
    )
}

export default Footer