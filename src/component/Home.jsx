import { HiArrowNarrowRight } from 'react-icons/hi'
import AOS from 'aos';
import '../index.css'
import { useEffect, useState } from 'react';
import { Link } from 'react-scroll'

const Home = () => {
    const [show, setShow] = useState(false)
    useEffect(() => {
        AOS.init();
    }, []);
    useEffect(() => {
        setTimeout(() => {
            setShow(true)
        })
    }, [])
    return (
        <div name="home" className='w-full h-screen bg-[#0a192f]'>
            {/* container */}
            <div className='max-w-[1000px] mx-auto px-8  flex flex-col justify-center h-full home'>
                <p className='text-[#FD81A6] font-semibold'>Hi, my name is</p>
                {show && <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6] typing-demo'>Binh Bui</h1>}
                <h2 data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000" className='text-3xl sm:text-4xl text-[#8892b0] py-4'>I'm a <span className='text-[#FD81A6]'>Front-End Developer</span> passionate about creating interactive applications and experiences on the web.</h2>
                <div>
                    <Link to='about' smooth={true}>
                        <button className='text-white border-2 px-6 py-3  my-2 flex items-center hover:bg-[#FD81A6] hover:border-[#FD81A6] button-container'>
                            More about me
                            <span className='icon-arrow duration-300'>
                                <HiArrowNarrowRight className='ml-2' />
                            </span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Home;
