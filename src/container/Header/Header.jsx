import React from 'react'
import { motion } from 'framer-motion'
import './Header.scss'
import { images } from '../../constants'
import { AppWrap } from '../../wrapper'

const scaleVariants = {
    whileInView: {
        scale: [0, 1],
        opacity: [0, 1],
        transition: {
            duration: 1,
            ease: 'easeInOut'
        }
    }
}


const Header = () => {
    return (
        <div className="app__header app__flex">

            {/* Name and Title Div */}

            <motion.div
                whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className='app__header-info'
            >

                <div className="app__header-badge">
                    <div className="badge-cmp app__flex">
                        <span><img src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" alt='wave-emoji' /></span>
                        <div style={{ marginLeft: 20 }}>
                            <p className="p-text">Hello, I am</p>
                            <h1 className="head-text">Nirbhik</h1>
                        </div>
                    </div>

                    <div className="tag-cmp app__flex">
                        <p className="p-text">Web Developer</p>
                        <p className="p-text">Software Developer</p>
                    </div>
                </div>
            </motion.div>

            {/* Profile Photo Div */}
            <motion.div
                whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                transition={{ duration: 0.5, delayChildren: 0.5 }}
                className='app__header-img'
            >
                <img src={images.profile} alt="profile_bg" />

                {/* Profile Photo Circle Bg-Img */}

                <motion.img
                    whileInView={{ scale: [0, 1] }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                    src={images.circle}
                    alt='profile.circle'
                    className='overlay_circle'
                />
            </motion.div>

            {/* Skills Circling Profile Photo div */}
            <motion.div
                variants={scaleVariants}
                whileInView={scaleVariants.whileInView}
                className='app__header-circles'

            >
                {[images.sass, images.javascript, images.react, images.node, images.mongodb].map((circle, index) => (
                    <motion.div
                        className="circle-cmp app__flex"
                        key={`circle-${index}`}
                        whileHover={{ scale: 1.2 }}

                    >
                        {/* Individual elements floating around */}
                        <img src={circle} alt="circle" />
                        {/* <img src={circle.img} alt="circle" /> */}
                    </motion.div>
                ))
                }


            </motion.div >


        </div >
    )
}

export default AppWrap(Header, 'home')