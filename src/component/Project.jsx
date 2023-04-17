import Project1 from '../assets/project1.png'
import Project2 from '../assets/project2.jpg'
import Project3 from '../assets/project3.jpg'
import '../index.css'
import AOS from 'aos';
import { useEffect } from 'react';

const Projects = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div name="project" className="w-full md:h-screen bg-[#0a192f] text-gray-300">
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-[#FD81A6]">Projects</p>
                    <p className="py-6">Check out some of my projects</p>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div style={{ backgroundImage: `url(${Project1})` }}
                        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
                        data-aos="fade-left" data-aos-delay="100" data-aos-duration="1000">
                        {/* hover effect */}
                        <div className='opacity-0 group-hover:opacity-100 duration-150'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                binhbui portolio
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="/" >
                                    <button className='hover:scale-110 duration-200 text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${Project2})` }}
                        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
                        data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">
                        {/* hover effect */}
                        <div className='opacity-0 group-hover:opacity-100 duration-150 text-center'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                weather app
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://weather-app-lac-eight.vercel.app" >
                                    <button className='hover:scale-110 duration-200 text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href="https://github.com/BuiBinhgithub/weatherApp" >
                                    <button className='hover:scale-110 duration-200 text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${Project3})` }}
                        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
                        data-aos="fade-left" data-aos-delay="300" data-aos-duration="1000">
                        {/* hover effect */}
                        <div className='opacity-0 group-hover:opacity-100 duration-150'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                w3-template
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://github.com/BuiBinhgithub/w3-template" >
                                    <button className='hover:scale-110 duration-200 text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;