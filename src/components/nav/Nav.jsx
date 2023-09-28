import React from 'react'
import './nav.css'
import { VscHome } from 'react-icons/vsc'
import { TbUserHeart } from 'react-icons/tb'
import { BsDatabaseFillGear } from 'react-icons/bs'
import { GoFileCode } from 'react-icons/go'
import { RiMailSendLine } from 'react-icons/ri'
import { useState } from 'react'

const Nav = () => {
    const [activeNav, setActiveNav] = useState("#");
    return (
        <nav>
            <a href="#home" aria-label='Home' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><VscHome /></a>
            <a href="#about" aria-label='About' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><TbUserHeart /></a>
            <a href="#competences" aria-label='Competences' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BsDatabaseFillGear /></a>
            <a href="#portfolio" aria-label='Portfolio' onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><GoFileCode /></a>
            <a href="#contact" aria-label='Contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><RiMailSendLine /></a>
        </nav>
    )
}

export default Nav