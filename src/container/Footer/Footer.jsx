import React, { useState } from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Footer.scss';

const Footer = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' })
    const [isFormSubmitted, setIsFormSubmitted] = useState(false)
    const [loading, setLoading] = useState(false)

    const { name, email, message } = formData

    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        // taking input and setting the value of name by destructing
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = () => {
        setLoading(true)


        const contact = {
            _type: 'contact',
            name: name,
            email: email,
            message: message,
        }

        client.create(contact)
            .then(() => {
                setLoading(false)
                setIsFormSubmitted(true)
            })
    }

    return (
        <>
            <h2 className="head-text">Connect with me</h2>
            <div className="app__footer-cards">
                <div className="app__footer-card">
                    <img src={images.email} alt="email" />
                    <a href="mailto:neupane.nirbhik1@gmail.com" className='p-text'>neupane.nirbhik1@gmail.com</a>
                </div>
                <div className="app__footer-card">
                    <img src={images.mobile} alt="mobile" />
                    <a href="tel: :+91 9955472887" className='p-text'>+91 9955472887</a>
                    <a href="tel: :+977 9842043000" className='p-text'>+977 9842043000</a>
                </div>
            </div>


            {/* If user hasn't submitted the form */}
            {!isFormSubmitted ?

                <div className="app__footer-form app__flex">
                    <div className="app__flex">
                        <input type="text" className="p-text" placeholder='Your Name' name='name' value={name} onChange={handleChangeInput} />
                    </div>

                    <div className="app__flex">
                        <input type="email" className="p-text" placeholder='Your Email' name='email' value={email} onChange={handleChangeInput} />
                    </div>

                    <div>
                        <textarea className="p-text"
                            placeholder='Your Message'
                            value={message}
                            name='message'
                            onChange={handleChangeInput}
                        />
                    </div>

                    <button type='button' className="p-text" onClick={handleSubmit}>{loading ? 'Sending' : 'Send Message'}</button>
                </div>
                :

                //If the user has submitted the form show this

                <div>
                    <h3 className="head-text">Thank you for getting in touch</h3>
                </div>
            }


            <div className="copyright">
                <p className="p-text">© 2022 NIRBHIK</p>
                <p className="p-text">All rights reserved</p>
            </div>



        </>
    )
}

// When there is  testimonial section

// export default AppWrap(
//     MotionWrap(Footer, 'app__footer'),
//     'contact',
//     'app__whitebg'
// )

// When there is no testimonial section

export default AppWrap(
    MotionWrap(Footer, 'app__footer'),
    'contact',
    'app__primarybg'
)
