/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { navLinks } from '../constants/index.js';

const calculateOffset = () => {
  return -(document.querySelector('header')?.offsetHeight || 0);
};

const NavItems = ({ onClick = () => {} }) => {
  return (
    <ul className="nav-ul">
      {navLinks.map((item) => (
        <li key={item.id} className="nav-li">
          <Link
            activeClass="active"
            to={item.href.substring(1)} // Remove the '#' from href
            spy={true}
            smooth={true}
            duration={200}
            offset={calculateOffset()} // Adjust for navbar height
            onClick={onClick}
            className="nav-li_a cursor-pointer"
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((open) => !open);
  const closeMenu = () => setIsOpen(false);

  return (
    // Solid background: the old 90% black let page text show through behind the links.
    <header className="fixed top-0 left-0 right-0 z-50 bg-black-100 border-b border-black-300">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <div className="flex items-center">
            <a href="https://github.com/JivSTuban" className="text-neutral-400 font-bold text-xl hover:text-white transition-colors flex items-center">
              <img src="https://avatars.githubusercontent.com/u/162428952?v=4" alt="" className="w-8 h-8 rounded-full mr-2" />
              Jiv Tuban
            </a>
          </div>

          <button
            type="button"
            onClick={toggleMenu}
            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            aria-controls="mobile-nav">
            <img src={isOpen ? '/assets/close.svg' : '/assets/menu.svg'} alt="" className="w-6 h-6" />
          </button>

          <nav className="sm:flex hidden" aria-label="Primary">
            <NavItems />
          </nav>
        </div>
      </div>

      {/* inert keeps the collapsed links out of the tab order */}
      <div id="mobile-nav" inert={isOpen ? undefined : ''} className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <nav className="p-5" aria-label="Mobile">
          <NavItems onClick={closeMenu} />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
