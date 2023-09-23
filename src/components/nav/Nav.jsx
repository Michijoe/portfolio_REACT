import React from 'react'
import './nav.css'
import { VscHome } from 'react-icons/vsc'
import { TbUserHeart } from 'react-icons/tb'
import { RiSeedlingLine } from 'react-icons/ri'
import { RiCodeSSlashFill } from 'react-icons/ri'
import { RiMailSendLine } from 'react-icons/ri'
import { useState } from 'react'

const Nav = () => {
    const [activeNav, setActiveNav] = useState("#");
    return (
        <nav>
            <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><VscHome /></a>
            <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><TbUserHeart /></a>
            <a href="#competences" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><RiSeedlingLine /></a>
            <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><RiCodeSSlashFill /></a>
            <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><RiMailSendLine /></a>
        </nav>
    )
}

export default Nav