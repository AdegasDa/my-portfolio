import '../index.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faFolder } from '@fortawesome/free-regular-svg-icons'

interface ProjectCardInterface {
    title: String,
    detail: String,
    date_start: String,
    date_end: String,
    technologies: string[],
    link_gitHub: string,
}

const ProjectCard: React.FC<ProjectCardInterface> = ({ title, detail, technologies, link_gitHub, date_start, date_end }) => {
    return (
        <div className='project-card'>
            <div className='bg-custom-dark p-6 flex flex-col h-full'>
                <div className='flex justify-between'>
                    <div>
                        <a href="" className=''><FontAwesomeIcon className='h-7 text-custom-light' icon={faFolder} /></a>
                    </div>
                    <div>
                        <p className='text-custom-light'>
                            {date_start} / {date_end}
                        </p>
                    </div>
                    <div>
                        <a href={link_gitHub}><FontAwesomeIcon className='h-7 text-custom-light' icon={faGithub} /></a>
                    </div>
                </div>
                <div className='flex-grow'>
                    <h5 className='text-custom-light font-bold mt-6 mb-4'> {title} </h5>
                    <p className=' text-custom-primary'>
                        {detail}
                    </p>
                </div>
                <div>
                    <p className='text-custom-primary mt-1'>
                        <span className='font-semibold'>Technologies Used</span>:
                        {technologies.map((tech, index) => {
                            if (index < technologies.length - 2) {
                                return (' ' + tech + ',');
                            } else if (index == technologies.length - 2) {
                                return (' ' + tech + ' and ');
                            }
                            else {
                                return (tech + ".");
                            }
                        })}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;
