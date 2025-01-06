import Image from "next/image";
import { Geist_Mono } from "next/font/google";
import ProjectCard from "@/components/cards/project_card";
import { useState } from "react";



export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const handleClick = () => {

  }


  return (
    <>

    <div className={`min-h-screen bg-gray-100 dark:bg-neutral-900 `}>
        <nav className="p-4 flex justify-between items-center bg-white dark:bg-neutral-900">
          <h1 className="text-xl font-bold text-gray-800 dark:text-white">
            Nimrat
          </h1>
          <button
            onClick={toggleDarkMode}
            className="p-2 font-semibold bg-gray-200 dark:bg-neutral-800 text-gray-800 dark:text-gray-200 rounded-full"
          >
            {darkMode ? "lights on" : "lights off"}
          </button>
        </nav>

       
       <main>
  

      <section className="flex justify-center items-center min-h-screen bg-gray-50 dark:bg-neutral-900">
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-8 items-center max-w-6xl w-full p-6">
          
          {/* Text Section */}
          <div className="flex flex-col text-center lg:text-left">
            <div>
            <h1 className="text-black dark:text-white text-xl md:text-xl font-bold leading-relaxed">
              Nimrat Grewal <br />  <br></br>
              <span className="text-indigo-600 dark:text-indigo-400">
                Software Engineer. <br></br>
              </span>
              <br />
              Driven to create software solutions.
            </h1>
            </div>
            
            <div className="mt-8 flex flex-row sm:justify-center md:justify-start lg:justify-start gap-4">
            <a
            href="https://github.com/NimratGrewal" // Replace with your LinkedIn URL
            target="_blank"
            rel="noopener noreferrer"
                    className="mb-2 mt-4 inline-flex rounded-full bg-zinc-700 text-white dark:text-black dark:bg-slate-300 px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-xl transition duration-150 dark:shadow-gray-700 ease-in-out hover:shadow-2xl">
                    <span className="[&>svg]:h-4 [&>svg]:w-4">
                        <svg className="text-white dark:text-black"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 496 512">
                        
                        <path
                            d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                        </svg>
                    </span>
                    </a>

                    <a
                      href="https://www.linkedin.com/in/nimrat-grewal-586193193/" // Replace with your LinkedIn URL
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mb-2 mt-4 inline-flex items-center rounded-lg bg-zinc-700 text-white dark:text-black dark:bg-slate-300 px-6 py-2.5 text-xs font-medium uppercase dark:text-black shadow-lg dark:shadow-gray-700 transition duration-150 ease-in-out hover:shadow-2xl"
                    >
                      Download Resume
                      <span className="ml-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16" // Adjust size as needed
                          height="16"
                          viewBox="0 0 24 24"
                          className="inline-block text-white dark:text-black"
                          fill="currentColor"
                        >
                          
                          <path d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd"></path>
                        </svg>
                      </span>
                    </a>


                    <a
                      href="https://www.linkedin.com/in/nimrat-grewal-586193193/" // Replace with your LinkedIn URL
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mb-2 mt-4 inline-block rounded-full bg-blue-500 px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-xl transition duration-150 ease-in-out hover:shadow-2xl dark:shadow-gray-700">                    
                      <span className="[&>svg]:h-4 [&>svg]:w-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"  fill="currentColor" width="100" height="100" viewBox="0 0 50 50"
                          className="text-white"
                        >
                          
                          <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z" clip-rule="evenodd"></path>
                        </svg>
                      </span>
                    </a>

                    <a
          href="https://www.linkedin.com/in/nimrat-grewal-586193193/" // Replace with your LinkedIn URL
          target="_blank"
          rel="noopener noreferrer"
          className="mb-2 mt-4 inline-flex items-center rounded-lg bg-orange-500 text-white dark:bg-orange-500 px-6 py-2.5 text-xs font-medium uppercase shadow-lg dark:shadow-gray-700 transition duration-150 ease-in-out hover:shadow-2xl"
        >
          Contact
          <span className="ml-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16" // Adjust size as needed
              height="16"
              viewBox="0 0 24 24"
              className="inline-block text-white"
              fill="currentColor"
            >
              
              <path d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clip-rule="evenodd"></path>
            </svg>
          </span>
        </a>


            </div>


          </div>
          
          {/* Image Section */}
          <div className="flex justify-center">
            <div className="relative">
              <img
                className="border-4 border-neutral-600 dark:border-neutral-800 h-auto object-cover w-48 sm:w-56 md:w-64 lg:w-80 rounded-full shadow-lg duration-200 transform transition-all  hover:shadow-2xl"
                src={"nimrat_pic.heic"}
                alt="Nimrat"
              />
              <div className="absolute -bottom-3 -right-3 w-10 h-10 bg-neutral-600 dark:bg-neutral-800 rounded-full shadow-md"></div>
            </div>
          </div>

        </div>
      </section>

      <section className="bg-gray-100 dark:bg-neutral-900 py-12">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          <h1 className="text-black dark:text-white text-lg font-bold leading-relaxed mb-4">About</h1>
          <div className="text-black dark:text-white text-lg leading-relaxed">
            Hi! I'm a third-year <span className="font-semibold text-orange-400">Computer Science</span> student at the University of Toronto with a minor in <span className="font-semibold text-blue-400">Statistics</span>. 
            <br />
            I have a passion for:
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>Building user-friendly web applications.</li>
              <li>Exploring data analytics and machine learning.</li>
              <li>Learning about scalable and efficient backend systems.</li>
              <li>Collaborating on open-source projects.</li>
            </ul>
            <p className="mt-4">
              Outside of coding, I enjoy watching movies, hanging out with my friends and exploring new coffee spots.
            </p>
          </div>
        </div>
      </section>

      <section className="m-4 mr-6 ml-6 bg-gray-100 dark:bg-neutral-900 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className=" text-black dark:text-white text-lg font-bold leading-relaxed mb-8 lg:mb-0 lg:text-left">Relevant Experience</h1>
          <div className="mt-8 flex flex-col space-y-8">
            {/* Experience 1 */}
            <div className="flex flex-col lg:flex-row items-start">
              <div className="w-full font-semibold lg:w-1/4 text-gray-600 dark:text-gray-400 lg:text-left">
                Sept 2024 - April 2025
              </div>
              <div className="w-full lg:w-3/4 text-black dark:text-white">
                <h2 className="font-semibold">Software QA Engineer Intern</h2>
                <h2 className="text-gray-700 dark:text-gray-400">Ontario Ministry of Education</h2>
                <ul className="mt-2">
                  <li>• Perform manual and automated testing for the official Ontario curriculum website, ensuring a seamless experience for <span className="font-semibold text-lime-400">2000000+ annual users</span> on MS Azure Cloud.</li>
                  <li>• Collaborate with developers on <span className="font-semibold text-pink-400">Azure DevOps</span> to resolve bugs, ensuring a quality user experience for the next release.</li>
                </ul>
              </div>
            </div>
            {/* Experience 2 */}
            <div className="flex flex-col lg:flex-row items-start">
              <div className="w-full font-semibold lg:w-1/4 text-gray-600 dark:text-gray-400 lg:text-left">
                May 2023 - Sept 2024
              </div>
              <div className="w-full lg:w-3/4 text-black dark:text-white">
                <h2 className="font-semibold">Data Analyst/Quantitative Research Assistant</h2>
                <h2 className="text-gray-700 dark:text-gray-400">University of Toronto</h2>
                <ul className="mt-2">
                  <li>• Led research on Algorithmic Bias and Misinformation in social media, focusing on adverse selection and competition.
                  </li>
                <li>• Analyzed news cycle tweet data with <span className="font-semibold text-blue-400">Python</span>,<span className="font-semibold text-orange-400"> Matplotlib</span>, <span className="font-semibold text-indigo-400">Seaborn</span>, and <span className="font-semibold text-yellow-400">Pandas</span>, identifying key patterns between misinformation and non-misinformation tweets that informed the development of sub-hypotheses and testing strategies.</li>
                <li>• Implemented 50% of sub-hypotheses, providing actionable insights into why misinformation disseminates.</li>
                <li>• Conducted fixed effects and first-difference regressions in <span className="font-semibold text-rose-400">R</span> to compare engagement modes and identify key predictors
                of misinformation spread versus high-quality content, validating the main hypothesis.</li>
                </ul>
              </div>
            </div>
            
            <div className="flex flex-col lg:flex-row items-start">
              <div className="w-full font-semibold lg:w-1/4 text-gray-600 dark:text-gray-400 lg:text-left">
                Sept 2023 - Dec 2023
              </div>
              <div className="w-full lg:w-3/4 text-black dark:text-white">
                <h2 className="font-semibold">Functional Support Analyst Intern</h2>
                <h2 className="text-gray-700 dark:text-gray-400">Oracle</h2>
                <ul className="mt-2">
                <li>• Boosted team case efficiency by 30% by analyzing and resolving <span className="font-semibold text-red-400">NetSuite software</span> UI accounting-related issues, enhancing product knowledge and user experience.</li>
                <li>• Facilitated client meetings and resolve concerns in real-time or off-call, achieving a 90% client satisfaction score.</li>
                <li>• Recognized as the <span className="font-semibold text-cyan-400">best Co-op student</span> in a cohort of 5 for outstanding work, participation, and performance.</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
        
        <div className="flex flex-row items-center mt-4 justify-center">

        <a
          href="https://www.linkedin.com/in/nimrat-grewal-586193193/" // Replace with your LinkedIn URL
          target="_blank"
          rel="noopener noreferrer"
          className="mb-2 mt-4 inline-flex items-center rounded-lg bg-zinc-700 text-white dark:text-black dark:bg-slate-300 px-6 py-2.5 text-xs font-medium uppercase dark:text-black shadow-lg dark:shadow-gray-700 transition duration-150 ease-in-out hover:shadow-2xl"
        >
          For full list of experiences:
          <span className="ml-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16" // Adjust size as needed
              height="16"
              viewBox="0 0 50 50"
              className="inline-block text-white dark:text-black"
              fill="currentColor"
            >
              
              <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
            </svg>
          </span>
        </a>

          </div>
      </section>


        
      {/* className="relative bg-fixed bg-[radial-gradient(#9ca3af_1px,transparent_1px)] dark:bg-[radial-gradient(#1E293B_1px,transparent_1px)] [background-size:16px_16px]" */}
        
      <section className="bg-gray-100 dark:bg-neutral-900">
        <div className="flex flex-row justify-center">
      <h2 className="text-center p-4 text-black dark:text-white text-xl md:text-xl font-bold leading-relaxed m-3 mt-7">
      Here are some of my projects...
      </h2></div>
        <section className="flex justify-center items-center min-h-screen !z-20">
          <div className=" grid md:grid-cols-1 lg:grid-cols-2 sm:grid-cols-1 gap-14 sm:p-6 lg:p-8">
          <ProjectCard
              onClick={handleClick}
              title="Scriptorium - Code Editor"
              desc={`A full stack CRUD application where users can create blogs linking to code, write and execute code templates and interact with other users blogs/templates. Collaborated with 2 other members. `}
              tags="React.js, Next.js, TypeScript, JavaScript, Prisma, Docker, jwt, Tailwind CSS" // Tags array
              image="scriptorium.png"
          />

          <ProjectCard
                  onClick={handleClick}
                  title="AccessConnect"
                  desc="Currently working on a web based RAG AI Chatbot for University of Toronto - Scarborough Campus Accessibilty Office with 2 other members."
                  tags="Python, Open AI, LlamaIndex, RAG, Streamlit, Beautiful Soup" // Tags array
                  image="accessConnect.png"
              />
            <ProjectCard
                    onClick={handleClick}
                    title="Personal Portfolio"
                    desc="You are currently here!"
                    tags="React.js, Next.js, TypeScript, Tailwind CSS, Vercel" // Tags array
                    image="newicon.png"
                />

        <ProjectCard
                    onClick={handleClick}
                    title="iSong"
                    desc="A Java based social music desktop application where users can answer a daily prompt question with songs of thier choice. Collaborated with 3 other members."
                    tags="Java, OOP, Java Swing, Spotify API, Clean Architecture, SOLID design principles"// Tags array
                    image="207_pic.png"
                />

          <ProjectCard
                    onClick={handleClick}
                    title="Tetris"
                    desc="Tetris in MIPs assembly code editor visualized via the bitmap display."
                    tags="MIPS Assembly language" // Tags array
                    image="tetris.png"
                />
            <ProjectCard
                    onClick={handleClick}
                    title="Currency Converter"
                    desc="A real time currency converter practice project using a currency conversion API."
                    tags="JavaScript, JQuery, CSS, HTML" // Tags array
                    image="currency.png"
                />

          </div>
          </section>
          </section>

        <section>


        </section>

       </main>
        <footer className="p-3 text-center text-sm">
          <div className="text-black dark:text-white">© 2024 Nimrat Grewal. All Rights Reserved.</div>
        </footer>
       </div>
    </>
  );
};
