// PortfolioButton.jsx
import React from 'react';
//getting access to the history object with 'useNavigate' which allows 
// navigation between different pages or states in a React application.
import { useNavigate } from 'react-router-dom';


const PortfolioButton = () => {
    const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to projects page 
    navigate('.../Projects');
  };
  return (
    <button className="bg-[#a51c4b] hover:bg-white text-white hover:text-[#a51c4b] text-center py-2 px-4 rounded" onClick={handleClick}>
     Welcome to my Portfolio
    </button>
  );
};

export default PortfolioButton;
