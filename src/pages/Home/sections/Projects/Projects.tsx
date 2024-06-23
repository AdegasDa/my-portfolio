import '../../../../index.css'

import ProjectCard from '../../../../components/ProjectCard';
import Section from '../../../../components/Section';

import eventsInfo from '../../../../assets/images/events_info.png'
import homeTriathlon from '../../../../assets/images/homeTriathlon.png'

const Projects = () => {
    const Triathlon = 'https://danieladegas.netlify.app/Triathlon_Calculator.zip';
    const Event = 'https://danieladegas.netlify.app/Event_Management.zip';

    return (
        <>
            <Section id='projects'>
                <div className="sm:h-screen flex">
                    <div className="md:basis-7/12 mx-auto my-auto md:p-0 p-8">
                        <div className='flex flex-col md:flex-row gap-x-10'>
                            <div className='flex-1 flex flex-col gap-y-8 mb-10 lg:mb-0 justify-between'>
                                <div>
                                    <p className="text-3xl text-custom-dark mb-8 font-bold">02. <span className="text-custom-secondary font-bold">My Latest Projects</span></p>
                                    <p>
                                    In these projects, I developed skills in various areas including debugging, problem-solving, and algorithms. I have experience working with MVC architecture, which has enhanced my ability to design and implement efficient, scalable, and maintainable software solutions.
                                    </p>
                                </div>
                                <ProjectCard
                                title='Event Management System'
                                detail='This project created a user-friendly platform for event registration. Users can browse and sign up for events, 
                                and manage their profiles. System managers oversee user and event management and can export registration lists to Excel.'
                                link_gitHub='https://github.com/AdegasDa/Events_Management'
                                technologies={['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'jQuery', 'PHP']}
                                date_start='02-04-2024'
                                date_end='24-05-2024'
                                link_folder={Event}
                                image_1={eventsInfo}
                                /> 
                            </div>
                            <div className='flex-1 flex flex-col gap-y-8 mb-10 lg:mb-0'>
                                <ProjectCard
                                title='Triathlon Race Gap Calculator '
                                detail='This project aimed to develop a web application for triathlon race analysis. 
                                Users input reference values and segment times, then calculate time gaps and overall performance.'
                                link_gitHub='https://github.com/AdegasDa/Triathlon_Time_Calculator'
                                technologies={['Angular', 'TypeScript']}
                                date_start='27-05-2024'
                                date_end='14-06-2024'
                                link_folder={Triathlon}
                                image_1={homeTriathlon}
                                />
                                <ProjectCard
                                title='Triathlon Race Gap Calculator '
                                detail='This project aimed to develop a web application for triathlon race analysis. 
                                Users input reference values and segment times, then calculate time gaps and overall performance.'
                                link_gitHub='https://github.com/AdegasDa/Triathlon_Time_Calculator'
                                technologies={['Angular', 'TypeScript']}
                                date_start='27-05-2024'
                                date_end='14-06-2024'
                                link_folder={Triathlon}
                                image_1={homeTriathlon}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </>
    )
}

export default Projects;