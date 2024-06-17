import '../../../../index.css'

import avatar from '../../../../assets/images/avatar.jpg'

const About = () => {
    return (
        <>
            <section className="bg-stone-300">
                <div className="h-screen flex">
                    <div className="basis-3/6 mx-auto my-auto">
                        <h4 className="text-3xl text-custom-dark mb-10">01. <span className="text-custom-secondary font-semibold">About Me</span></h4>
                        <div className="grid grid-flow-col">
                            <div className="col-span-9 max-w-xl">
                                <p>
                                I'm both Brazilian and Portuguese living and studying in Portugal, passionate about technology with a solid background in Informatics Engineering. Since relocating in 2019, I've deeply engaged with programming and web development, improving my skills through both academic projects and self-study.
                                <br/><br/>Although I haven't yet acquired professional experience, I have worked on numerous academic projects and personal initiatives. For example, I developed a web application for managing and visualizing events where user accessibility was very strict, which enhanced my skills in both frontend and backend development.
                                <br/><br/>I am highly motivated, a quick learner, and ready to contribute to a dynamic team. My academic background, combined with my passion for continuous learning, has prepared me to tackle challenging projects and make a meaningful impact, that is my intention.
                                <br/><br/>Career Aspirations:
                                I am actively seeking internship opportunities where I can apply my skills in web development and programming. I am particularly interested in roles that involve innovative projects, collaboration with experienced professionals, and opportunities to further develop both my technical and soft skills.
                                </p>
                            </div>
                            <div className="col-span-3">
                                <img src={avatar} alt="Profile Picture" className="w-60 rounded-xl" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;