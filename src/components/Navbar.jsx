import {
  Home as HomeIcon,
  Mail,
  Download,
  Settings as SettingsIcon,
} from "lucide-react";

const Navbar = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:fardeen.zaman@outlook.com";
  };

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/cv.pdf";
    link.download = "cv.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden md:flex fixed top-0 left-0 right-0 bg-base-100 shadow-sm z-50 mb-4">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-end items-center gap-6">
            <a
              href="/settings"
              className="text-base-content hover:text-primary font-poppins flex items-center gap-2"
            >
              <SettingsIcon size={20} />
              <span>Theme</span>
            </a>
            <a
              href="/"
              className="text-base-content hover:text-primary font-poppins flex items-center gap-2"
            >
              <HomeIcon size={20} />
              <span>Home</span>
            </a>
            <button
              onClick={handleEmailClick}
              className="text-base-content hover:text-primary font-poppins flex items-center gap-2"
            >
              <Mail size={20} />
              <span>Contact Me</span>
            </button>
            <button
              onClick={handleDownloadCV}
              className="text-base-content hover:text-primary font-poppins flex items-center gap-2"
            >
              <Download size={20} />
              <span>Download CV</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-base-100 shadow-lg z-50">
        <div className="flex justify-around items-center py-3">
          <a
            href="/settings"
            className="text-base-content hover:text-primary flex flex-col items-center"
          >
            <SettingsIcon size={24} />
            <span className="text-xs mt-1 font-poppins">Theme</span>
          </a>
          <a
            href="/"
            className="text-base-content hover:text-primary flex flex-col items-center"
          >
            <HomeIcon size={24} />
            <span className="text-xs mt-1 font-poppins">Home</span>
          </a>
          <button
            onClick={handleEmailClick}
            className="text-base-content hover:text-primary flex flex-col items-center"
          >
            <Mail size={24} />
            <span className="text-xs mt-1 font-poppins">Contact</span>
          </button>
          <button
            onClick={handleDownloadCV}
            className="text-base-content hover:text-primary flex flex-col items-center"
          >
            <Download size={24} />
            <span className="text-xs mt-1 font-poppins">CV</span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
