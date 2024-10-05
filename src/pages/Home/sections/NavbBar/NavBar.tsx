import '../../../../index.css'

import { useState } from 'react'
import { Link } from 'react-scroll'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faDownload, faHome, faClipboardList, faLaptop, faSuitcase, faUser } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
    const [ menuState, setMenuState ] = useState(false);

    const handleMenu = () => {
        setMenuState((currState : boolean) => {
            return !currState;
        });
    }

    const Resume = 'https://danieladegas.netlify.app/DanielAdegas_Resume.pdf';

    const downloadFileAtUrl = (url:string) => {
        const fileName = url.split('/').pop() || '';
        const aTag = document.createElement('a')
        aTag.href=url
        aTag.setAttribute('download', fileName)
        document.body.appendChild(aTag)
        aTag.click()
        aTag.remove()
    }

    return (
        <>
            <header>
                <div className="md:absolute inset-x-0 top-0 z-50 header">
                    <div className='mx-auto md:hidden absolute p-8 top-0 right-0'>
                        <button className='header_button' onClick={handleMenu}>
                            <FontAwesomeIcon icon={faBars} />
                        </button>
                    </div>
                    <nav className={`justify-center md:justify-end items-center md:px-6 md:py-4 py-8 bg-custom-primary/80 md:bg-transparent md:flex
                        ${menuState ? 'visible' : 'hidden'}`}>
                        <div className=''>
                            <div className='flex md:flex-row flex-col justify-between items-center gap-4'>
                                <Link smooth={true} to="about" className='header_a cursor-pointer'><span className='text-custom-dark'>01.</span> About Me</Link>
                                <Link smooth={true} to="projects" className='header_a cursor-pointer'><span className='text-custom-dark'>02.</span> Projects</Link>
                                <Link smooth={true} to="skills" className='header_a cursor-pointer'><span className='text-custom-dark'>03.</span> Skills</Link>
                                <Link smooth={true} to="contact" className='header_a cursor-pointer'><span className='text-custom-dark'>04.</span> Contact</Link>
                                <button className='header_button' onClick={() => downloadFileAtUrl(Resume)}><FontAwesomeIcon icon={faDownload} className='me-1' />CV</button>
                            </div>
                        </div>
                    </nav>
                </div>
                <nav className='fixed bottom-3 lg:bottom-5 w-full overflow-hidden z-50'>
                    <div className='container mx-auto'>
                        <div className='sm:w-full w-5/6 bg-blur bg-black/20 max-w-[520px] mx-auto rounded-full px-2 py-2 text-xl sm:text-2xl flex justify-between 
                        items-center text-custom-light'>
                            <Link  smooth={true} spy={true} to="hero" activeClass='active' className='cursor-pointer hover:bg-custom-light/40 hover:rounded-full hover:text-custom-dark sm:w-[60px] flex justify-center 
                            items-center h-[40px] w-[40px] sm:h-[60px]'><FontAwesomeIcon icon={faHome} /></Link>
                            <Link smooth={true} spy={true} to="about" activeClass='active' className='cursor-pointer hover:bg-custom-light/40 hover:rounded-full  hover:text-custom-dark sm:w-[60px] flex justify-center 
                            items-center h-[40px] w-[40px] sm:h-[60px]'><FontAwesomeIcon icon={faUser} /></Link>
                            <Link smooth={true} spy={true} to="projects" activeClass='active' className='cursor-pointer hover:bg-custom-light/40 hover:rounded-full  hover:text-custom-dark sm:w-[60px] flex justify-center 
                            items-center h-[40px] w-[40px] sm:h-[60px]'><FontAwesomeIcon icon={faLaptop} /></Link>
                            <Link smooth={true} spy={true} to="skills" activeClass='active' className='cursor-pointer hover:bg-custom-light/40 hover:rounded-full  hover:text-custom-dark sm:w-[60px] flex justify-center 
                            items-center h-[40px] w-[40px] sm:h-[60px]'><FontAwesomeIcon icon={faClipboardList} /></Link>
                            <Link smooth={true} spy={true} to="contact" activeClass='active' className='cursor-pointer hover:bg-custom-light/40 hover:rounded-full  hover:text-custom-dark sm:w-[60px] flex justify-center 
                            items-center h-[40px] w-[40px] sm:h-[60px]'><FontAwesomeIcon icon={faSuitcase}/></Link>
                            <button onClick={() => downloadFileAtUrl(Resume)} className='hover:bg-custom-light/40 hover:rounded-full  hover:text-custom-dark w-[60px] hidden sm:flex justify-center 
                            items-center h-[60px]'><FontAwesomeIcon icon={faDownload} /></button>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default NavBar;