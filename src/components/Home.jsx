import { CircleUserRound } from "lucide-react";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex-[3] transition-all duration-500 overflow-x-hidden">
        <main className="flex max-w-[1000px] flex-col gap-10 p-5 md:mx-10 md:py-14 pb-20 md:pb-14 md:pt-24">
          <div className="space-y-5">
            <h1 className="text-2xl font-bold font-poppins md:text-4xl">
              About Me
            </h1>
            <p className="text-sm font-poppins text-gray-600 md:text-base text-justify">
              Hi, I&apos;m Fardeen Been Zaman, a passionate Computer Science
              graduate and a versatile developer. <br />
              With a keen eye for design and a love for solving complex
              problems, I aim to create seamless user experiences and intuitive
              web applications that make a real impact. <br />
              I&apos;ve worked on a variety of projects from dynamic web apps
              built with React to responsive and visually appealing interfaces
              using Tailwind CSS. <br />
              My journey in tech started with a fascination for how things work
              behind the scenes, which led me to ensuring smooth workflows and
              excellent customer service.
              <br /> I&apos;m always excited to learn new technologies, optimize
              workflows, and contribute to meaningful projects that push
              boundaries. <br />
              Feel free to connect with me. Let&apos;s build something great
              together 😊!
            </p>
          </div>
          <div className="space-y-10">
            <h1 className="text-2xl font-bold font-poppins md:text-4xl">
              Projects
            </h1>
            <div className="flex flex-col lg:flex-row lg:gap-20">
              <ul>
                <li className="relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] before:top-1/5 before:h-3 before:w-3 before:-translate-y-1/5 before:rounded-full before:bg-black before:transform">
                  <span className="text-xl font-bold font-poppins">Quizzz</span>
                  <span className="font-semibold font-poppins">
                    Type: Quiz App
                  </span>
                  <span className="font-semibold font-poppins">
                    Technology: MERN Stack
                  </span>
                  <a
                    href="https://github.com/Fardeenhimself/Quizzz_MERN"
                    className="font-semibold hover:text-red-500 font-poppins"
                  >
                    Git Repo: github/shoe_store
                  </a>
                  <span className="font-poppins">Duration: 26 Days</span>
                </li>
                <li className="relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] before:top-1/5 before:h-3 before:w-3 before:-translate-y-1/5 before:rounded-full before:bg-black before:transform">
                  <span className="text-lg font-semibold font-poppins">
                    Goriber Gari.com
                  </span>
                  <span className="font-semibold font-poppins">
                    Type: Renting Appication
                  </span>
                  <span className="font-semibold font-poppins">
                    Technology: Next JS
                  </span>
                  <a
                    href="https://github.com/Fardeenhimself/Car_Renting_NextJS"
                    className="font-semibold hover:text-red-500  font-poppins"
                  >
                    Git Repo: github/car_rent
                  </a>
                  <span className="font-poppins">Duration: 12 Days</span>
                </li>
              </ul>
              <ul>
                <li className="relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] before:top-1/5 before:h-3 before:w-3 before:-translate-y-1/5 before:rounded-full before:bg-black before:transform">
                  <span className="text-lg font-semibold font-poppins">
                    Dm Me
                  </span>
                  <span className="font-semibold font-poppins">
                    Type: Chatting Application
                  </span>
                  <span className="font-semibold font-poppins">
                    Technology: MERN Stack, Socket IO
                  </span>
                  <a
                    href="https://github.com/Fardeenhimself/ChatApp_MERN"
                    className="font-semibold hover:text-red-500  font-poppins"
                  >
                    Git Repo: github/chat_mern
                  </a>
                  <span className="font-poppins">Duration: 8 Days</span>
                </li>
                <li className="relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] before:top-1/5 before:h-3 before:w-3 before:-translate-y-1/5 before:rounded-full before:bg-black before:transform">
                  <span className="text-lg font-semibold font-poppins">
                    FM Cake Fair
                  </span>
                  <span className="font-semibold font-poppins">
                    Type: E-Commerce
                  </span>
                  <span className="font-semibold font-poppins">
                    Technology: MERN Stack
                  </span>
                  <a
                    href="https://github.com/Fardeenhimself/eshop"
                    className="font-semibold hover:text-red-500  font-poppins"
                  >
                    Git Repo: github/eshop
                  </a>
                  <span className="font-poppins">
                    Duration: <span className="text-green-600">Ongoing...</span>{" "}
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="max-w-3xl space-y-8">
            <h1 className="text-2xl font-bold font-poppins md:text-4xl">
              Certificates
            </h1>
            <div className="flex flex-col lg:flex-row lg:gap-20">
              <ul>
                <li className="relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] before:top-1/5 before:h-3 before:w-3 before:-translate-y-1/5 before:rounded-full before:bg-black before:transform">
                  <span className="text-2xl font-semibold font-moonDance">
                    Certificate of Completion
                  </span>
                  <span className="font-medium  font-poppins">
                    Course: JavaScript Beginners
                  </span>
                  <span className="font-medium font-poppins">
                    Technology: JavaScript
                  </span>
                  <span className="font-poppins">From: Simplilearn</span>
                  <a
                    href="/js.png"
                    target="_blank"
                    className="font-light font-poppins"
                  >
                    <button className="bg-slate-600 hover:bg-slate-400 text-white py-2 px-4 rounded-full">
                      Certificate
                    </button>
                  </a>
                </li>
                <li className="relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] before:top-1/5 before:h-3 before:w-3 before:-translate-y-1/5 before:rounded-full before:bg-black before:transform">
                  <span className="text-2xl font-semibold font-moonDance">
                    Certificate of Participation
                  </span>
                  <span className="font-medium  font-poppins">
                    Course: React Internship
                  </span>
                  <span className="font-medium font-poppins">
                    Technology: React JS
                  </span>
                  <span className=" font-medium font-poppins">
                    From: Appstick
                  </span>
                  <a
                    href="/app.png"
                    target="_blank"
                    className="font-light font-poppins"
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
            <h1 className="text-2xl font-bold font-poppins md:text-4xl text-base-content">
              Testimonials
            </h1>

            <div className="grid grid-cols-1  lg:grid-cols-1 gap-4 sm:gap-20 ">
              <div className="bg-base-100 rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-base-200 p-2 sm:p-3 rounded-full">
                    <CircleUserRound className="w-10 h-10 sm:w-12 sm:h-12 text-base-content" />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-base sm:text-lg font-semibold font-serif text-base-content">
                      Md. Apu Hosen
                    </h3>
                    <span className="text-xs sm:text-sm text-base-content/70 font-poppins">
                      Senior Lecturer (Department of Computer Science and
                      Engineering)
                    </span>
                    <a
                      href="https://nubtkhulna.ac.bd/"
                      className="text-xs sm:text-sm text-base-content/70 font-poppins hover:text-violet-700"
                    >
                      Northern University of Business and Technology, Khulna
                    </a>
                    <a
                      href="mailto:apu.cse.just@gmail.com"
                      className="text-xs sm:text-sm text-base-content/70 font-poppins mb-2 sm:mb-4 hover:text-red-700"
                    >
                      📧Email: apu.cse.just@gmail.com
                    </a>
                    <p className="text-sm sm:text-base text-base-content font-poppins">
                      &quot;Fardeen has consistently demonstrated exceptional
                      problem-solving abilities and a strong grasp of computer
                      science fundamentals. His dedication to learning and
                      ability to apply theoretical knowledge in practical
                      scenarios is commendable.&quot;
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-base-100 rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-base-200 p-2 sm:p-3 rounded-full">
                    <CircleUserRound className="w-10 h-10 sm:w-12 sm:h-12 text-base-content" />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-base sm:text-lg font-semibold font-serif text-base-content">
                      Firoz Fahim
                    </h3>
                    <span className="text-xs sm:text-sm text-base-content/70 font-poppins">
                      Founder@N3X Chain
                    </span>
                    <a
                      href="https://n3xchain.com"
                      className="text-xs sm:text-sm text-base-content/70 font-poppins hover:text-red-700"
                    >
                      n3xchain.com
                    </a>
                    <a
                      href="mailto:firozfahim@nx3chain.com"
                      className="text-xs sm:text-sm text-base-content/70 font-poppins mb-2 sm:mb-4 hover:text-red-700"
                    >
                      📧Email: firozfahim@n3xchain.com
                    </a>
                    <p className="text-sm sm:text-base text-base-content font-poppins">
                      &quot;Working with Fardeen was a pleasure. His technical
                      expertise in web development and attention to detail
                      resulted in a high-quality product. He shows great
                      potential in the field of software development.&quot;
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-base-100 rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-base-200 p-2 sm:p-3 rounded-full">
                    <CircleUserRound className="w-10 h-10 sm:w-12 sm:h-12 text-base-content" />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-base sm:text-lg font-semibold font-serif text-base-content">
                      Syeda Tanjina
                    </h3>
                    <span className="text-xs sm:text-sm text-base-content/70 font-poppins">
                      Teacher (Junior Section)
                    </span>
                    <a
                      href="https://yaleinternationalschool.com/"
                      className="text-xs sm:text-sm text-base-content/70 font-poppins hover:text-blue-700"
                    >
                      Yale International School, Dhaka, Bangladesh
                    </a>
                    <a
                      href="mailto:syedatanjina10@gmail.com"
                      className="text-xs sm:text-sm text-base-content/70 font-poppins mb-2 sm:mb-4 hover:text-red-700"
                    >
                      📧Email: syedatanjina10@gmail.com
                    </a>
                    <p className="text-sm sm:text-base text-base-content font-poppins">
                      &quot;Fardeen&apos;s ability to explain complex technical
                      concepts in simple terms is remarkable. His patience and
                      clear communication skills make him an excellent
                      collaborator and team player.&quot;
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
