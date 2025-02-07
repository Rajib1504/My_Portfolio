import axios from "axios";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedin,
  FaFacebook,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

const ContactSection = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const name = form.name.value;
    const message = form.message.value;
    const details = { email, name, message };
    await axios.post(
      "my-portfolio-server-ayhwumbbl-rajib1081s-projects.vercel.app/sendMails",
      details
    );
  };

  return (
    <div id="Contact">
      <h3 className="text-[#FF014F] font-light mt-4 mb-4 text-center text-lg lg:text-2xl">
        Contact
      </h3>
      <section className="bg-light min-h-[50vh] flex justify-center items-center py-10 px-4">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Details */}
          <div className="flex flex-col gap-6 text-gray-800">
            <h2 className="text-[#FF014F] text-3xl font-semibold">
              Let’s Connect
            </h2>
            <div>
              <h3 className="text-xl font-medium mb-2">Contact Details</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-3">
                  <FaPhoneAlt className="text-[#FF014F]" />
                  <span>+91 8583881364</span>
                </li>
                <li className="flex items-center gap-3">
                  <FaLinkedinIn className="text-[#FF014F]" />
                  <a
                    href="https://www.linkedin.com/in/rajib-sardar-35307934a"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Rajib Sardar
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <FaEnvelope className="text-[#FF014F]" />
                  <a
                    href="mailto:rajibsardar1542@gmail.com"
                    className="hover:underline"
                  >
                    rajibsardar1542@gmail.com
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Social</h3>
              <div className="flex items-center gap-4">
                <a
                  href="https://www.linkedin.com/in/rajib-sardar-35307934a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FF014F] text-2xl hover:scale-110 transition-transform"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100076870941377"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FF014F] text-2xl hover:scale-110 transition-transform"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://github.com/Rajib1504"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FF014F] text-2xl hover:scale-110 transition-transform"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF014F]"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF014F]"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message:
                </label>
                <textarea
                  id="message"
                  placeholder="Type your message..."
                  rows="4"
                  name="message"
                  className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF014F]"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-2 bg-gradient-to-r  from-[#FF014F] to-[#7e0529] text-white font-semibold rounded-lg hover:bg-[#893750] transition-colors"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactSection;
