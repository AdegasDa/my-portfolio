import '../../index.css'

import Hero from './sections/Hero/Hero.tsx'
import About from './sections/About/About.tsx'
import Skills from './sections/Skills/Skills.tsx'
import Contact from './sections/Contact/Contact.tsx'
import Projects from './sections/Projects/Projects.tsx'
import NavBar from './sections/NavbBar/NavBar.tsx'

const Home = () => {

    return (
        <>
            <div className='md:gap-0 sm:gap-80 gap-20 grid'>
                <NavBar />
                <Hero />
                <About />
                <Projects />
                <Skills />
                <Contact />
            </div>
        </>
    )
}

export default Home;