import React from 'react'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'

const HomeSocials = () => {
    return (
        <div className='home__socials'>
            <a href="https://www.linkedin.com/in/johannapenet/" target='_blank'><FaLinkedinIn /></a>
            <a href="https://github.com/Michijoe" target='_blank'><FaGithub /></a>
        </div>
    )
}

export default HomeSocials