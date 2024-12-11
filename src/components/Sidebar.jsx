import image from "/image.jpg";
import {
  Facebook,
  Github,
  Linkedin,
  Mail,
  MapPinHouse,
  Phone,
} from "lucide-react";

const Sidebar = () => {
  return (
    <div className="min-h-screen flex-1 relative p-10 sm:border-r">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col items-center justify-center gap-5">
          <img
            src={image}
            alt="dp"
            className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-md"
          />
          <div className="text-center space-y-1">
            <h1 className="text-2xl font-bold font-poppins">
              Fardeen Been Zaman
            </h1>
            <h3 className="text-xl font-poppins">Web Developer</h3>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-5 border-b p-5">
          <ul className="space-y-3 font-poppins">
            <li className="flex items-center gap-2">
              <MapPinHouse className="text-xl" />
              <span>Khulna City, Khulna</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="text-xl" />
              <a
                className="hover:text-red-500"
                href="mailto:fardeen.zaman@outlook.com"
              >
                fardeen.zaman@outlook.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="text-xl" />
              <a className="hover:text-red-500" href="tel:+8801711379218">
                +88 017 1137 9218
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-start justify-start gap-5 border-b p-5">
          <h1 className="text-base font-semibold font-poppins md:text-2xl">
            Social Links
          </h1>
          <ul className="space-y-3 font-poppins">
            <li className="flex items-center gap-2">
              <Facebook className="text-xl hover:text-blue-500" />
              <a
                className="hover:text-blue-500"
                href="https://www.facebook.com/fardeenhimself"
              >
                fardeenhimself
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Linkedin className="text-xl hover:text-blue-500" />
              <a
                className="hover:text-blue-500"
                href="https://www.linkedin.com/in/fardeen-been-zaman"
              >
                fardeen-been-zaman
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Github className="text-xl hover:text-pink-500" />
              <a
                className="hover:text-pink-500"
                href="https://github.com/fardeenhimself"
              >
                fardeenhimself
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-start justify-start gap-5 border-b p-5">
          <h1 className="text-base font-semibold font-poppins md:text-2xl">
            Educational Qualification
          </h1>
          <ul>
            <li className="relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] before:top-1/5 before:h-3 before:w-3 before:-translate-y-1/5 before:rounded-full before:bg-black before:transform">
              <span className="font-light md:text-lg font-poppins">
                Bachelors Degree
              </span>
              <span className="font-semibold md:text-lg font-poppins">
                Computer Science and Engineering
              </span>
              <span className="font-semibold font-poppins">
                CGPA: 3.70/4.00
              </span>
              <span className="font-light font-poppins">
                Northern University of Business and Technology, Khulna
              </span>
              <span className="text-sm font-poppins">2020-2024</span>
            </li>
            <li className="relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] before:top-1/5 before:h-3 before:w-3 before:-translate-y-1/5 before:rounded-full before:bg-black before:transform">
              <span className="font-light md:text-lg font-poppins">
                Higher Secondary
              </span>
              <span className="font-semibold md:text-lg font-poppins">
                Science Discipline
              </span>
              <span className="font-semibold font-poppins">
                CGPA: 4.17/5.00
              </span>
              <span className="font-light font-poppins">
                Islamabad Collegiate School and College, Khulna
              </span>
              <span className="text-sm font-poppins">2017-2019</span>
            </li>
            <li className="relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] before:top-1/5 before:h-3 before:w-3 before:-translate-y-1/5 before:rounded-full before:bg-black before:transform">
              <span className="font-light md:text-lg font-poppins">
                Secondary Education
              </span>
              <span className="font-semibold md:text-lg font-poppins">
                Science Discipline
              </span>
              <span className="font-semibold font-poppins">
                CGPA: 4.95/5.00
              </span>
              <span className="font-light font-poppins">
                Islamabad Collegiate School and College, Khulna
              </span>
              <span className="text-sm font-poppins">2014-2016</span>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-start justify-start gap-5 border-b p-5">
          <h1 className="text-base font-semibold font-poppins md:text-2xl">
            Technology
          </h1>
          <div className="flex flex-wrap gap-3">
            <div className="flex flex-wrap gap-3">
              <span className="rounded-xl bg-black p-3 text-white text-center font-poppins">
                HTML
              </span>
              <span className="rounded-xl bg-black p-3 text-white text-center font-poppins">
                CSS
              </span>
              <span className="rounded-xl bg-black p-3 text-white text-center font-poppins">
                JavaScript
              </span>
            </div>
            <div className="flex flex-wrap gap-3">
              <span className="rounded-xl bg-black p-3 text-white text-center font-poppins">
                React JS
              </span>
              <span className="rounded-xl bg-black p-3 text-white text-center font-poppins">
                Next JS
              </span>
              <span className="rounded-xl bg-black p-3 text-white text-center font-poppins">
                Tailwind CSS
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-5 border-b p-5">
          <h1 className="text-base font-semibold font-poppins md:text-2xl">
            Skills
          </h1>
          <div className="flex flex-wrap gap-16 p-3">
            <ul className="flex list-disc flex-col gap-3 font-poppins">
              <li>Microsoft Office</li>
              <li>Problem Solving</li>
              <li>Excellent Communication</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-5 border-b p-5">
          <h1 className="text-base font-semibold font-poppins md:text-2xl">
            Language Proficiency
          </h1>
          <div className="flex flex-wrap gap-16 p-3">
            <ul className="flex list-disc gap-12 font-poppins">
              <li>English</li>
              <li>Bangla</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-5 border-b p-5">
          <h1 className="text-base font-semibold font-poppins md:text-2xl">
            Hobbies
          </h1>
          <div className="flex flex-wrap gap-16 p-3">
            <ul className="flex list-disc flex-col gap-3 font-poppins">
              <li>Reading Books</li>
              <li>Cricket</li>
              <li>Cycling</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
