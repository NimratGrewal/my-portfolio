import { list } from "postcss";
import React, { ChangeEvent } from "react";

interface ProjectInputProps {
    title: string;
    desc: string;
    image: string;
    className?: string;
    cardDetails?: string;
    onClick: (value: string) => void;
    tags: string[];
}

const ProjectCard: React.FC<ProjectInputProps> = ({desc, title, cardDetails, className, onClick, image, tags}) => {
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        onClick(event.target.value);
    };

    return (
 
        <div className={`${cardDetails} flex flex-col bg-gray-50 dark:bg-gray-800 rounded-lg shadow-xl hover:shadow-2xl dark:shadow-gray-800 cursor-pointer overflow-hidden transform transition-all duration-300 max-w-xl`}>
            <div className="w-full h-56 overflow-hidden"><img className="w-full h-full object-cover border border-gray-200 dark:border-gray-800" src={image} alt={title} /></div>
            
            {/* Content area */}
            <div className="p-6">
                <h2 className="text-2xl font-semibold text-black dark:text-white mb-4">
                {title}
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                {desc}
                </p>
                <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                    <span
                    key={index}
                    className={`${className} bg-indigo-700 text-white text-sm font-semibold px-2 py-1 rounded-full dark:bg-indigo-100 dark:text-black`}
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