import React from 'react'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'

const HomeSocials = () => {
    return (
        <div className='home__socials'>
            <a href="https://www.linkedin.com/in/johannapenet/" aria-label='Linkedin profile' target='_blank' rel="noreferrer"><FaLinkedinIn /></a>
            <a href="https://github.com/Michijoe" aria-label='Github profile' target='_blank' rel="noreferrer"><FaGithub /></a>
        </div>
    )
}

export default HomeSocials