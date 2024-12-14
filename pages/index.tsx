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
        <header className="p-4 flex justify-between items-center bg-white dark:bg-gray-800 shadow">
          <h1 className="text-xl font-bold text-gray-800 dark:text-white">
            My Portfolio
          </h1>
          <button
            onClick={toggleDarkMode}
            className="p-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full"
          >
            {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </header>
       <main>
        <section className="flex justify-center items-center min-h-screen">
          <div className="grid md:grid-cols-1 lg:grid-cols-2 sm:grid-cols-1 gap-10 sm:p-6 lg:p-8">
          <ProjectCard
              className=""
              onClick={handleClick}
              title="scriptorium - code editor"
              desc="CRUD web application"
              tags={["React.js", "Next.js","TypeScript", "JavaScript", "Prisma", "Docker", "Tailwind CSS","MVC"]} // Tags array
              image="scriptorium.png"
          />

          <ProjectCard
                  className=""
                  onClick={handleClick}
                  title="access connect"
                  desc="AI Chatbot"
                  tags={["Python", "Open AI","LlamaIndex", "Streamlit", "Beautiful Soup"]} // Tags array
                  image="accessConnect.png"
              />
            <ProjectCard
                    className=""
                    onClick={handleClick}
                    title="personal portfolio"
                    desc="you are viewing this right now!"
                    tags={["React.js", "Next.js","TypeScript", "Tailwind CSS","Vercel"]} // Tags array
                    image="newicon.png"
                />

        <ProjectCard
                    className=""
                    onClick={handleClick}
                    title="iSong"
                    desc="social music sharing desktop application"
                    tags={["Java", "Java Swing","Spotify API", "Clean Architecture", "SOLID design principles"]} // Tags array
                    image="207_pic.png"
                />

          <ProjectCard
                    className=""
                    onClick={handleClick}
                    title="tetris"
                    desc="play tetris in MIPs assembly code editor"
                    tags={["MIPS Assembly language"]} // Tags array
                    image="tetris.png"
                />
            <ProjectCard
                    className=""
                    onClick={handleClick}
                    title="currency converter"
                    desc="real time currency converter"
                    tags={["JavaScript", "JQuery","CSS", "HTML"]} // Tags array
                    image="currency.png"
                />

          </div>
          </section>

       </main>
    </div>

    
    </>
  );
};
