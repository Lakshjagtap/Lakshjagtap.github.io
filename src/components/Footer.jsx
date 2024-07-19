import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';
import { FiMail } from 'react-icons/fi';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className='bg-slate-900 p-4' style={{ cursor: 'default' }}>
            <div className='flex flex-col items-center'>
                <div className='text-white flex justify-around sm:w-[250px] w-full mb-2'>
                    <a
                        href="mailto:jagtapnikhil2411@gmail.com"
                        className='transition-transform duration-300 rounded-md hover:scale-110 hover:-translate-y-1'
                        aria-label="Email Nikhil"
                    >
                        <FiMail className='text-xl' />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/nikhil-jagtap-721293257/"
                        target='_blank'
                        rel="noopener noreferrer"
                        className='transition-transform duration-300 rounded-md hover:scale-110 hover:-translate-y-1'
                        aria-label="Visit Nikhil's LinkedIn"
                    >
                        <AiFillLinkedin className='text-xl' />
                    </a>
                    <a
                        href="https://github.com/Lakshjagtap"
                        target='_blank'
                        rel="noopener noreferrer"
                        className='transition-transform duration-300 rounded-md hover:scale-110 hover:-translate-y-1'
                        aria-label="Visit Nikhil's GitHub"
                    >
                        <FaGithub className='text-xl' />
                    </a>
                </div>
                <p className='text-white text-center font-light'>
                    © {year} Nikhil. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;
