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
            <h1 className="text-2xl font-bold font-sfd">Fardeen Been Zaman</h1>
            <h3 className="text-xl font-sfd">Web Developer</h3>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-5 border-b p-5">
          <ul className="space-y-3 font-sfr">
            <li className="flex items-center gap-2">
              <MapPinHouse className="text-xl" />
              <span>Khulna City, Khulna</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="text-xl" />
              <span>fardeen.zaman@outlook.com</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="text-xl" />
              <span>+88 017 1137 9218</span>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-start justify-start gap-5 border-b p-5">
          <h1 className="text-base font-semibold font-sfd md:text-2xl">
            Social Links
          </h1>
          <ul className="space-y-3 font-sfr">
            <li className="flex items-center gap-2">
              <Facebook className="text-xl" />
              <span>facebook.com/fardeenhimself</span>
            </li>
            <li className="flex items-center gap-2">
              <Linkedin className="text-xl" />
              <span>linkedin.com/fardeen-been-zaman</span>
            </li>
            <li className="flex items-center gap-2">
              <Github className="text-xl" />
              <span>github.com/fardeenhimself</span>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-start justify-start gap-5 border-b p-5">
          <h1 className="text-base font-semibold font-sfd md:text-2xl">
            Educational Qualification
          </h1>
          <ul>
            <li className="relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:rounded-full before:bg-black before:transform">
              <span className="font-light md:text-lg font-sfr">
                Bachelors Degree
              </span>
              <span className="font-semibold md:text-lg font-sfr">
                Computer Science and Engineering
              </span>
              <span className="font-semibold font-sfr">CGPA: 3.70/4.00</span>
              <span className="font-light font-sfr">
                Northern University of Business and Technology, Khulna
              </span>
              <span className="text-sm font-sfr">2020-2024</span>
            </li>
            <li className="relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:rounded-full before:bg-black before:transform">
              <span className="font-light md:text-lg font-sfr">
                Higher Secondary
              </span>
              <span className="font-semibold md:text-lg font-sfr">
                Science Discipline
              </span>
              <span className="font-semibold font-sfr">CGPA: 4.17/5.00</span>
              <span className="font-light font-sfr">
                Islamabad Collegiate School and College, Khulna
              </span>
              <span className="text-sm font-sfr">2017-2019</span>
            </li>
            <li className="relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:rounded-full before:bg-black before:transform">
              <span className="font-light md:text-lg font-sfr">
                Secondary Education
              </span>
              <span className="font-semibold md:text-lg font-sfr">
                Science Discipline
              </span>
              <span className="font-semibold font-sfr">CGPA: 4.94/5.00</span>
              <span className="font-light font-sfr">
                Islamabad Collegiate School and College, Khulna
              </span>
              <span className="text-sm font-sfr">2014-2016</span>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-start justify-start gap-5 border-b p-5">
          <h1 className="text-base font-semibold font-sfd md:text-2xl">
            Technology
          </h1>
          <div className="flex flex-wrap gap-3">
            <div className="flex flex-wrap gap-3">
              <span className="rounded-xl bg-black p-3 text-white text-center font-sfr">
                HTML
              </span>
              <span className="rounded-xl bg-black p-3 text-white text-center font-sfr">
                CSS
              </span>
              <span className="rounded-xl bg-black p-3 text-white text-center font-sfr">
                JavaScript
              </span>
            </div>
            <div className="flex flex-wrap gap-3">
              <span className="rounded-xl bg-black p-3 text-white text-center font-sfr">
                React JS
              </span>
              <span className="rounded-xl bg-black p-3 text-white text-center font-sfr">
                Next JS
              </span>
              <span className="rounded-xl bg-black p-3 text-white text-center font-sfr">
                Tailwind CSS
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-5 border-b p-5">
          <h1 className="text-base font-semibold font-sfd md:text-2xl">
            Skills
          </h1>
          <div className="flex flex-wrap gap-16 p-3">
            <ul className="flex list-disc flex-col gap-3 font-sfr">
              <li>Microsoft Office</li>
              <li>Problem Solving</li>
              <li>Excellent Communication</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-5 border-b p-5">
          <h1 className="text-base font-semibold font-sfd md:text-2xl">
            Language Proficiency
          </h1>
          <div className="flex flex-wrap gap-16 p-3">
            <ul className="flex list-disc gap-12 font-sfr">
              <li>English</li>
              <li>Bangla</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-5 border-b p-5">
          <h1 className="text-base font-semibold font-sfd md:text-2xl">
            Hobbies
          </h1>
          <div className="flex flex-wrap gap-16 p-3">
            <ul className="flex list-disc flex-col gap-3 font-sfr">
              <li>Reading Books</li>
              <li>Cricket</li>
              <li>Workout</li>
            </ul>
            <ul className="flex list-disc flex-col gap-3 font-sfr">
              <li>Cycling</li>
              <li>Travelling</li>
              <li>Fifa</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
