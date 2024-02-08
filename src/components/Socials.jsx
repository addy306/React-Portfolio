import React from 'react';
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from 'react-icons/ai';

const TopBar = () => {
  return (
    <div className="bg-gray-800 text-white p-4 flex justify-end items-center">
      <a href="https://www.linkedin.com/in/adijat-salisu-2b5085290/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="mx-2 hover:text-[#a51c4b]">
        <AiFillLinkedin size={24} />
      </a>
      <a href="https://github.com/addy306" target="_blank" rel="noopener noreferrer" className="mx-2 hover:text-[#a51c4b]">
        <AiFillGithub size={24} />
      </a>
      <a href="https://www.instagram.com/adijatcancode/" target="_blank" rel="noopener noreferrer" className="mx-2 hover:text-[#a51c4b]">
        <AiFillInstagram size={24} />
      </a>
    </div>
  );
};

export default TopBar;
