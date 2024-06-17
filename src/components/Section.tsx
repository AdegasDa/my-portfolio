import { ReactNode } from 'react';
import { motion } from 'framer-motion';

import '../index.css'


interface ProjectCardInterface {
    children: ReactNode,
    id : String;
}

const ProjectCard: React.FC<ProjectCardInterface> = ({ children, id }) => {
    return (
        <motion.div
        initial={{ opacity: 0, scale: 0.8, x: -160}}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        >
            <section id={`${id}`}>
                {children}
            </section>
        </motion.div>
    )
}

export default ProjectCard;
