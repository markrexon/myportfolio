import React from 'react'
import HeaderComponent from './components/header'
import Herosection from './components/herosection'
import Education from './components/education'
import Skills from './components/skills'
import Contact from './components/contact'
import Projects from './components/project'
import Experience from './components/experience'

const MyPortfolio = () => {
    return (
        <div className='w-full min-h-screen'>
            <HeaderComponent />
            <Herosection />
            <Education />
            <Skills />
            <Experience />
            <Projects />
            <Contact />

        </div>
    )
}

export default MyPortfolio