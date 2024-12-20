import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
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

    <div className={`min-h-screen bg-gray-100 dark:bg-gray-900`}>
        <nav className="p-4 flex justify-between items-center bg-white dark:bg-gray-800 shadow">
          <h1 className="text-xl font-bold text-gray-800 dark:text-white">
            Nimrat
          </h1>
          <button
            onClick={toggleDarkMode}
            className="p-2 font-semibold bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full"
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </nav>

       
       <main>
    
        {/* <section className="flex justify-around items-center min-h-screen">
          <div className="grid grid-col lg:grid-cols-2 sm:grid-cols-1 sm:p-6 lg:p-8">
            
            <div className="text-center m-auto">
              <h1 className="text-black dark:text-white lg:text-3xl md:text-3xl sm:text-2xl">Hi! I'm Nimrat. I'm an aspiring Software Engineer passionate about creating software solutions</h1>
            </div>
            
            <div className="m-auto overflow-hidden"><img className="border border-black dark:border-white h-auto object-cover sm:w-48 sm:h-56 md:w-64 md:h-72 lg:w-80 lg:h-96 rounded-full" src={"nimrat_pic.heic"} /></div>    
          </div>

        </section> */}

      <section className="flex justify-center items-center min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-8 items-center max-w-6xl w-full p-6">
          
          {/* Text Section */}
          <div className="flex flex-col text-center lg:text-left">
            <div>
            <h1 className="text-black dark:text-white text-3xl md:text-4xl font-bold leading-relaxed">
              Hi! I'm Nimrat. <br />  <br></br>
              <span className="text-indigo-600 dark:text-indigo-400">
                Aspiring Software Engineer. <br></br>
              </span>
              <br />
              Driven to create software solutions.
            </h1>
            </div>
            
            <div className="mt-8 flex flex-row sm:justify-center md:justify-start lg:justify-start gap-4">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="m-2 p-3 bg-indigo-600 text-white dark:bg-indigo-500 shadow-lg rounded-3xl hover:shadow-2xl dark:shadow-gray-800 cursor-pointer overflow-hidden transform transition-all duration-300 hover:scale-105 hover:border-black dark:hover:border-gray-300  max-w-lg"
            >
              Github
            </a>
              <button className="m-2 p-3 bg-white text-black dark:text-white dark:bg-gray-800 rounded-3xl shadow-lg hover:shadow-2xl dark:shadow-gray-800 cursor-pointer overflow-hidden transform transition-all duration-300 hover:scale-105 hover:border-black dark:hover:border-gray-300  max-w-lg">Linkedin</button>
              <button className="m-2 p-3 bg-white text-black dark:text-white dark:bg-gray-800 rounded-3xl shadow-lg hover:shadow-2xl dark:shadow-gray-800 cursor-pointer overflow-hidden transform transition-all duration-300 hover:scale-105 hover:border-black dark:hover:border-gray-300  max-w-lg">Download Resume</button>
              <button className="m-2 p-3 bg-white text-black dark:text-white dark:bg-gray-800 rounded-3xl shadow-lg hover:shadow-2xl dark:shadow-gray-800 cursor-pointer overflow-hidden transform transition-all duration-300 hover:scale-105 hover:border-black dark:hover:border-gray-300  max-w-lg">Contact</button>
            </div>


          </div>
          
          {/* Image Section */}
          <div className="flex justify-center">
            <div className="relative">
              <img
                className="border-4 border-indigo-600 dark:border-indigo-400 h-auto object-cover w-48 sm:w-56 md:w-64 lg:w-80 rounded-full shadow-lg duration-200 transform transition-all hover:scale-105 hover:shadow-2xl"
                src={"nimrat_pic.heic"}
                alt="Nimrat"
              />
              <div className="absolute -bottom-3 -right-3 w-10 h-10 bg-indigo-600 dark:bg-indigo-400 rounded-full shadow-md"></div>
            </div>
          </div>

        </div>
      </section>

      <section className="bg-gray-100">
        <div className="flex flex-col text-center lg:text-left">
            <div>
            <h1 className="text-black dark:text-white text-3xl md:text-4xl font-bold leading-relaxed">
              About me </h1>
            <div className="text-black dark:text-white">
              I am a current third year Computer Science student at the University of Toronto with a minor in Statistics. 

              During my free time 
            </div>
          </div>
          </div>
        



      </section>

        
        
        
      <section className="relative bg-fixed bg-[radial-gradient(#9ca3af_1px,transparent_1px)] dark:bg-[radial-gradient(#1E293B_1px,transparent_1px)] [background-size:16px_16px]">
        <div className="flex flex-row justify-center">
      <h2 className="text-center p-4 text-black dark:text-white text-3xl md:text-3xl font-bold leading-relaxed m-3 mt-7 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-lg shadow-md">
              Projects
      </h2></div>
        <section className="flex justify-center items-center min-h-screen !z-20">
          <div className=" grid md:grid-cols-1 lg:grid-cols-2 sm:grid-cols-1 gap-14 sm:p-6 lg:p-8">
          <ProjectCard
              className="dark:text-indigo-800"
              cardDetails="border border-grey-900 dark:border-gray-900"
              onClick={handleClick}
              title="scriptorium - code editor"
              desc="full stack CRUD web application"
              tags={["React.js", "Next.js","TypeScript", "JavaScript", "Prisma", "Docker", "jwt", "Tailwind CSS","MVC"]} // Tags array
              image="scriptorium.png"
          />

          <ProjectCard
                  className="dark:text-indigo-800"
                  cardDetails="border border-grey-900 dark:border dark:border-gray-900"
                  onClick={handleClick}
                  title="access connect"
                  desc="web based AI Chatbot for University of Toronto - Scarborough Campus Accessibilty Office"
                  tags={["Python", "Open AI","LlamaIndex", "Streamlit", "Beautiful Soup"]} // Tags array
                  image="accessConnect.png"
              />
            <ProjectCard
                    className="dark:text-indigo-800"
                    cardDetails="border border-grey-900 dark:border dark:border-gray-900"
                    onClick={handleClick}
                    title="personal portfolio"
                    desc="you are viewing this right now!"
                    tags={["React.js", "Next.js","TypeScript", "Tailwind CSS","Vercel"]} // Tags array
                    image="newicon.png"
                />

        <ProjectCard
                    className="dark:text-indigo-800"
                    cardDetails="border border-grey-900 dark:border dark:border-gray-900"
                    onClick={handleClick}
                    title="iSong"
                    desc="social music sharing desktop application"
                    tags={["Java","OOP", "Java Swing","Spotify API", "Clean Architecture", "SOLID design principles"]} // Tags array
                    image="207_pic.png"
                />

          <ProjectCard
                    className="dark:text-indigo-800"
                    cardDetails="border border-grey-900 dark:border dark:border-gray-900"
                    onClick={handleClick}
                    title="tetris"
                    desc="play tetris in MIPs assembly code editor"
                    tags={["MIPS Assembly language"]} // Tags array
                    image="tetris.png"
                />
            <ProjectCard
                    className="dark:text-indigo-800"
                    cardDetails="border border-grey-900 dark:border dark:border-gray-900"
                    onClick={handleClick}
                    title="currency converter"
                    desc="real time currency converter"
                    tags={["JavaScript", "JQuery","CSS", "HTML"]} // Tags array
                    image="currency.png"
                />

          </div>
          </section>
          </section>

       </main>
        <footer className="p-3 text-center text-sm">
          <div className="text-black dark:text-white">© 2024 Nimrat Grewal. All Rights Reserved.</div>
        </footer>
       </div>
    </>
  );
};
