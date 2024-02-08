import React from 'react'
import { BiSolidQuoteAltLeft,BiSolidQuoteAltRight } from "react-icons/bi";

function About() {
    return(
            <div className='mt-12 px-44 text-center flex flex-col items-center'>
                <h2 className='text-[40px] font-bold'>About Me</h2>
                <BiSolidQuoteAltLeft className="bg-[#a51c4b] p-3 text-[44px] rounded-full
                mt-6 text-white"/>
                    <h2 className='my-5 text-[#a51c4b] text-[24px]'>I am Front-end developer with a degree in computing, skilled in WordPress, Figma, Photoshop, Canva,and GIMP. Experienced in building E-commerce and forum sites.</h2>
                <BiSolidQuoteAltRight className="bg-[#a51c4b] p-3 text-[44px] rounded-full
                mt-6 text-white"/>
        
            </div>
        
        
    )
}


export default About