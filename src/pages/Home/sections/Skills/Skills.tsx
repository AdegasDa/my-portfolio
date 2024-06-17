import '../../../../index.css'

import Section from '../../../../components/Section';

const About = () => {
    return (
        <>
            <Section id='skills'>
                <div className="sm:h-screen flex">
                    <div className="md:basis-3/6 mx-auto my-auto md:p-0 p-8">
                        <h4 className="text-3xl text-custom-dark mb-10 font-bold">03. <span className="text-custom-secondary font-bold">Skills</span></h4>
                        <div className="md:grid md:grid-flow-col gap-16">
                            <div className="col-span-6 max-w-xl">
                                <h6 className='font-semibold'>Proficient in:</h6>
                                <ul className="list-inside list-disc">
                                    <li>JavaScript - Skilled in developing dynamic and interactive web applications.</li>
                                    <li>JQuery - Experienced in simplifying HTML document traversing, event handling, and animating for web development.</li>
                                    <li>PHP - Experienced in backend development and building reliable server-side applications.</li>
                                    <li>HTML & CSS - Capable of designing responsive and visually appealing websites.</li>
                                    <li>Java - Proficient in object-oriented programming and developing scalable applications.</li>
                                    <li>Bootstrap & Tailwind - Proficient in structuring and styling web pages for a seamless user experience.</li>
                                    <li>React - Proficient in creating and managing complex user interfaces, leveraging component-based architecture to build scalable and maintainable web applications.</li>
                                </ul>
                            </div>
                            <div className="col-span-6 max-w-xl">
                                <h6 className='font-semibold'>Working Knowledge Of:</h6>
                                <ul className="list-inside list-disc">
                                    <li>Agile Projects - Familiar with agile methodologies and experienced in working with agile teams.</li>
                                    <li>Angular - Basic understanding of this framework for building single-page applications.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </>
    )
}

export default About;