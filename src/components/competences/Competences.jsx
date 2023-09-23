import React from 'react'
import './competences.css'
import Detail from './Detail'
import { BsFillPatchCheckFill } from 'react-icons/bs'
import { AiFillHtml5 } from 'react-icons/ai'
import { IoLogoCss3 } from 'react-icons/io'
import { RiJavascriptFill } from 'react-icons/ri'
import { FaReact } from 'react-icons/fa'
import { BiLogoVuejs } from 'react-icons/bi'
import { BiLogoPhp } from 'react-icons/bi'
import { GrMysql } from 'react-icons/gr'
import { FaLaravel } from 'react-icons/fa'
import { FaNodeJs } from 'react-icons/fa'
import { FaGitAlt } from 'react-icons/fa'
import { FaFigma } from 'react-icons/fa'
import { MdPermMedia } from 'react-icons/md'
import { PiArrowsCounterClockwiseDuotone } from 'react-icons/pi'

const Competences = () => {
    return (
        <section id='competences'>
            <h2>Mes compétences</h2>
            <div className="container competence__container">
                <div className="competence__frontend">
                    <h3>Frontend</h3>
                    <div className="competence__content">
                        <Detail icon={AiFillHtml5} name='HTML' level='Avancé' />
                        <Detail icon={IoLogoCss3} name='CSS' level='Avancé' />
                        <Detail icon={RiJavascriptFill} name='JS' level='Intermédiaire' />
                        <Detail icon={FaReact} name='React' level='Intermédiaire' />
                        <Detail icon={BiLogoVuejs} name='Vue JS' level='Débutant' />
                    </div>
                </div>
                <div className="competence__backend">
                    <h3>Backend</h3>
                    <div className="competence__content">
                        <Detail icon={BiLogoPhp} name='PHP' level='Avancé' />
                        <Detail icon={GrMysql} name='MySQL' level='Intermédiaire' />
                        <Detail icon={FaLaravel} name='Laravel' level='Intermédiaire' />
                        <Detail icon={FaNodeJs} name='Node JS' level='Intermédiaire' />
                    </div>
                </div>
                <div className="competence__annexe">
                    <h3>Annexes</h3>
                    <div className="competence__content">
                        <Detail icon={FaGitAlt} name='Git' level='Intermédiaire' />
                        <Detail icon={FaFigma} name='Figma' level='Débutant' />
                        <Detail icon={PiArrowsCounterClockwiseDuotone} name='Agile' level='Intermédiaire' />
                        <Detail icon={MdPermMedia} name='Gestion médias' level='Avancé' />
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Competences