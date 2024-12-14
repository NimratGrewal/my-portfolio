import { list } from "postcss";
import React, { ChangeEvent } from "react";

interface ProjectInputProps {
    title: string;
    desc: string;
    image: string;
    className?: string;
    onClick: (value: string) => void;
    tags: string[];
}

const ProjectCard: React.FC<ProjectInputProps> = ({desc, title, className, onClick, image, tags}) => {
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        onClick(event.target.value);
    };

    return (
 
        <div className={`flex flex-col bg-white dark:bg-gray-800 rounded-3xl shadow-lg hover:shadow-2xl dark:shadow-gray-800 cursor-pointer overflow-hidden transform transition-all duration-300 hover:scale-105 hover:border-black dark:hover:border-gray-300  max-w-lg ${className}`}>
            <div className="w-full h-56 overflow-hidden"><img className="w-full h-full object-cover" src={image} alt={title} /></div>
            
            {/* Content area */}
            <div className="p-6">
                <h2 className="text-2xl font-semibold text-black dark:text-white mb-4">
                {title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                {desc}
                </p>
                <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                    <span
                    key={index}
                    className="bg-gradient-to-r from-indigo-500 to-indigo-700 text-white text-sm font-semibold px-2 py-1 rounded-full dark:bg-indigo-100 dark:text-white"
                    >
                    {tag}
                    </span>
                ))}
                </div>
            </div>
        </div>

    );
};

export default ProjectCard;