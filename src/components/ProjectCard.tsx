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
    link_folder: string,
    image_1: string,
}

const ProjectCard: React.FC<ProjectCardInterface> = ({ title,  technologies, link_gitHub, link_folder, image_1 }) => {

    const downloadFileAtUrl = (url:string) => {
        const fileName = url.split('/').pop() || '';
        const aTag = document.createElement('a')
        aTag.href=url
        aTag.setAttribute('download', fileName)
        document.body.appendChild(aTag)
        aTag.click()
        aTag.remove()
    }

    return (
        // <div className='project-card group bg-custom-dark p-6 flex flex-col h-full shadow-xl rounded-md'>
        <div className='group relative overflow-hidden flex shadow-xl rounded-xl'>
            <div className='group-hover:bg-black/60 w-full h-full absolute z-40 transition-all duration-300'></div>
            <div className='flex justify-between w-full absolute -top-full z-50 transition-all duration-500 group-hover:top-4 group-hover:px-4'>
                <div>
                    <button onClick={() => downloadFileAtUrl(link_folder)}><FontAwesomeIcon className='h-9 text-custom-light hover:text-custom-primary' icon={faFolder} /></button>
                </div>
                <div>
                    <a href={link_gitHub} target='_blank'><FontAwesomeIcon className='h-9 text-custom-light hover:text-custom-primary' icon={faGithub} /></a>
                </div>
            </div>
            <div>
                <img src={image_1} alt="" className='boxShadow rounded-md group-hover:scale-125 transition-all duration-500'/>
            </div>
            <div className='absolute w-full -bottom-full group-hover:bottom-4 group-hover:px-4 transition-all z-50 duration-500'>
                <div className='flex-grow'>
                    <h5 className='text-custom-light text-md md:text-xl font-bold mb-2'>{title}</h5>
                </div>
                <div>
                    <p className='text-custom-primary text-sm md:text-md truncate'>
                        <span className='font-semibold'>Technologies Used</span>:
                        {technologies.map((tech, index) => {
                            if (index < technologies.length - 2) {
                                return (' ' + tech + ',');
                            } else if (index === technologies.length - 2) {
                                return (' ' + tech + ' and ');
                            } else {
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
