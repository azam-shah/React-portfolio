import React, { useState } from 'react';
import { RiMenu3Fill, RiCloseFill } from 'react-icons/ri';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <div className="flex justify-center items-center pt-7">
      <div className="w-[90%] text-white flex justify-between items-center">
        <h1 className="font-semibold text-2xl">Azam Shah</h1>

        <ul className="hidden lg:flex space-x-8 text-lg">
          <li>
            <button onClick={() => handleScroll('Home')} className="hover:text-blue-500 hover:border-b-2 border-blue-500">
              Home
            </button>
          </li>
          <li>
            <button onClick={() => handleScroll('About')} className="hover:text-blue-500 hover:border-b-2 border-blue-500">
              About
            </button>
          </li>
          <li>
            <button onClick={() => handleScroll('Skill')} className="hover:text-blue-500 hover:border-b-2 border-blue-500">
              Skills
            </button>
          </li>
          <li>
            <button onClick={() => handleScroll('Projects')} className="hover:text-blue-500 hover:border-b-2 border-blue-500">
              Projects
            </button>
          </li>
          <li>
            <button onClick={() => handleScroll('Contact')} className="hover:text-blue-500 hover:border-b-2 border-blue-500">
              Contact
            </button>
          </li>
        </ul>

        <div className="lg:hidden">
          <button onClick={toggleMenu}>
            <RiMenu3Fill size={30} />
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="fixed top-0 right-0 h-[30%] w-[50%] bg-slate-400 shadow-lg z-50 p-6 lg:hidden">
          <button className="absolute top-4 right-4" onClick={toggleMenu}>
            <RiCloseFill size={30} />
          </button>
          <ul className="space-y-6 text-lg text-black">
            <li>
              <button onClick={() => handleScroll('Home')} className="hover:text-purple-600">
                Home
              </button>
            </li>
            <li>
              <button onClick={() => handleScroll('About')} className="hover:text-purple-600">
                About
              </button>
            </li>
            <li>
              <button onClick={() => handleScroll('Skill')} className="hover:text-purple-600">
                Skills
              </button>
            </li>
            <li>
              <button onClick={() => handleScroll('Projects')} className="hover:text-purple-600">
                Projects
              </button>
            </li>
            <li>
              <button onClick={() => handleScroll('Contact')} className="hover:text-purple-600">
                Contact
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
