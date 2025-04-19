import React, { ChangeEvent } from "react";
import { motion} from 'framer-motion';

interface ProjectInputProps {
    title: string;
    desc: string;
    image: string;
    className?: string;
    cardDetails?: string;
    onClick: (value: string) => void;
    tags: String[];
    is_deployed: boolean;
    project_link:string;
    website_link:string;
    demo_link: string;
    has_demo: boolean;
    has_source_code_link: boolean;
}

const ProjectCard: React.FC<ProjectInputProps> = ({desc, website_link, has_source_code_link, project_link, is_deployed, title, has_demo, cardDetails, className, onClick, image, tags, demo_link}) => {
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        onClick(event.target.value);
    };


    return (
        <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className={`relative flex flex-col mx-auto w-full min-w-full md:max-w-xl p-6 border-8 dark:border-neutral-600 border-zinc-400 rounded-2xl dark:bg-neutral-800 bg-zinc-200 shadow-lg hover:shadow-xl transition-shadow hover:bg-zinc-100 hover:dark:bg-neutral-900 duration-300 ${className}`}
      >
    
            <div className="flex flex-row justify-start gap-4 items-center w-full overflow-hidden mb-6 ml-6">
            {has_source_code_link &&<a
            href={project_link} // Replace with your LinkedIn URL
            target="_blank"
            rel="noopener noreferrer"
                    className="inline-flex rounded-full dark:text-neutral-800 text-white border dark:border-gray-300 border-neutral-600 hover:bg-neutral-900 dark:bg-gray-100 bg-neutral-800 dark:hover:bg-gray-200 px-6 py-2.5 text-xs font-semibold uppercase leading-normal text-white transition duration-150  ease-in-out">
                    <span className="flex gap-2 [&>svg]:h-4 [&>svg]:w-4">
                        <svg className="inline-flex dark:text-gray-800 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 496 512">
                        
                        <path
                            d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                        </svg> Source Code

                        <svg data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"></path>
                        </svg>
                    </span>
                    </a>}

                    {is_deployed && <a
            href={website_link} // Replace with your LinkedIn URL
            target="_blank"
            rel="noopener noreferrer"
                    className="inline-flex rounded-full dark:text-neutral-800 text-white border dark:border-gray-300 border-neutral-600 hover:bg-neutral-900 dark:bg-gray-100 bg-neutral-800 dark:hover:bg-gray-200 px-6 py-2.5 text-xs font-semibold uppercase leading-normal text-white transition duration-150  ease-in-out">
                    <span className="flex gap-2 [&>svg]:h-4 [&>svg]:w-4">

                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor " className="size-6 inline-flex dark:text-gray-800 text-white">
                        <path d="M21.721 12.752a9.711 9.711 0 0 0-.945-5.003 12.754 12.754 0 0 1-4.339 2.708 18.991 18.991 0 0 1-.214 4.772 17.165 17.165 0 0 0 5.498-2.477ZM14.634 15.55a17.324 17.324 0 0 0 .332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 0 0 .332 4.647 17.385 17.385 0 0 0 5.268 0ZM9.772 17.119a18.963 18.963 0 0 0 4.456 0A17.182 17.182 0 0 1 12 21.724a17.18 17.18 0 0 1-2.228-4.605ZM7.777 15.23a18.87 18.87 0 0 1-.214-4.774 12.753 12.753 0 0 1-4.34-2.708 9.711 9.711 0 0 0-.944 5.004 17.165 17.165 0 0 0 5.498 2.477ZM21.356 14.752a9.765 9.765 0 0 1-7.478 6.817 18.64 18.64 0 0 0 1.988-4.718 18.627 18.627 0 0 0 5.49-2.098ZM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 0 0 1.988 4.718 9.765 9.765 0 0 1-7.478-6.816ZM13.878 2.43a9.755 9.755 0 0 1 6.116 3.986 11.267 11.267 0 0 1-3.746 2.504 18.63 18.63 0 0 0-2.37-6.49ZM12 2.276a17.152 17.152 0 0 1 2.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0 1 12 2.276ZM10.122 2.43a18.629 18.629 0 0 0-2.37 6.49 11.266 11.266 0 0 1-3.746-2.504 9.754 9.754 0 0 1 6.116-3.985Z" />
                        </svg> Website

                        <svg data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"></path>
                        </svg>
                    </span>
                    </a>}

                    {has_demo && <a
            href={demo_link} // Replace with your LinkedIn URL
            target="_blank"
            rel="noopener noreferrer"
                    className="inline-flex rounded-full dark:text-neutral-800 text-white border dark:border-gray-300 border-neutral-600 hover:bg-neutral-900 dark:bg-gray-100 bg-neutral-800 dark:hover:bg-gray-200 px-6 py-2.5 text-xs font-semibold uppercase leading-normal text-white transition duration-150  ease-in-out">
                    <span className="flex gap-2 [&>svg]:h-4 [&>svg]:w-4">

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 inline-flex dark:text-gray-800 text-white">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                        </svg>
                        Demo

                        <svg data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"></path>
                        </svg>
                    </span>
                    </a>}

            </div>

            {/* Image */}
            <div className="w-full h-56 shadow-md overflow-hidden relative group rounded-lg">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover object-left-top duration-300 hover:scale-105"
                />
            </div>

            {/* Content */}
            <div className="mt-4 p-3 ">
                {/* Title */}
                <div> <span className="sm:text-lg lg:text-xl font-bold text-black dark:text-white">{title}, </span>
                {/* Description */}<span className="sm:text-md lg:text-lg font-semibold text-zinc-700 dark:text-neutral-400">{desc}</span></div>
                {/* Tags */} 
                <div className="mt-4 flex flex-wrap gap-2">
                    {tags.map((tag, index) => (
                        <span
                            key={index}
                            className="px-3 py-1.5 text-sm font-semibold text-zinc-800 dark:text-neutral-100 bg-zinc-300 dark:bg-neutral-700 rounded-lg"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>

    );
};

export default ProjectCard;