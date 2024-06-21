import '../../../../index.css'

import Section from '../../../../components/Section';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
    return (
        <>
            <Section id='contact'>
                <div className="sm:h-screen flex flex-col">
                    <div className="md:basis-3/6 mx-auto my-auto grid place-content-center md:p-0 p-8">
                        <h4 className="text-xl mx-auto text-custom-dark mb-6">04. <span className="text-custom-secondary font-semibold">Contact</span></h4>
                        <h4 className="text-3xl mx-auto text-custom-dark mb-4 font-semibold">Get In Touch</h4>
                        <p className="mx-auto">Email: danieladegass@hotmail.com</p>
                        <p className="mx-auto">Mobile: (+351) 910881658</p>
                        <div className='flex flex-row gap-4 justify-center'>
                            <div className='flex justify-center items-center flex-row gap-2'>
                                <FontAwesomeIcon className='text-custom-secondary h-5' icon={faLinkedin}/>
                                <a href="https://www.linkedin.com/in/daniel-adegas-946615252/" target='_blank' className=' text-custom-dark hover:text-custom-secondary underline underline-offset-2'>LinkdIn</a>
                            </div>
                            <div className='flex justify-center items-center flex-row gap-2'>
                                <FontAwesomeIcon className='text-custom-secondary h-5' icon={faGithubSquare}/>
                                <a href="https://github.com/AdegasDa" target='_blank' className=' text-custom-dark hover:text-custom-secondary underline underline-offset-2'>GitHub</a>
                            </div>
                            
                        </div>
                    </div>
                    <div className="mx-auto pb-3">
                        Developed & designed by Daniel Adegas.
                    </div>
                </div>
            </Section>
        </>
    )
}

export default Contact;