import { Home as HomeIcon, Mail, Download } from "lucide-react";

const Navbar = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:fardeen.zaman@outlook.com";
  };

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = './src/certificates/Fardeen CV.pdf';
    link.download = 'Fardeen CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden md:flex fixed top-0 left-0 right-0 bg-white shadow-sm z-50 mb-4">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-end items-center gap-6">
            <a
              href="/"
              className="text-gray-700 hover:text-black font-sfr flex items-center gap-2"
            >
              <HomeIcon size={20} />
              <span>Home</span>
            </a>
            <button
              onClick={handleEmailClick}
              className="text-gray-700 hover:text-black font-sfr flex items-center gap-2"
            >
              <Mail size={20} />
              <span>Contact Me</span>
            </button>
            <button
              onClick={handleDownloadCV}
              className="text-gray-700 hover:text-black font-sfr flex items-center gap-2"
            >
              <Download size={20} />
              <span>Download CV</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-lg z-50">
        <div className="flex justify-around items-center py-3">
          <a
            href="/"
            className="text-gray-700 hover:text-black flex flex-col items-center"
          >
            <HomeIcon size={24} />
            <span className="text-xs mt-1 font-sfr">Home</span>
          </a>
          <button
            onClick={handleEmailClick}
            className="text-gray-700 hover:text-black flex flex-col items-center"
          >
            <Mail size={24} />
            <span className="text-xs mt-1 font-sfr">Contact</span>
          </button>
          <button
            onClick={handleDownloadCV}
            className="text-gray-700 hover:text-black flex flex-col items-center"
          >
            <Download size={24} />
            <span className="text-xs mt-1 font-sfr">CV</span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
