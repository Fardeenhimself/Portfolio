import { CircleUserRound } from "lucide-react";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex-[3] transition-all duration-500 overflow-x-hidden">
        <main className="flex max-w-[1000px] flex-col gap-10 p-5 md:mx-10 md:py-14 pb-20 md:pb-14 md:pt-24">
          <div className="space-y-5">
            <h1 className="text-2xl font-bold font-sfd md:text-4xl">About Me</h1>
            <p className="text-sm font-sfr text-gray-600 md:text-base text-justify">
              Hi, I&apos;m Fardeen Been Zaman, a passionate Computer Science
              graduate and a versatile developer. <br />
              With a keen eye for design and a love for solving complex problems,
              I aim to create seamless user experiences and intuitive web
              applications that make a real impact. <br />
              I&apos;ve worked on a variety of projects from dynamic web apps
              built with React to responsive and visually appealing interfaces
              using Tailwind CSS. <br />
              My journey in tech started with a fascination for how things work
              behind the scenes, which led me to ensuring smooth workflows and
              excellent customer service. I&apos;m always excited to learn new
              technologies, optimize workflows, and contribute to meaningful
              projects that push boundaries. <br />
              Feel free to connect with me. Let&apos;s build something great
              together!
            </p>
          </div>
          <div className="space-y-10">
            <h1 className="text-2xl font-bold font-sfd md:text-4xl">Projects</h1>
            <div className="flex flex-col lg:flex-row lg:gap-20">
              <ul>
                <li className="relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:rounded-full before:bg-black before:transform">
                  <span className="text-lg font-semibold font-sfr">
                    Shoe Store
                  </span>
                  <span className="font-light font-sfr">
                    Type: E-commerce
                  </span>
                  <span className="font-light font-sfr">
                    Technology: MERN Stack
                  </span>
                  <a
                    href="https://github.com/Fardeenhimself/Shoe_Store_MERN"
                    className="font-light font-sfr"
                  >
                    Git Repo: https://github.com/Fardeenhimself/Shoe_Store_MERN
                  </a>
                  <span className="font-sfr">Duration: 26 Days</span>
                </li>
                <li className="relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:rounded-full before:bg-black before:transform">
                  <span className="text-lg font-semibold font-sfr">
                    Goriber Gari.com
                  </span>
                  <span className="font-light font-sfr">
                    Type: Renting Appication
                  </span>
                  <span className="font-light font-sfr">
                    Technology: Next JS
                  </span>
                  <a
                    href="https://github.com/Fardeenhimself/Car_Renting_NextJS"
                    className="font-light font-sfr"
                  >
                    Git Repo: https://github.com/Fardeenhimself/Car_Renting_NextJS
                  </a>
                  <span className="font-sfr">Duration: 12 Days</span>
                </li>
              </ul>
              <ul>
                <li className="relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:rounded-full before:bg-black before:transform">
                  <span className="text-lg font-semibold font-sfr">
                    Dm Me
                  </span>
                  <span className="font-light font-sfr">
                    Type: Chatting Application
                  </span>
                  <span className="font-light font-sfr">
                    Technology: MERN Stack, Socket IO
                  </span>
                  <a
                    href="https://github.com/Fardeenhimself/ChatApp_MERN"
                    className="font-light font-sfr"
                  >
                    Git Repo: https://github.com/Fardeenhimself/ChatApp_MERN
                  </a>
                  <span className="font-sfr">Duration: 8 Days</span>
                </li>
                <li className="relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:rounded-full before:bg-black before:transform">
                  <span className="text-lg font-semibold font-sfr">
                    FM Cake Fair
                  </span>
                  <span className="font-light font-sfr">
                    Type: E-Commerce
                  </span>
                  <span className="font-light font-sfr">
                    Technology: MERN Stack
                  </span>
                  <a
                    href="https://github.com/Fardeenhimself/eshop"
                    className="font-light font-sfr"
                  >
                    Git Repo: https://github.com/Fardeenhimself/eshop
                  </a>
                  <span className="font-sfr">Duration: Ongoing</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="max-w-3xl space-y-8">
            <h1 className="text-2xl font-bold font-sfd md:text-4xl">
              Certificates
            </h1>
            <div className="flex flex-col lg:flex-row lg:gap-20">
              <ul>
                <li className="relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:rounded-full before:bg-black before:transform">
                  <span className="text-lg font-semibold font-sfr">
                    Certificate of Completion
                  </span>
                  <span className="font-light font-sfr">
                    Course: JavaScript Beginners
                  </span>
                  <span className="font-light font-sfr">
                    Technology: JavaScript
                  </span>
                  <span className="font-sfr">From: Simplilearn</span>
                  <a
                    href="./src/certificates/sj.pdf"
                    className="font-light font-sfr"
                  >
                    <button className="bg-slate-600 hover:bg-slate-400 text-white py-2 px-4 rounded-full">
                      Certificate
                    </button>
                  </a>
                </li>
                <li className="relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:rounded-full before:bg-black before:transform">
                  <span className="text-lg font-semibold font-sfr">
                    Certificate of Participation
                  </span>
                  <span className="font-light font-sfr">
                    Course: React Internship
                  </span>
                  <span className="font-light font-sfr">
                    Technology: React JS
                  </span>
                  <span className="font-sfr">From: Appstick</span>
                  <a
                    href="./src/certificates/ar.pdf"
                    className="font-light font-sfr"
                  >
                    <button className="bg-slate-600 hover:bg-slate-400 text-white py-2 px-4 rounded-full">
                      Certificate
                    </button>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="space-y-10">
            <h1 className="text-2xl font-bold font-sfd md:text-4xl">
              Testimonials
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-24">
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-gray-100 p-3 rounded-full">
                    <CircleUserRound className="w-12 h-12 text-gray-600" />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-lg font-semibold font-sfr">
                      Mazharul Islam
                    </h3>
                    <span className="text-sm text-gray-600 font-sfr">
                      MERN Stack Developer
                    </span>
                    <span className="text-sm text-gray-600 font-sfr mb-4">
                      Appstick Solutions
                    </span>
                    <p className="text-gray-700 font-sfr text-sm">
                      Fardeen is an exceptional developer with a keen eye for detail. His work on our 
                      projects demonstrated strong problem-solving skills and a deep understanding of 
                      modern web technologies. His ability to quickly grasp complex concepts and 
                      deliver high-quality solutions made him a valuable team member.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-gray-100 p-3 rounded-full">
                    <CircleUserRound className="w-12 h-12 text-gray-600" />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-lg font-semibold font-sfr">
                      Sarah Johnson
                    </h3>
                    <span className="text-sm text-gray-600 font-sfr">
                      Senior Web Developer
                    </span>
                    <span className="text-sm text-gray-600 font-sfr mb-4">
                      Tech Innovations Ltd
                    </span>
                    <p className="text-gray-700 font-sfr text-sm">
                      Working with Fardeen was a great experience. His expertise in React and 
                      modern web development practices significantly contributed to our project's 
                      success. He consistently demonstrated strong communication skills and a 
                      proactive approach to problem-solving.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;
