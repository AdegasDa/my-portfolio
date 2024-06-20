import '../../../../index.css'

import ProjectCard from '../../../../components/ProjectCard';
import Section from '../../../../components/Section';

const Projects = () => {
    const Triathlon = 'http://localhost:5173/Triathlon_Calculator.zip';
    const Event = 'http://localhost:5173/Event_Management.zip';

    return (
        <>
            <Section id='projects'>
                <div className="sm:h-screen flex">
                    <div className="md:basis-3/6 mx-auto my-auto md:p-0 p-8">
                        <h4 className="text-3xl text-custom-dark mb-10 font-bold">02. <span className="text-custom-secondary font-bold">Projects</span></h4>
                        <div className="grid gap-4 xl:grid-cols-2">
                            <ProjectCard
                            title='Event Registration Management System'
                            detail='This project involved developing a user-friendly platform to streamline the registration
                                    process for events. The system allows users to browse available events and register. At the
                                    end of the registration period, the system manager can export a list of registered users to MS
                                    Excel. The system manager holds responsibilities for managing users, events, and the overall
                                    system functionality. Users have the ability to register or unregister for events and manage
                                    their profiles effectively.'
                            link_gitHub='https://github.com/AdegasDa/Events_Management'
                            technologies={['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'jQuery', 'PHP']}
                            date_start='02-04-2024'
                            date_end='24-05-2024'
                            link_folder={Event}
                            />
                            <ProjectCard
                            title='Triathlon Race Gap Calculator '
                            detail='The objective of this project was to create a web application that allows users to input
                                reference values and their own segment times for a triathlon race. Upon pressing a
                                calculation button, the application calculates the time gaps for each segment and the final
                                time, providing feedback on performance with analytical calculation. Users can reuse or
                                modify the entered data for new calculations without losing previous inputs.'
                            link_gitHub=''
                            technologies={['Angular', 'TypeScript']}
                            date_start='27-05-2024'
                            date_end='14-06-2024'
                            link_folder={Triathlon}
                            />
                        </div>
                    </div>
                </div>
            </Section>
        </>
    )
}

export default Projects;