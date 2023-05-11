import React, { useState } from "react";
import Logo from '../assets/logo2.png'
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook, } from 'react-icons/fa'
import { ImProfile } from 'react-icons/im'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { Link } from 'react-scroll'
// import '../index.css'
const Navbar = () => {
    const [navBar, setNavbar] = useState(false)

    const handleClick = () => {
        setNavbar(!navBar)
    }
    return (
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 ">
            <div className="">
                <img src={Logo} alt="logo" style={{ width: "50px" }} />
            </div>

            {/* menu */}

            <ul className="hidden md:flex">
                <li className="hover:underline">
                    <Link to="home" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li className="hover:underline">
                    <Link to="about" smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li className="hover:underline">
                    <Link to="skills" smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li className="hover:underline">
                    <Link to="project" smooth={true} duration={500}>
                        Projects
                    </Link>
                </li>
                <li className="hover:underline">
                    <Link to="contact" smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>
            {/* icon-mobile-menu */}
            <div className="md:hidden z-10" onClick={handleClick}>
                {!navBar ? <FaBars /> : <FaTimes />}
            </div>
            {/* mobile menu */}
            <ul className={!navBar ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"}>
                <li className="py-6 text-4xl hover:underline">
                    <Link onClick={handleClick} to="home" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li className="py-6 text-4xl hover:underline">
                    <Link onClick={handleClick} to="about" smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li className="py-6 text-4xl hover:underline">
                    <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li className="py-6 text-4xl hover:underline">
                    <Link onClick={handleClick} to="project" smooth={true} duration={500}>
                        Projects
                    </Link>
                </li>
                <li className="py-6 text-4xl hover:underline">
                    <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>
            { }
            {/* social icons */}
            <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
                <ul>
                    <li className="bg-blue-900 w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300">
                        <a target="_blank" href="https://www.facebook.com/profile.php?id=100083044700773" className="flex justify-between items-center w-full text-gray-300">
                            Facebook <FaFacebook size={30} />
                        </a>
                    </li>

                    <li className="bg-blue-600 w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300">
                        <a target="_blank" href="https://www.linkedin.com/in/bình-bùi-1a127825a/" className="flex justify-between items-center w-full text-gray-300">
                            Linkedin <FaLinkedin size={30} />
                        </a>
                    </li>

                    <li className="bg-slate-800 w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300">
                        <a target="_blank" href="https://github.com/BuiBinhgithub" className="flex justify-between items-center w-full text-gray-300">
                            GitHub <FaGithub size={30} />
                        </a>
                    </li>

                    <li className="bgk-[#00b14f] w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300">
                        <a href="https://www.topcv.vn/xem-cv/Bl8FAgJTVQFbVVtXA1VWBQIJWgIGAlVQBlIAXAb7ca" target="_blank" className="flex justify-between items-center w-full text-gray-300">
                            MyCV <ImProfile size={30} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;