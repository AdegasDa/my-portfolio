import '../../../../index.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'    
import { faArrowDownLong } from '@fortawesome/free-solid-svg-icons'
import { faComputerMouse } from '@fortawesome/free-solid-svg-icons'

import Section from '../../../../components/Section.tsx'

const Hero = () => {

    return (
        <>
            <Section id='hero'>
                <div className="sm:h-screen flex">
                    <div className="md:basis-3/6 md:mx-auto md:my-auto md:p-0 m-8">
                        <p className=" text-xl text-custom-light">Hi, my name is</p>
                        <h1 className=" text-6xl m-0 my-3 text-custom-light font-bold">Daniel Adegas.</h1>
                        <h2 className=" text-6xl m-0 mb-3 text-custom-secondary font-bold">On The Journey Of</h2>
                        <h2 className=" text-6xl m-0 mb-3 text-custom-secondary font-bold">Becoming A Computer Engineer.</h2>
                        <p className="text-xl max-w-lg p-0 m-0 text-custom-secondary font-bold">I am a student pursuing Computer Engineering, 
                            Brazilian and Portuguese, living in Portugal since 2019. <span className="text-custom-dark">Passionate about 
                            technology</span>.
                        </p>
                        <div className='mt-8 flex items-center'>
                            <FontAwesomeIcon icon={faArrowDownLong} className='me-2 h-6 text-custom-light'/>
                            <FontAwesomeIcon icon={faComputerMouse} className='h-6 text-custom-light'/>
                        </div>
                    </div>
                </div>
            </Section>
        </>
    )
}

export default Hero;