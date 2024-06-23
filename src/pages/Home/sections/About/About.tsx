import '../../../../index.css'

import avatar from '../../../../assets/images/avatar.jpg'

import { bioAboutMe } from '../../../../constants/data.tsx';
import Section from '../../../../components/Section.tsx'

const About = () => {
    return (
        <>
            <Section id='about'>
                <div className="sm:h-screen flex">
                    <div className="md:basis-7/12 md:mx-auto md:my-auto md:p-0 mx-8">
                        <h4 className="text-3xl text-custom-dark mb-10 font-bold">01. <span className="text-custom-secondary font-bold">About Me</span></h4>
                        <div className="sm:grid sm:grid-flow-col ">
                            <div className="col-span-9 max-w-xl">
                                <div className='flex flex-col gap-4'>
                                    <p>
                                        {bioAboutMe.text[0]}
                                    </p>
                                    <p>
                                        {bioAboutMe.text[1]}
                                    </p>
                                    <p>
                                        {bioAboutMe.text[2]}
                                    </p>
                                    <p>
                                        {bioAboutMe.text[3]}
                                    </p>
                                </div>
                            </div>
                            <div className="col-span-3 md:flex xl:ms-2 ms-8 flex-col items-center hidden">
                                <img src={avatar} alt="Profile Picture" className="w-60 rounded-xl shadow-md" />
                                <p className='text-center pt-1 text-sm'>( Birth Date: {bioAboutMe.dateBirth} )</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </>
    )
}

export default About;