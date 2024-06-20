import '../index.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faFolder } from '@fortawesome/free-regular-svg-icons'
import { motion } from 'framer-motion'

interface ProjectCardInterface {
    title: String,
    detail: String,
    date_start: String,
    date_end: String,
    technologies: string[],
    link_gitHub: string,
    link_folder: string,
}

const ProjectCard: React.FC<ProjectCardInterface> = ({ title, detail, technologies, link_gitHub, date_start, date_end, link_folder }) => {

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
        <motion.div
            initial={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
            whileHover={{ opacity: 1, scale: 1.2 }}
        >
            <div className='project-card bg-custom-dark p-6 flex flex-col h-full shadow-xl rounded-md'>
                <div className='flex justify-between'>
                    <div>
                        <button onClick={() => downloadFileAtUrl(link_folder)}><FontAwesomeIcon className='h-9 text-custom-light' icon={faFolder} /></button>
                    </div>
                    <div className='my-auto'>
                        <p className='text-custom-light'>
                            {date_start}/{date_end}
                        </p>
                    </div>
                    <div>
                        <a href={link_gitHub}><FontAwesomeIcon className='h-9 text-custom-light' icon={faGithub} /></a>
                    </div>
                </div>
                <div className='flex-grow'>
                    <h5 className='text-custom-light font-bold mt-6 mb-4'>{title}</h5>
                    <p className='text-custom-primary'>
                        {detail}
                    </p>
                </div>
                <div>
                    <p className='text-custom-primary mt-1'>
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
        </motion.div>
    )
}

export default ProjectCard;
