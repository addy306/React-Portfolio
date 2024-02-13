import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import logo from '/AS-logo.png'

const NavTabs = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: 'Home' },
    { id: 2, text: 'About' },
    { id: 3, text: 'ProjectGallery' },
    { id: 4, text: 'Skills' },
    { id: 5, text: 'Contact' },
    { id: 6, text: 'LiveWebsite'}
  ];

  return (
    <div className='bg-white flex justify-between  items-center h-24 max-w-[1240px] mx-auto px-4 text-[#a51c4b]'>
      {/* Logo */}
      <img src={logo} alt="brand-logo" className='w-[90px] h-[90px]' />

      {/* Desktop Navigation */}
      <ul className='hidden md:flex'>
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 hover:bg-[#a51c4b] rounded-xl m-2 cursor-pointer duration-300 hover:text-white'
          >
            <NavLink
          to={item.text}
          end
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          {item.text}
        </NavLink>
            
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        {/* Mobile Logo */}
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT.</h1>

        {/* Mobile Navigation Items */}
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600'
          >
              <NavLink
          to={item.text}
          end
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          {item.text}
        </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavTabs;


