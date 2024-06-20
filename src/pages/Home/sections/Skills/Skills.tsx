import '../../../../index.css'

import Section from '../../../../components/Section';
import SkillCard from '../../../../components/SkillCard'

const About = () => {
    return (
        <>
            <Section id='skills'>
                <div className="sm:h-screen flex">
                    <div className="md:basis-3/6 w-full mx-auto my-auto md:p-0 p-8">
                        <h4 className="text-3xl text-custom-dark mb-10 font-bold">03. <span className="text-custom-secondary font-bold">Skills</span></h4>
                        <div className="grid md:grid-flow-col sm:gap-16 gap-8">
                            <div className="col-span-6 max-w-xl">
                                <div className='bg-custom-primary rounded-2xl p-4'>
                                    <h6 className='font-semibold text-center text-custom-light text-xl bg-custom-dark rounded-md py-4'>Proficient in:</h6>
                                    <ul className="list-inside list-disc my-4 flex-col flex gap-1">
                                        <SkillCard skill='React' rate={4} />
                                        <SkillCard skill='JavaScript & TypeScript' rate={5} />
                                        <SkillCard skill='HTML & CSS' rate={4} />
                                        <SkillCard skill='JQuery' rate={5} />
                                        <SkillCard skill='Java' rate={5} />
                                        <SkillCard skill='PHP' rate={4} />
                                        <SkillCard skill='Bootstrap & Tailwind' rate={5} />
                                        <SkillCard skill='SQL' rate={5} />
                                        <SkillCard skill='MVC architecture' rate={5} />

                                       </ul>
                                </div>
                            </div>
                            <div className="col-span-6 max-w-xl">
                                <div className='bg-custom-primary rounded-2xl p-4'>
                                    <h6 className='font-semibold text-center text-custom-light text-xl bg-custom-dark rounded-md py-4'>Working Knowledge Of:</h6>
                                    <ul className="list-inside list-disc my-4 flex-col flex gap-1">
                                        <SkillCard skill='Angular' rate={3} />
                                        <SkillCard skill='Framer Motion' rate={3} />
                                        <SkillCard skill='Git' rate={2} />
                                        <SkillCard skill='Agile Projects' rate={3} />
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </>
    )
}

export default About;