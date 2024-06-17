import '../../../../index.css'

const Hero = () => {

    return (
        <>
            <section className="bg-stone-300">
                <div className="h-screen flex">
                    <div className="basis-3/6 mx-auto my-auto">
                        <p className=" text-xl text-custom-light">Hi, my name is</p>
                        <h1 className=" text-6xl m-0 my-3 text-custom-light font-bold">Daniel Adegas.</h1>
                        <h2 className=" text-6xl m-0 mb-3 text-custom-secondary font-bold">Bachelor of Computer Science.</h2>
                        <p className="text-xl max-w-lg p-0 m-0 text-custom-secondary font-bold">I am a student pursuing Computer Engineering, 
                            Brazilian and Portuguese, living in Portugal since 2019. <span className="text-custom-dark">Passionate about 
                            technology</span>.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero;