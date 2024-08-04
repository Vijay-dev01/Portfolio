import React, { useEffect } from 'react'
import Home from './Home'
import Skills from './Skills'
import Project from './Project'
import Contact from './Contact'
import Certificates from './Certificates'
import DOTS from 'vanta/src/vanta.dots'

const About = () => {
    useEffect(() => {
        DOTS({
          el: "#your-element-selector",
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          size: 5.70,
          spacing: 30.00
        })
      },)
    return (
        <div id='your-element-selector'>
            <Home />
            <Skills />
            <Project />
            <Certificates />
            <Contact />
        </div>
    )
}

export default About