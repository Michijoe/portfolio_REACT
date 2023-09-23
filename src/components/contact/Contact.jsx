import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_6r57i1h', 'template_nzscl19', form.current, 'UvjZIANltR07Ys0b8')
        e.target.reset()
    };

    return (
        <section id='contact'>
            <h2>Contactez-moi</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5>johanna.penet@gmail.com</h5>
                        <a href="mailto:johanna.penet@gmail.com" target="_blank">Envoyer un message</a>
                    </article>
                </div>
                {/* END OF CONTACT OPTIONS */}
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Votre nom complet' required />
                    <input type="email" name='email' placeholder='Votre courriel' required />
                    <textarea name="message" rows="7" placeholder='Votre message' required ></textarea>
                    <button type='submit' className='btn btn-primary'>Envoyer</button>
                </form>
            </div>
        </section>
    )
}

export default Contact