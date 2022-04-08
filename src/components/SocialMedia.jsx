import React from 'react'
import { BsGithub, BsInstagram } from 'react-icons/bs'
import { FaLinkedinIn } from 'react-icons/fa'


const SocialMedia = () => {
    return (
        <div className="app__social">
            <a href="https://www.github.com/nirbhikn" target='_blank' rel="noreferrer">
                <div><BsGithub /></div>
            </a>
            <a href="https://www.linkedin.com/in/nirbhik/" target='_blank' rel="noreferrer">
                <div><FaLinkedinIn /></div>
            </a>
            <a href="https://www.instagram.com/_nirbhik" target='_blank' rel="noreferrer">
                <div> <BsInstagram /></div>
            </a>
        </div>
    )
}

export default SocialMedia