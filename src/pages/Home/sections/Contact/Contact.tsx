import '../../../../index.css'

const Contact = () => {
    return (
        <>
            <section className="bg-stone-300">
            <div className="h-screen flex flex-col">
                    <div className="basis-3/6 mx-auto my-auto grid place-content-center">
                        <h4 className="text-xl mx-auto text-custom-dark mb-6">04. <span className="text-custom-secondary font-semibold">Get In Touch</span></h4>
                        <h4 className="text-3xl mx-auto text-custom-dark mb-4 font-semibold">Get In Touch</h4>
                        <p className="mx-auto">Email: danieladegass@hotmail.com</p>
                        <p className="mx-auto">Mobile: (+351) 910881658</p>
                        <a href="https://www.linkedin.com/in/daniel-adegas-946615252/" target='_blank' className='mx-auto text-custom-dark hover:text-custom-secondary underline underline-offset-2'>LinkdIn</a>
                    </div>
                    <div className="mx-auto pb-3">
                        Developed & designed by Daniel Adegas.
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact;