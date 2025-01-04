import { list } from "postcss";
import React, { ChangeEvent } from "react";
import { ArrowUpRightIcon } from '@heroicons/react/24/solid'


import {
    Ripple,
    initTWE,
  } from "tw-elements";
  

interface ProjectInputProps {
    title: string;
    desc: string;
    image: string;
    className?: string;
    cardDetails?: string;
    onClick: (value: string) => void;
    tags: string;
}

const ProjectCard: React.FC<ProjectInputProps> = ({desc, title, cardDetails, className, onClick, image, tags}) => {
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        onClick(event.target.value);
    };

    return (
 
        <div className={`${cardDetails} flex flex-col bg-gray-100 hover:scale-105 dark:bg-neutral-900 overflow-hidden transform transition-all duration-300 max-w-md`}>
            {/* <div className="w-full h-60 overflow-hidden hover:opacity-80"><img className="rounded-3xl h-full w-full object-cover border border-gray-200 dark:border-gray-800" src={image} alt={title} /></div> */}
            
            {/* Image Section */}
            <div className="w-full h-60 relative group">
                <img
                className="rounded-3xl h-full w-full object-cover border border-gray-200 dark:border-gray-800"
                src={image}
                alt={title}
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-80 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl">
                <p className="text-white text-sm px-4 text-center">{desc}</p>
                </div>
            </div>

            {/* Content area */}
            <div className="">
                <h2 className="mt-3 lg:text-lg md:text-md sm:text-md font-semibold text-black dark:text-white">
                {title}
                </h2>
                <div className="flex items-center justify-between mt-2">

    
                <div className="text-black dark:text-neutral-50">
               
                {tags}
                </div>
                
                <button className="flex items-center text-gray-700 dark:text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
  <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z" clipRule="evenodd" />
</svg>

                </button>
                </div>

            </div>
        </div>

    );
};

export default ProjectCard;