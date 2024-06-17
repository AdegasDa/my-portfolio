import ProjectCard from '../../../../components/ProjectCard';
import '../../../../index.css'



const Projects = () => {
    return (
        <>
            <section className="bg-stone-300">
                <div className="h-screen flex">
                    <div className="basis-3/6 mx-auto my-auto">
                        <h4 className="text-3xl text-custom-dark mb-10">02. <span className="text-custom-secondary font-semibold">Projects</span></h4>
                        <div className="grid gap-4 md:grid-cols-2">
                            <ProjectCard
                            title='Event Registration Management System'
                            detail='This project involved developing a user-friendly platform to streamline the registration
                                    process for events. The system allows users to browse available events and register. At the
                                    end of the registration period, the system manager can export a list of registered users to MS
                                    Excel. The system manager holds responsibilities for managing users, events, and the overall
                                    system functionality. Users have the ability to register or unregister for events and manage
                                    their profiles effectively.'
                            link_gitHub=''
                            technologies={['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'jQuery', 'PHP']}
                            date_start='02-04-2024'
                            date_end='24-05-2024'
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
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Projects;