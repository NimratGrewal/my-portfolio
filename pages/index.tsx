import ProjectCard from "@/components/cards/project_card";
import { useState } from "react";
import Header from "@/components/Header";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const { scrollY } = useScroll();
  const backgroundOpacity = useTransform(scrollY, [0, 1000], [0.1,0.3]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formError, setFormError] = useState("");


  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const handleClick = () => {
  }

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setFormError("");
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    if (!name || !email || !subject || !message) {
      setFormError("Please fill out all fields.");
      return;
    }
    const mailtoLink = `mailto:nimratg.grewal@mail.utoronto.ca?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`;
    window.location.href = mailtoLink;
    setFormData({ name: "", email: "", subject: "", message: "" });
  };


  return (
    <>

    <motion.div
      className={`w-full min-w-full bg-gray-100 dark:bg-neutral-900`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
    
    <Header />
       <main className="relative z-10 w-full min-w-full">
  

       <section className="flex mb-10 justify-center w-full items-center bg-gray-100 dark:bg-neutral-900">
        <div className="grid pt-28 sm:grid-cols-1 lg:grid-cols-2 gap-6 items-center w-full md:max-w-6xl p-6 text-center">
          
          {/* Image Section */}
          <motion.div className="flex justify-center"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}>
            <div className="relative">
              <img
                className="h-48 w-36 rounded-full shadow-lg duration-200 transform transition-all border-4 border-neutral-600 dark:border-neutral-600"
                src={"nimrat_pic.png"}
                alt="Nimrat"
              />
            </div>
          </motion.div>

          {/* Text Section */}
          <motion.div
            className="w-full"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-black uppercase dark:text-white text-2xl md:text-3xl font-bold leading-relaxed">
              Nimrat Grewal
            </h1>
            <div className="flex items-center justify-center mt-2 text-neutral-500 dark:text-neutral-300 text-sm">
              <svg
                className="w-6 h-6 mr-1"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2C8.686 2 6 4.686 6 8c0 5.25 6 12 6 12s6-6.75 6-12c0-3.314-2.686-6-6-6zm0 8.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
              </svg>
              Toronto, Canada
            </div>
            <p className="mt-4 text-neutral-700 dark:text-neutral-300 text-base md:text-lg">
              I'm a passionate Software Engineer, driven to craft innovative software solutions 
              that make a difference. I specialize in creating efficient and user-focused 
              applications, with a strong foundation in clean and scalable code.
            </p>
          </motion.div>

            
            <motion.div className="mt-8 flex flex-row flex-wrap justify-center w-full gap-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}>
            <Link
              href="https://github.com/NimratGrewal"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg border border-gray-300 dark:border-neutral-600 dark:hover:bg-neutral-900 bg-gray-100 dark:bg-neutral-800 hover:bg-gray-200 px-4 py-2 text-xs font-semibold uppercase text-gray-600 dark:text-white transition duration-150"
            >
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 496 512" xmlns="http://www.w3.org/2000/svg">
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
              </svg>
              GitHub
            </Link>
            <Link
              href="/Nimrat_Grewal_Resume_April2025.pdf"
              download
              className="inline-flex items-center rounded-lg border border-gray-300 dark:border-neutral-600 dark:hover:bg-neutral-900 bg-gray-100 dark:bg-neutral-800 hover:bg-gray-200 px-4 py-2 text-xs font-semibold uppercase text-gray-600 dark:text-white transition duration-150"
            >
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />
              </svg>
              Download Resume
            </Link>
            <Link
              href="https://www.linkedin.com/in/nimrat-grewal-586193193/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg border border-gray-300 dark:border-neutral-600 dark:hover:bg-neutral-900 bg-gray-100 dark:bg-neutral-800 hover:bg-gray-200 px-4 py-2 text-xs font-semibold uppercase text-gray-600 dark:text-white transition duration-150"
            >
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z" clip-rule="evenodd" />
              </svg>
              LinkedIn
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center rounded-lg border border-gray-300 dark:border-neutral-600 dark:hover:bg-neutral-900 bg-gray-100 dark:bg-neutral-800 hover:bg-gray-200 px-4 py-2 text-xs font-semibold uppercase text-gray-600 dark:text-white transition duration-150"
            >
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clip-rule="evenodd" />
              </svg>
              Contact
            </Link>


            </motion.div>


          </div>
      </section>

      <motion.section 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="m-4 mx-auto rounded-xl border dark:border-neutral-800 border-neutral-400 dark:bg-gray-900 dark:text-gray-200 bg-gray-200 text-gray-900 w-full shadow-md md:max-w-4xl">
        {/* Header */}
        <div className="flex p-5 rounded-t-xl items-center w-full text-sm bg-neutral-600 text-gray-500">
          <span className="bg-red-500 h-4 w-4 rounded-full mr-3"></span>
          <span className="bg-yellow-500 h-4 w-4 rounded-full mr-3"></span>
          <span className="bg-green-500 h-4 w-4 rounded-full mr-3"></span>
          
          <span className="absolute flex flex-row gap-3 items-center left-1/2 [&>svg]:h-7 [&>svg]:w-7 transform -translate-x-1/2 text-neutral-100 text-lg font-semibold">
          
          <svg data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z"></path>
          </svg> Personal Details
          </span>

          </div>

        <div className="p-4 pb-6 w-full">
        <code className="text-lg font-semibold leading-relaxed"> 
          <span className="dark:text-blue-400 text-blue-700">const</span>{" "}
          <span className="text-violet-700 dark:text-yellow-300">nimrat_grewal</span>{" "}
          <span className="text-gray-600 dark:text-white">=</span>{" "}
          <span className="dark:text-gray-300 text-gray-600">{"{"}</span>
          <br />
          <span className="ml-4 dark:text-green-400 text-green-700">major</span>
          <span className="text-gray-600 dark:text-white">: </span>
          <span className="dark:text-orange-400 text-orange-600">"Computer Science"</span>
          <span className="text-gray-600 dark:text-white">,</span>
          <br />
          <span className="ml-4 dark:text-green-400 text-green-700">university</span>
          <span className="text-gray-600 dark:text-white">: </span>
          <span className="dark:text-orange-400 text-orange-600">"University of Toronto - St. George Campus"</span>
          <span className="text-gray-600 dark:text-white">,</span>
          <br />
          <span className="ml-4 dark:text-green-400 text-green-700">minor</span>
          <span className="text-gray-600 dark:text-white">: </span>
          <span className="dark:text-orange-400 text-orange-600">"Statistics"</span>
          <span className="text-gray-600 dark:text-white">,</span>
          <br />
          <span className="ml-4 dark:text-green-400 text-green-700">year_of_study</span>
          <span className="text-gray-600 dark:text-white">: </span>
          <span className="dark:text-blue-400 text-blue-700">3</span>
          <span className="text-gray-600 dark:text-white">,</span>
          <br />
          <span className="ml-4 dark:text-green-400 text-green-700">current_company</span>
          <span className="text-gray-600 dark:text-white">: </span>
          <span className="dark:text-orange-400 text-orange-600">"Ontario Ministry of Education"</span>
          <span className="text-gray-600 dark:text-white">,</span>
          <br />
          <span className="ml-4 dark:text-green-400 text-green-700">location</span>
          <span className="text-gray-600 dark:text-white">: </span>
          <span className="dark:text-orange-400 text-orange-600">"GTA, Canada"</span>
          <span className="text-gray-600 dark:text-white">,</span>
          <br />
          <span className="ml-4 dark:text-green-400 text-green-700">email</span>
          <span className="text-gray-600 dark:text-white">: </span>
          <span className="text-gray-600 dark:text-white">{`[`}</span>
          <span className="dark:text-orange-400 text-orange-600">"nimratg.grewal@mail.utoronto.ca"</span>
          <span className="text-gray-600 dark:text-white">,</span>
          <span className="dark:text-orange-400 text-orange-600"> "nimratgrewal17@gmail.com"</span>
          <span className="text-gray-600 dark:text-white">{`]`}</span>
          <span className="text-gray-600 dark:text-white">,</span>
          <br />
          <span className="ml-4 dark:text-green-400 text-green-700">hobbies</span>
          <span className="text-gray-600 dark:text-white">: </span>
          <span className="text-gray-600 dark:text-white">{`[`}</span>
          <span className="dark:text-orange-400 text-orange-600">"watching movies/tv shows"</span>
          <span className="text-gray-600 dark:text-white">,</span>
          <span className="dark:text-orange-400 text-orange-600"> "going to the gym"</span>
          <span className="text-gray-600 dark:text-white">,</span>
          <span className="dark:text-orange-400 text-orange-600"> "spending time with my friends"</span>
          <span className="text-gray-600 dark:text-white">,</span>
          <span className="dark:text-orange-400 text-orange-600"> "{`shopping :)`}"</span>
          <span className="text-gray-600 dark:text-white">{`]`}</span>
          <br></br>
          <span className="dark:text-gray-300 text-gray-600">{"}"}</span>
          <br></br>
          <span className="text-blue-400"> </span>{" "}
        </code>

        </div>
      </motion.section>


      <motion.section
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-70px" }}
        transition={{ duration: 0.5 }}
        className="py-12 bg-gray-100 dark:bg-neutral-900"
      >
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6">
          <h1 className="text-black dark:text-white text-center uppercase text-xl md:text-2xl font-bold leading-relaxed mb-12">
            Relevant Experience
          </h1>
          <div className="relative space-y-12">
            {/* Timeline Line */}
            <div className="absolute left-6 md:left-1/4 top-0 bottom-0 w-1 bg-pink-400 dark:from-blue-500"></div>

            {/* Experience 1 */}
            <div className="relative flex flex-col md:flex-row items-start">
              {/* Timeline Marker */}
              <div className="absolute left-4 md:left-[calc(25%-0.5rem)] w-5 h-5 bg-pink-400 dark:bg-pink-500 rounded-full border-4 border-gray-100 dark:border-neutral-900"></div>
              {/* Date */}
              <div className="md:w-1/4 pl-12 md:pl-0 text-gray-600 dark:text-gray-400 font-semibold">
                <span className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-gray-600 dark:text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 7V3m8 4V3m-9 4h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  May 2025 - Present
                </span>
              </div>
              {/* Details */}
              <div className="md:w-3/4 mt-4 md:mt-0 md:pl-8">
                <div className="flex items-center space-x-4 bg-white dark:bg-neutral-800 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-200">
                  <img
                    src="/veeva.png"
                    alt="Veeva Systems Logo"
                    className="w-10 h-10 rounded-full shadow-md object-cover"
                  />
                  <div>
                    <h2 className="text-black dark:text-white font-semibold text-xl">
                      Software Engineer Intern
                    </h2>
                    <h3 className="text-gray-700 dark:text-gray-400 italic">
                      Veeva Systems
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            {/* Experience 2 */}
            <div className="relative flex flex-col md:flex-row items-start">
              {/* Timeline Marker */}
              <div className="absolute left-4 md:left-[calc(25%-0.5rem)] w-5 h-5 bg-pink-400 dark:bg-pink-500 rounded-full border-4 border-gray-100 dark:border-neutral-900"></div>
              {/* Date */}
              <div className="md:w-1/4 pl-12 md:pl-0 text-gray-600 dark:text-gray-400 font-semibold">
                <span className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-gray-600 dark:text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 7V3m8 4V3m-9 4h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  Sept 2024 - April 2025
                </span>
              </div>
              {/* Details */}
              <div className="md:w-3/4 mt-4 md:mt-0 md:pl-8">
                <div className="flex items-center space-x-4 bg-white dark:bg-neutral-800 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-200">
                  <img
                    src="/ontario.jpg"
                    alt="Ontario Ministry of Education Logo"
                    className="w-10 h-10 rounded-full shadow-md object-cover"
                  />
                  <div>
                    <h2 className="text-black dark:text-white font-semibold text-xl">
                      Software QA Engineer Intern
                    </h2>
                    <h3 className="text-gray-700 dark:text-gray-400 italic">
                      Ontario Ministry of Education
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            {/* Experience 3 */}
            <div className="relative flex flex-col md:flex-row items-start">
              {/* Timeline Marker */}
              <div className="absolute left-4 md:left-[calc(25%-0.5rem)] w-5 h-5 bg-pink-400 dark:bg-pink-500 rounded-full border-4 border-gray-100 dark:border-neutral-900"></div>
              {/* Date */}
              <div className="md:w-1/4 pl-12 md:pl-0 text-gray-600 dark:text-gray-400 font-semibold">
                <span className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-gray-600 dark:text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 7V3m8 4V3m-9 4h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  May 2023 - Sept 2024
                </span>
              </div>
              {/* Details */}
              <div className="md:w-3/4 mt-4 md:mt-0 md:pl-8">
                <div className="flex items-center space-x-4 bg-white dark:bg-neutral-800 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-200">
                  <img
                    src="/toronto.jpg"
                    alt="University of Toronto Logo"
                    className="w-10 h-10 rounded-full shadow-md object-cover"
                  />
                  <div>
                    <h2 className="text-black dark:text-white font-semibold text-xl">
                      Data Science Research Assistant
                    </h2>
                    <h3 className="text-gray-700 dark:text-gray-400 italic">
                      University of Toronto
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            {/* Experience 4 */}
            <div className="relative flex flex-col md:flex-row items-start">
              {/* Timeline Marker */}
              <div className="absolute left-4 md:left-[calc(25%-0.5rem)] w-5 h-5 bg-pink-400 dark:bg-pink-500 rounded-full border-4 border-gray-100 dark:border-neutral-900"></div>
              {/* Date */}
              <div className="md:w-1/4 pl-12 md:pl-0 text-gray-600 dark:text-gray-400 font-semibold">
                <span className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-gray-600 dark:text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 7V3m8 4V3m-9 4h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  Sept 2023 - Dec 2023
                </span>
              </div>
              {/* Details */}
              <div className="md:w-3/4 mt-4 md:mt-0 md:pl-8">
                <div className="flex items-center space-x-4 bg-white dark:bg-neutral-800 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-200">
                  <img
                    src="/oracle.png"
                    alt="Oracle Logo"
                    className="w-10 h-10 rounded-full shadow-md object-cover"
                  />
                  <div>
                    <h2 className="text-black dark:text-white font-semibold text-xl">
                      Functional Support Analyst Intern
                    </h2>
                    <h3 className="text-gray-700 dark:text-gray-400 italic">
                      Oracle
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-12">
            <Link
              href="https://www.linkedin.com/in/nimrat-grewal-586193193/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg dark:bg-gray-200 bg-neutral-800 dark:text-gray-900 text-white text-sm font-semibold px-6 py-2.5 text-sm font-semibold uppercase shadow-lg hover:from-blue-600 hover:to-blue-800 dark:hover:from-blue-700 dark:hover:to-blue-900 hover:shadow-xl transition duration-200"
            >
              Full Experience List
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 50 50"
                className="inline-block ml-2"
                fill="currentColor"
              >
                <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z" />
              </svg>
            </Link>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
        className="py-12 bg-gray-100 w-full dark:bg-neutral-900"
      >
        <h2 className="text-center p-4 text-black dark:text-white text-xl font-bold uppercase m-3">
          familiar technologies
        </h2>
        <div className="w-full md:max-w-4xl mx-auto p-6 overflow-hidden"
        style={{
          maskImage: "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 1) 90%, rgba(0, 0, 0, 0) 100%)",
          WebkitMaskImage: "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 1) 90%, rgba(0, 0, 0, 0) 100%)",
        }}>
          <motion.div
            className="flex"
            animate={{
              x: ["0%", "-100%"],
              transition: {
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 5,
                  ease: "linear",
                },
                
              },
            }}
          >
            {[
              "React.js",
              "TypeScript",
              "Java",
              "Python",
              "Docker",
              "Tailwind CSS",
              "Next.js",
              "Prisma ORM",
              "JavaScript",
              "Material UI",
              "JWT",
              "Streamlit",
              "Open AI",
              "LlamaIndex",
              "RAG",
              "MIPS Assembly",
              "HTML",
              "CSS",
              // duplicate the list for better looping
              "React.js",
              "TypeScript",
              "Java",
              "Python",
              "Docker",
              "Tailwind CSS",
              "Next.js",
              "Prisma ORM",
              "JavaScript",
              "Material UI",
              "JWT",
              "Streamlit",
              "Open AI",
              "LlamaIndex",
              "RAG",
              "MIPS Assembly",
              "HTML",
              "CSS",
            ].map((tech, index) => (
              <span
                key={`${tech}-${index}`}
                className="inline-block mx-4 px-4 py-2 uppercase rounded-lg dark:bg-gray-200 bg-neutral-800 dark:text-gray-900 text-white text-sm font-semibold whitespace-nowrap"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
      </motion.section>

        
      <section className="bg-gray-100 dark:bg-neutral-900 w-full">
        <div className="flex flex-row justify-center w-full">
      <h2 className="text-center p-4 text-black uppercase dark:text-white text-xl md:text-xl font-bold leading-relaxed m-3 mt-7">
      Here are some of my projects...
      </h2></div>
        <section className="flex justify-center items-center min-h-screen !z-20">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 w-full md:max-w-6xl mx-auto p-6">
          <ProjectCard
              onClick={handleClick}
              title="Referral Management Platform"
              desc="designed to help businesses expand by aggregating social networks, analyzing connection strengths, and recommending leads. Enables users to manage contacts, track referrals, automate follow-ups, and assess relationship strength. Collaborated with 6 other members."
              tags={["React.js", "Django", "TypeScript", "Python", "Docker", "Tailwind CSS", "Material UI"]}
              image="/referral.png"
              is_deployed={false}
              website_link=""
              project_link=""
              demo_link="https://drive.google.com/drive/folders/1vPP-dmmc6Qv-UlVzycat9WTXPBsCI8xm?usp=sharing"
              has_demo={true}
              has_source_code_link={false}
            />
          <ProjectCard
              onClick={handleClick}
              title="Scriptorium"
              desc={`a full stack CRUD application where users can create blogs linking to code templates, write and execute isolated code templates through Docker and interact with other users blogs & templates. Collaborated with 2 other members. `}
              tags={["React.js", 'Next.js', 'TypeScript', 'JavaScript', 'Prisma ORM', 'Docker', 'jwt', 'Tailwind CSS']} // Tags array
              image="script-4.png"
              is_deployed={false}
              website_link=""
              project_link="https://github.com/NimratGrewal/Scriptorium"
              demo_link=""
              has_demo={false}
              has_source_code_link={true}
          />

          <ProjectCard
                  onClick={handleClick}
                  title="AccessConnect"
                  desc="a AI Chatbot that gives detailed responses to students with questions about the University of Toronto - Scarborough Campus Accessibilty Office & other departments. Collaborated with 2 other members."
                  tags={['Python', 'Open AI', 'LlamaIndex', 'RAG', 'Streamlit', 'Beautiful Soup']}// Tags array
                  image="access-1.png"
                  is_deployed={false}
                  project_link="https://github.com/NimratGrewal/AccessConnect"
                  website_link=""
                  demo_link="https://drive.google.com/drive/folders/1r4TSR7vFAEoyeY9ZiuFJrGsGbqAr9d6G?usp=sharing"
                  has_demo={true}
                  has_source_code_link={true}
              />
            <ProjectCard
                    onClick={handleClick}
                    title="Personal Portfolio"
                    desc="my personal website which you are currenty on! :p"
                    tags={['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS',"Framer Motion", 'Vercel']} // Tags array
                    image="port-1.png"
                    is_deployed={false}
                    project_link="https://github.com/NimratGrewal/my-portfolio"
                    website_link=""
                    demo_link=""
                    has_demo={false}
                  has_source_code_link={true}
                />

        <ProjectCard
                    onClick={handleClick}
                    title="iSong"
                    desc="a Java based social music desktop application where users can answer a daily prompt question with songs of thier choice. Collaborated with 3 other members."
                    tags={['Java', 'OOP', 'Java Swing', 'Spotify API', 'Clean Architecture', 'SOLID design principles']}// Tags array
                    image="isong-1.png"
                    is_deployed={false}
                    project_link="https://github.com/NimratGrewal/207-project"
                    website_link=""
                    demo_link=""
                    has_demo={false}
                  has_source_code_link={true}
                />

          <ProjectCard
                    onClick={handleClick}
                    title="Tetris"
                    desc="a Tetris game in MIPs assembly code editor visualized via the bitmap display."
                    tags={["MIPS Assembly language"]} // Tags array
                    image="tet-2.png"
                    is_deployed={false}
                    project_link="https://github.com/NimratGrewal/Tetris"
                    website_link=""
                    demo_link=""
                    has_demo={false}
                  has_source_code_link={true}
                />
            <ProjectCard
                    onClick={handleClick}
                    title="Currency Converter"
                    desc="a real time currency converter practice project using a currency conversion API."
                    tags={['JavaScript', 'JQuery', 'CSS', 'HTML']} // Tags array
                    image="curr-1.png"
                    is_deployed={true}
                    project_link="https://github.com/NimratGrewal/currency_converter"
                    website_link="https://nimratgrewal.github.io/currency_converter/"
                    demo_link=""
                    has_demo={false}
                  has_source_code_link={true}
                />

          </div>
          </section>
          </section>

          <motion.section
          id="contact"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="py-12 bg-gray-100 dark:bg-neutral-900"
        >
          <h2 className="text-center p-4 text-black dark:text-white text-xl font-bold uppercase m-3">
            get in touch :p
          </h2>
          <div className="w-full md:max-w-4xl mx-auto p-6">
            <div className="flex flex-col items-center mb-8">
              <p className="text-neutral-800 dark:text-neutral-300 text-base mb-4">
                Reach out to me directly via email:
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="mailto:nimratg.grewal@mail.utoronto.ca"
                  className="inline-flex items-center rounded-lg border border-gray-300 dark:border-neutral-600 dark:hover:bg-neutral-900 bg-gray-100 dark:bg-neutral-800 hover:bg-gray-200 px-4 py-2 text-xs font-semibold uppercase text-gray-600 dark:text-white transition duration-150"
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.25 6.75c0-.456.164-.904.465-1.26L9 12.582l6.285-7.092a2.25 2.25 0 0 1 3.465 1.26c.09.364.135.736.135 1.11v10.5a2.25 2.25 0 0 1-2.25 2.25h-13.5a2.25 2.25 0 0 1-2.25-2.25V7.875c0-.374.045-.746.135-1.11ZM21 7.875v10.5c0 .414-.336.75-.75.75H3.75a.75.75 0 0 1-.75-.75V7.875c0-.398.156-.78.435-1.06L9 12.582l5.565-6.708A.75.75 0 0 1 15.75 6h3.465c.414 0 .75.336.75.75Z" clip-rule="evenodd" />
                  </svg>
                  nimratg.grewal@mail.utoronto.ca
                </Link>
                <Link
                  href="mailto:nimratgrewal17@gmail.com"
                  className="inline-flex items-center rounded-lg border border-gray-300 dark:border-neutral-600 dark:hover:bg-neutral-900 bg-gray-100 dark:bg-neutral-800 hover:bg-gray-200 px-4 py-2 text-xs font-semibold uppercase text-gray-600 dark:text-white transition duration-150"
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.25 6.75c0-.456.164-.904.465-1.26L9 12.582l6.285-7.092a2.25 2.25 0 0 1 3.465 1.26c.09.364.135.736.135 1.11v10.5a2.25 2.25 0 0 1-2.25 2.25h-13.5a2.25 2.25 0 0 1-2.25-2.25V7.875c0-.374.045-.746.135-1.11ZM21 7.875v10.5c0 .414-.336.75-.75.75H3.75a.75.75 0 0 1-.75-.75V7.875c0-.398.156-.78.435-1.06L9 12.582l5.565-6.708A.75.75 0 0 1 15.75 6h3.465c.414 0 .75.336.75.75Z" clip-rule="evenodd" />
                  </svg>
                  nimratgrewal17@gmail.com
                </Link>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold uppercase text-black dark:text-white mb-6 text-center">
                Send a Message
              </h3>
              <form onSubmit={handleFormSubmit} className="space-y-5 max-w-lg mx-auto">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    className="block w-full rounded-lg border border-gray-300 dark:border-neutral-600 bg-gray-100 dark:bg-neutral-900 text-gray-900 dark:text-white py-2 px-3 shadow-sm hover:border-blue-400 dark:hover:border-blue-600 focus:border-blue-500 dark:focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 transition duration-150"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    className="block w-full rounded-lg border border-gray-300 dark:border-neutral-600 bg-gray-100 dark:bg-neutral-900 text-gray-900 dark:text-white py-2 px-3 shadow-sm hover:border-blue-400 dark:hover:border-blue-600 focus:border-blue-500 dark:focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 transition duration-150"
                    placeholder="Your Email"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleFormChange}
                    className="block w-full rounded-lg border border-gray-300 dark:border-neutral-600 bg-gray-100 dark:bg-neutral-900 text-gray-900 dark:text-white py-2 px-3 shadow-sm hover:border-blue-400 dark:hover:border-blue-600 focus:border-blue-500 dark:focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 transition duration-150"
                    placeholder="Subject"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleFormChange}
                    rows={5}
                    className="block w-full rounded-lg border border-gray-300 dark:border-neutral-600 bg-gray-100 dark:bg-neutral-900 text-gray-900 dark:text-white py-2 px-3 shadow-sm hover:border-blue-400 dark:hover:border-blue-600 focus:border-blue-500 dark:focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 transition duration-150"
                    placeholder="Your Message"
                  />
                </div>
                {formError && (
                  <p className="text-red-500 text-sm text-center">{formError}</p>
                )}
                <div className="text-center">
                  <button
                    type="submit"
                    className="mb-2 mt-4 inline-flex items-center rounded-lg hover:bg-neutral-900 bg-neutral-800 dark:bg-gray-100 dark:hover:bg-gray-200 dark:text-gray-900 text-white px-6 py-2.5 text-sm font-semibold uppercase  transition duration-150 ease-in-out"
                  >
                    Send Message
                    <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2.01 21 23 12 2.01 3v7l15 2-15 2v7Z" />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </motion.section>

       </main>
        <footer className="p-3 text-center text-sm">
          <div className="text-black dark:text-white">Handcrafted by me using React, Typescript and Tailwind CSS.</div>
          <div className="text-black dark:text-white">© 2025 Nimrat Grewal. All Rights Reserved.</div>
        </footer>
       </motion.div>
    </>
  );
};
