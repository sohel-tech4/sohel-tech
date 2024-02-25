import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaWrench, FaUser, FaPhone, FaList } from "react-icons/fa";

const Navbar = () => {

    const location = useLocation()

    const Navbar1 =
        <>
            <Link to="/"><li className='text-lg'><a><FaHome></FaHome>Home</a></li></Link>
            <Link to="/about"><li className='text-lg'><a href=""><FaUser></FaUser> About</a></li></Link>
            <Link to="/skills"><li className='text-lg'><a href=""><FaWrench></FaWrench> Skills</a></li></Link>
            <Link to="/projects"><li className='text-lg'><a href=""><FaList></FaList> Projects</a></li></Link>
            <Link to="/contact"><li className='text-lg'><a href=""><FaPhone></FaPhone> Contact</a></li></Link>
        </>
    const Navbar2 =
        <>
            <Link to="/"><li className={`text-lg underline underline-offset-4 hover:underline-offset-8 ${location.pathname === '/' ? 'underline-offset-8 text-white' : ''}`}><a>Home</a></li></Link>
            <Link to="/about"><li className={`text-lg underline underline-offset-4 hover:underline-offset-8 ${location.pathname === '/about' ? 'underline-offset-8 text-white' : ''}`}><a href="">About</a></li></Link>
            <Link to="/skills"><li className={`text-lg underline underline-offset-4 hover:underline-offset-8 ${location.pathname === '/skills' ? 'underline-offset-8 text-white' : ''}`}><a href="">Skills</a></li></Link>
            <Link to="/projects"><li className={`text-lg underline underline-offset-4 hover:underline-offset-8 ${location.pathname === '/projects' ? 'underline-offset-8 text-white' : ''}`}><a href="">Projects</a></li></Link>
            <Link to="/contact"><li className={`text-lg underline underline-offset-4 hover:underline-offset-8 ${location.pathname === '/contact' ? 'underline-offset-8 text-white' : ''}`}><a href="">Contact</a></li></Link>
        </>
    return (
        <div 
            data-aos="fade-down"
            data-aos-offset="100"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"

            className="navbar bg-black fixed z-10 justify-between md:gap-5 ">
            <div className="navbar-start">
                <div className="dropdown ">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="red" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {Navbar1}
                    </ul>
                </div>
                <Link to="/"><img src="https://i.ibb.co/K5KmL02/name.png" alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="flex gap-10">
                    {Navbar2}
                </ul>
            </div>
            <div className="">
                <Link href="#_" target='_blank' to="https://drive.google.com/file/d/1_UejIDqeUgl3OvBHQpKncbuFdy8ghaiq/view?usp=sharing" class="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-red-500 rounded-xl group">
                    <span class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                        <span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                    </span>
                    <span class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-red-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
                    <span class="relative w-full text-left  transition-colors duration-200 ease-in-out text-white group-hover:">RESUME</span>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;