import '../../index.css'

import Hero from './sections/Hero/Hero.tsx'
import About from './sections/About/About.tsx'
import Skills from './sections/Skills/Skills.tsx'
import Contact from './sections/Contact/Contact.tsx'
import Projects from './sections/Projects/Projects.tsx'

const Home = () => {

    return (
        <>
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Contact />
        </>
    )
}

export default Home;