import '../index.css'

import { motion } from 'framer-motion'

interface SkillCardInterface {
    skill: String,
    rate: number,
}

const fillRatingSection = (rate: number) => {
    let cnt: number = 5;
    let filledStars = rate; 
    let emptyStars = cnt - filledStars;

    return (
        <>
            {Array(filledStars).fill(null).map((_, index) => (
                <div key={index} className='w-6 h-6 rounded-full bg-custom-primary my-auto ms-1'></div>
            ))}
            {Array(emptyStars).fill(null).map((_, index) => (
                <div key={index + filledStars} className='w-6 h-6 rounded-full border-2 my-auto ms-1'></div>
            ))}
        </>
    );
}

const SkillCard: React.FC<SkillCardInterface> = ({ skill, rate }) => {

    return <>
        <motion.div
        initial={{opacity: 1, scale: 1}}
        transition={{duration: 0.2}}
        whileHover={{opacity: 1, scale: 1.2}}
        >
            <div className='w-auto flex justify-center align-middle bg-custom-secondary py-2 px-4 rounded-lg boxShadow'>
                <div className='flex flex-col gap-1'>
                    <h5 className="text-md my-auto text-custom-light font-semibold text-center mb-1">{ skill }:</h5>
                    <div className='flex justify-center align-middle'>
                        {fillRatingSection(rate)}
                    </div>
                </div>
            </div>
        </motion.div>
    </>
}

export default SkillCard;