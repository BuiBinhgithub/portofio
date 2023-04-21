import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import '../index.css'

const About = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300 responsive-hidden">
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
                    <div className="sm:text-right pb-8 pl-4">
                        <p className="text-4xl font-bold inline border-b-4 border-[#FD81A6]">About me </p>
                    </div>

                    <div></div>
                </div>
                <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
                    <div className="sm:text-right text-4xl font-bold" data-aos="fade-right" data-aos-delay="500" data-aos-duration="1000">
                        <p>Hi! I'm Binh, nice too meet you. Please take a look around.</p>
                    </div>
                    <div data-aos="fade-left" data-aos-delay="1000" data-aos-duration="1000">
                        <p>
                            Hello! I am a newly graduated front-end developer
                            with a passion for creating beautiful and user-friendly websites and applications.
                            I have experience with modern web technologies such as HTML5, CSS3, and JavaScript,
                            reactjs and I am eager to continue learning and developing my skills.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default About;