import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Angular from '../assets/angualr.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import '../index.css'

const Skills = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div name="skills" className='w-full skills bg-[#0a192f] text-gray-300 responsive-hidden'>
            {/* container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-between w-full h-full'>
                <div>
                    <p className='text-4xl text-gray-300 font-bold inline border-b-4 border-[#FD81A6]'>Skills</p>
                    <p className='py-4'>These are some technologies that I know:</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500' data-aos="fade-up" data-aos-delay="100">
                        <img src={HTML} alt="html" className='w-20 mx-auto my-2' />
                        <p className='py-4 text-gray-300'>HTML</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500' data-aos="fade-up" data-aos-delay="200">
                        <img src={CSS} alt="html" className='w-20 mx-auto my-2' />
                        <p className='py-4 text-gray-300'>CSS</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500' data-aos="fade-up" data-aos-delay="300">
                        <img src={JavaScript} alt="html" className='w-20 mx-auto my-2' />
                        <p className='py-4 text-gray-300'>Javascript</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500' data-aos="fade-up" data-aos-delay="400">
                        <img src={ReactImg} alt="html" className='w-20 mx-auto my-2' />
                        <p className='py-4 text-gray-300'>Reactjs</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500' data-aos="fade-up" data-aos-delay="500">
                        <img src={Node} alt="html" className='w-20 mx-auto my-2' />
                        <p className='py-4 text-gray-300'>Nodejs</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500' data-aos="fade-up" data-aos-delay="600">
                        <img src={GitHub} alt="html" className='w-20 mx-auto my-2' />
                        <p className='py-4 text-gray-300'>GitHub</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500' data-aos="fade-up" data-aos-delay="700">
                        <img src={Tailwind} alt="html" className='w-20 mx-auto my-2' />
                        <p className='py-4 text-gray-300'>Tailwind css</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500' data-aos="fade-up" data-aos-delay="800">
                        <img src={Angular} alt="html" className='w-20 mx-auto my-2' />
                        <p className='py-4 text-gray-300'>Angularjs</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;