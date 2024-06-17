import '../../../../index.css'

import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
    const [ menuState, setMenuState ] = useState(false);

    const handleMenu = () => {
        setMenuState((currState : boolean) => {
            return !currState;
        });
    }

    return (
        <>
            <header className="md:absolute inset-x-0 top-0 z-50">
                <div className='mx-auto md:hidden absolute p-8 top-0 right-0'>
                    <button className='header_button' onClick={handleMenu}>
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                </div>
                <nav className={`justify-center md:justify-end items-center md:px-6 md:py-4 py-8 bg-custom-primary/80 md:bg-transparent md:flex
                    ${menuState ? 'visible' : 'hidden'}`}>
                    <div className=''>
                        <div className='flex md:flex-row flex-col justify-between items-center gap-4'>
                            <a href="#about" className='header_a'><span className='text-custom-dark'>01.</span> About Me</a>
                            <a href="#projects" className='header_a'><span className='text-custom-dark'>02.</span> Projects</a>
                            <a href="#skills" className='header_a'><span className='text-custom-dark'>03.</span> Skills</a>
                            <a href="#contact" className='header_a'><span className='text-custom-dark'>04.</span> Contact</a>
                            <button className='header_button'>Download CV</button>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default NavBar;