import image from "/image.jpg";
import {
  Github,
  GlobeIcon,
  Linkedin,
  Mail,
  MapPinHouse,
} from "lucide-react";

const Sidebar = () => {
  return (
    <div className="min-h-screen flex-1 relative p-10 sm:border-r">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col items-center justify-center gap-5">
          <img
            src={image}
            alt="dp"
            className="w-36 h-40 rounded-badge sm:mt-5 object-cover border-4 border-white shadow-md"
          />
          <div className="text-center space-y-1">
            <h1 className="text-2xl font-bold font-poppins">
              Fardeen Been Zaman
            </h1>
            <h3 className="text-xl font-poppins">
             Flutter Developer | IT Expert | Remote Ready
            </h3>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-5 border-b p-5">
          <ul className="space-y-3 font-poppins">
            <li className="flex items-center gap-2">
              <MapPinHouse className="text-xl" />
              <span>Khulna, Bangladesh</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="text-xl" />
              <a
                className="hover:text-red-500"
                href="mailto:fardeen.zaman@outlook.com"
              >
                fardeen.cse20@gmail.com
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
              <Linkedin className="text-xl hover:text-blue-500" />
              <a
                className="hover:text-blue-500"
                href="https://www.linkedin.com/in/fardeenhimself"
              >
                linkedin.com/in/fardeenhimself
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Github className="text-xl hover:text-pink-500" />
              <a
                className="hover:text-pink-500"
                href="https://github.com/fardeenhimself"
              >
                github.com/fardeenhimself
              </a>
            </li>
            <li className="flex items-center gap-2">
              <GlobeIcon className="text-xl hover:text-green-500" />
              <a
                className="hover:text-green-500"
                href="https://scholar.google.com/citations?hl=en&view_op=list_works&gmla=AH8HC4yi4up-LS5T3nh1HIlZajG9tIqI5t57AjqNxMha_L92CgxJ94D3SWOes9TeuFQztLy1bacWj8xJCuuHYw&user=C03ystoAAAAJ"
              >
                scholar.google.com/fardeen-been-zaman
              </a>
            </li>
          </ul>
        </div>
                <div className="flex flex-col items-start justify-start gap-5 border-b p-5">
          <h1 className="text-base font-semibold font-poppins md:text-2xl">
            Technology
          </h1>
          <div className="flex flex-wrap gap-3">
            <div className="flex flex-wrap gap-3">
              <span className="rounded-xl bg-black p-3 text-purple text-white font-poppins hover:shadow-lg transition-shadow">
                Dart
              </span>
              <span className="rounded-xl bg-black p-3 text-purple text-white font-poppins hover:shadow-lg transition-shadow">
                Flutter
              </span>
              <span className="rounded-xl bg-black p-3 text-purple text-white font-poppins hover:shadow-lg transition-shadow">
                Firebase
              </span>
            </div>
            <div className="flex flex-wrap gap-3">
              <span className="rounded-xl bg-black p-3 text-purple text-white font-poppins hover:shadow-lg transition-shadow">
                Supabase
              </span>
              <span className="rounded-xl bg-black p-3 text-purple text-white font-poppins hover:shadow-lg transition-shadow">
                GetX
              </span>
               <span className="rounded-xl bg-black p-3 text-purple text-white font-poppins hover:shadow-lg transition-shadow">
                Riverpod
              </span>
              <span className="rounded-xl bg-black p-3 text-purple text-white font-poppins hover:shadow-lg transition-shadow">
                SQLite
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-5 border-b p-5">
          <h1 className="text-base font-semibold font-poppins md:text-2xl">
            Educational Qualification
          </h1>
          <ul>
            <li className="relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] before:top-1/6 before:h-3 before:w-3 before:-translate-y-1/5 before:rounded-full before:bg-black before:transform">
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
          </ul>
        </div>
        <div className="flex flex-col items-start justify-start gap-5 border-b p-5">
          <h1 className="text-base font-semibold font-poppins md:text-2xl">
            Skills
          </h1>
          <div className="flex flex-wrap gap-16 p-3">
            <ul className="flex list-disc flex-col gap-3 font-poppins">
              <li>Microsoft Office</li>
              <li>Google Workspace</li>
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
        <div className="flex flex-col items-center justify-start gap-5 p-5">
          <h3 className="text-sm font-poppins sm:text-base">
            <span className="hidden sm:inline">All Rights Reserved</span>{" "}
            {new Date().getFullYear()} &copy; Fardeen Been Zaman
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
