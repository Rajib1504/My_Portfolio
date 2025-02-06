import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaFacebook,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="text-2xl bg-background">
      <footer className="bg-gray-900 text-white py-8 mt-20">
        <div className="max-w-6xl mx-auto px-4">
          {/* Main Content */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
            {/* Personal Info */}
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-[#FF014F] mb-2">
                Rajib Sardar
              </h3>
              <p className="text-gray-300 text-base">
                Junior Frontend Developer{" "}
              </p>
              <p className="text-gray-300 mt-2 text-base">
                Turning ideas into functional solutions
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-2 text-center">
              <div className="flex items-center gap-2 text-base justify-center">
                <FaPhone className="text-[#FF014F]" />
                <span>+91 8583881364</span>
              </div>
              <div className="flex items-center gap-2 text-base justify-center">
                <FaEnvelope className="text-[#FF014F]" />
                <span>rajibsardar1542@gmail.com</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 text-2xl">
              <a
                href="https://github.com/Rajib1504"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#FF014F] transition-colors"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/rajib-sardar-35307934a"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#FF014F] transition-colors"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100076870941377"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#FF014F] transition-colors"
              >
                <FaFacebook />
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t text-sm border-gray-700 pt-6 text-center text-gray-400">
            <p>
              © {new Date().getFullYear()} Rajib Sardar. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
