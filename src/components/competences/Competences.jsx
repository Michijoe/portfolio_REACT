import React from 'react'
import './competences.css'
import Detail from './Detail'
import { BsFillPatchCheckFill } from 'react-icons/bs'

const Competences = () => {
    return (
        <section id='competences'>
            <h2>Mes compétences</h2>
            <div className="container competence__container">
                <div className="competence__frontend">
                    <h3>Développement Frontend</h3>
                    <div className="competence__content">
                        <Detail icon={BsFillPatchCheckFill} name='HTML' level='Avancé' />
                        <Detail icon={BsFillPatchCheckFill} name='CSS' level='Avancé' />
                        <Detail icon={BsFillPatchCheckFill} name='JS' level='Intermédiaire' />
                        <Detail icon={BsFillPatchCheckFill} name='React' level='Intermédiaire' />
                        <Detail icon={BsFillPatchCheckFill} name='Vue JS' level='Débutant' />
                    </div>
                </div>
                <div className="competence__backend">
                    <h3>Développement Backend</h3>
                    <div className="competence__content">
                        <Detail icon={BsFillPatchCheckFill} name='PHP' level='Avancé' />
                        <Detail icon={BsFillPatchCheckFill} name='MySQL' level='Intermédiaire' />
                        <Detail icon={BsFillPatchCheckFill} name='Laravel' level='Intermédiaire' />
                        <Detail icon={BsFillPatchCheckFill} name='Node JS' level='Intermédiaire' />
                    </div>
                </div>
                <div className="competence__annexe">
                    <h3>Compétences annexes</h3>
                    <div className="competence__content">
                        <Detail icon={BsFillPatchCheckFill} name='Git' level='Intermédiaire' />
                        <Detail icon={BsFillPatchCheckFill} name='Figma' level='Débutant' />
                        <Detail icon={BsFillPatchCheckFill} name='Gestion de médias numériques' level='Avancé' />
                        <Detail icon={BsFillPatchCheckFill} name='Méthode Agile' level='Intermédiaire' />
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Competences