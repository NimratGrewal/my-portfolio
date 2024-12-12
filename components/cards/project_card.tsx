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
 
        <div className={`flex flex-col bg-white w-30 dark:bg-gray-800 justify-between rounded-3xl shadow-lg hover:shadow-2xl dark:shadow-gray-700 p-4 transform transition-all duration-200 hover:scale-109 ${className}`}>
            <img className="rounded-t-lg w-full h-48 object-cover" src={image} alt={title} />
            <h2 className="text-2xl font-semibold mt-4 text-black dark:text-white">{title}</h2>
            <p className="text-gray-600 my-2 dark:text-gray-400">{desc}</p>
            <div className="flex flex-wrap gap-2 mt-2">
                {tags.map((tag, index) => (
                    <span
                        key={index}
                        className="bg-indigo-600 text-white text-sm font-semibold px-2 py-1 rounded-full dark:bg-indigo-100 dark:text-indigo-600"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </div>

    );
};

export default ProjectCard;