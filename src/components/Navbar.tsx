import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    // const navigate = useNavigate(); useNavigate
   
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

   

    const toggleDropdown = (event: React.MouseEvent) => {
        event.stopPropagation();
        setIsDropdownOpen(!isDropdownOpen);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setIsDropdownOpen(false);
            }
        };

        const closeMenu = () => {
            if (isDropdownOpen) {
                setIsDropdownOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        document.addEventListener('click', closeMenu);

        return () => {
            window.removeEventListener('resize', handleResize);
            document.removeEventListener('click', closeMenu);
        };
    }, [isDropdownOpen]);

   

    return (
        <div className="navbar h-fit shadow-120 text-xl rounded ">
            <div className="flex-1 gap-4 ml-6 md:ml-12">
                {/* <img src={logo} alt="logo" className=" hidden md:block w-12 h-12" /> */}
                <h1 className="hidden md:block md:text-2xl font-bold text-links"></h1>
            </div>

            <div className="flex-none gap-2">
                <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-2 text-[#0099ff] font-bold text-links">
  <li><a href="#">Home</a></li>
  <li><a href="#about">About Me</a></li>
  <li><a href="#experience">Experience</a></li>
  <li><a href="#projects">Projects</a></li>
  <li><a href="#contact">Contact Us</a></li>
</ul>

                </div>


                <div className="flex lg:hidden">
                    <button onClick={toggleDropdown} className="btn btn-circle">
                        <svg
                            className={`swap-off fill-current ${isDropdownOpen ? 'hidden' : 'block'}`}
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 512 512">
                            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                        </svg>
                        <svg
                            className={`swap-on fill-current ${isDropdownOpen ? 'block' : 'hidden'}`}
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 512 512">
                            <polygon
                                points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                        </svg>
                    </button>
                </div>

                <div className={`fixed top-0 left-0 w-[60%] h-screen bg-gray-800 border-r border-gray-900 transform ${isDropdownOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-500 ease-in-out lg:hidden z-50`}>
                <ul className="menu p-4 text-cards">
  <li className="border-b border-gray-300 py-2 text-text-light"><a href="#">Home</a></li>
  <li className="border-b border-gray-300 py-2 text-text-light"><a href="#about">About Me</a></li>
  <li className="border-b border-gray-300 py-2 text-text-light"><a href="#experience">Experience</a></li>
  <li className="border-b border-gray-300 py-2 text-text-light"><a href="#projects">Projects</a></li>
  <li className="border-b border-gray-300 py-2 text-text-light"><a href="#contact">Contact Us</a></li>
</ul>

                </div>

                
            </div>
        </div>
    );
}

export default Navbar;
