
import React from "react";
import vpn from '../assets/vpn.png'
import copeople from '../assets/copeople.png'
import Footer from './Footer'

const ProjectCard = ({ image, title, description, git, technologies }) => {
    return (
        <div className="max-w-sm bg-gray-900 border border-neutral-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href={git}>
                <img className="w-full rounded-t-lg h-auto object-cover" src={image} alt={title} />
            </a>
            <div className="p-4 sm:p-6">
                <h5 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">{title}</h5>
                <p className="font-normal text-sm sm:text-base md:text-lg text-gray-300 dark:text-gray-400">{description}</p>
            </div>
            <div className='m-2 sm:m-4 lg:m-6 flex justify-between'>
                <div className='flex flex-wrap gap-2 pl-2'>
                    {technologies.map((tag, index) => (
                        <p key={`${index}-${tag}`} className='text-[14px] text-blue-500'>
                            #{tag}
                        </p>
                    ))}
                </div>
                <a href={git} className="text-red-300 border border-gray-200 rounded-lg shadow p-1 sm:p-2 lg:p-3 hover:text-green-500 duration-300">
                    GitHub
                </a>
            </div>
        </div>
    );
};

const Projects = () => {
    return (
        <div className="bg-black">
            <div className="flex flex-wrap gap-7 justify-center items-center m-12 p-12">
                {project.map((item, index) => (
                    <ProjectCard
                        key={index}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        git={item.git}
                        technologies={item.technologies}
                    />
                ))}
            </div>
            <Footer />
        </div>
    );
};

export const project = [
    {
        title: 'Hand Gesture Recognition',
        description: 'Hand gesture recognition involves detecting and interpreting human hand movements using computer vision and machine learning techniques. Various tools were utilized, including OpenCV, MediaPipe, Python, and TensorFlow algorithms, to effectively implement this technology.',
        image: vpn,
        git: 'https://github.com/Lakshjagtap',
        technologies: ['OpenCV', 'TensorFlow', 'MediaPipe', 'Python']
    },
    {
        title: 'Own Portfolio',
        description: 'I have meticulously crafted a comprehensive portfolio showcasing my skills in HTML, CSS, and JSX, among other technologies.This portfolio serves as a testament to my proficiency in web development, highlighting my ability to design and implement engaging and user-friendly interfaces.I am excited to share my projects and demonstrate my expertise on LinkedIn, where I aim to connect with professionals and potential collaborators in the industry.This portfolio not only reflects my technical capabilities but also underscores my commitment to delivering high-quality work in the field of web development.I invite you to explore my portfolio and engage with the projects that demonstrate my passion and dedication to this dynamic field.',
        image: copeople,
        git: 'https://github.com/Lakshjagtap',
        technologies: ['React', 'Node.js', 'javascript', 'html']
    },
];

export default Projects;
