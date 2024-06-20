import '../../../../index.css'

import Section from '../../../../components/Section';
import SkillCard from '../../../../components/SkillCard'

const About = () => {
    return (
        <>
            <Section id='skills'>
                <div className="sm:h-screen flex">
                    <div className="md:basis-3/6 w-11/12 mx-auto my-auto md:p-0 p-8">
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
                                        <SkillCard skill='MVC architecture' rate={5} />

                                        {/* <li>JavaScript - Skilled in developing dynamic and interactive web applications.</li>
                                        <li>JQuery - Experienced in simplifying HTML document traversing, event handling, and animating for web development.</li>
                                        <li>PHP - Experienced in backend development and building reliable server-side applications.</li>
                                        <li>HTML & CSS - Capable of designing responsive and visually appealing websites.</li>
                                        <li>Java - Proficient in object-oriented programming and developing scalable applications.</li>
                                        <li>Bootstrap & Tailwind - Proficient in structuring and styling web pages for a seamless user experience.</li>
                                        <li>React - Proficient in creating and managing complex user interfaces, leveraging component-based architecture to build scalable and maintainable web applications.</li> */}
                                    </ul>
                                </div>
                            </div>
                            <div className="col-span-6 max-w-xl">
                                <div className='bg-custom-primary rounded-2xl p-4'>
                                    <h6 className='font-semibold text-center text-custom-light text-xl bg-custom-dark rounded-md py-4'>Working Knowledge Of:</h6>
                                    <ul className="list-inside list-disc my-4 flex-col flex gap-1">
                                        <SkillCard skill='Angular' rate={3} />
                                        <SkillCard skill='Framer Motion' rate={3} />
                                        <SkillCard skill='Agile Projects' rate={3} />
                                    </ul>
                                        {/* <li>Angular - Basic understanding of this framework for building single-page applications.</li>
                                        <li>Agile Projects - Familiar with agile methodologies and experienced in working with agile teams.</li> */}
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