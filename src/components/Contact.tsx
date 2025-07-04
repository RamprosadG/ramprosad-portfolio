import React, { useState } from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_message: "",
  });
  const [toastVisible, setToastVisible] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Show toast message
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 3000);

    // Reset form
    setFormData({ user_name: "", user_email: "", user_message: "" });
  };

  return (
    <div className="py-16 flex justify-center items-center text-gray-300">
      <div className="w-full">
        <div className="text-3xl text-center font-semibold mb-10 text-white">
          Contact Me
        </div>

        <div className="bg-gray-800 p-6 rounded-lg flex flex-col gap-10">
          {/* Form Section */}
          <div className="w-full">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex w-full flex-col md:flex-row justify-between gap-4">
                <div className="w-full">
                  <label
                    htmlFor="user-email"
                    className="block mb-2 text-sm font-medium text-gray-400"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    id="user-email"
                    value={formData.user_email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-700 rounded-md bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="w-full">
                  <label
                    htmlFor="user-name"
                    className="block mb-2 text-sm font-medium text-gray-400"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    id="user-name"
                    value={formData.user_name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-700 rounded-md bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter subject"
                  />
                </div>
              </div>

              <div className="w-full">
                <label
                  htmlFor="user-message"
                  className="block mb-2 text-sm font-medium text-gray-400"
                >
                  Message
                </label>
                <textarea
                  name="user_message"
                  id="user-message"
                  rows={5}
                  value={formData.user_message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-700 rounded-md bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Write your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="mt-4 px-6 py-2 cursor-pointer bg-blue-600 text-white rounded hover:bg-blue-700 transition w-full justify-center flex items-center gap-2"
              >
                Send message
              </button>
            </form>

            {toastVisible && (
              <div className="fixed bottom-5 right-5 bg-green-600 text-white px-4 py-3 rounded shadow-lg">
                Message sent
              </div>
            )}
          </div>

          <div className="w-full justify-center flex items-center gap-4 mt-4 text-2xl text-gray-300">
            <a href="#" target="_blank" className="hover:text-cyan-400">
              <FaLinkedin />
            </a>
            <a href="#" target="_blank" className="hover:text-cyan-400">
              <FaGithub />
            </a>
            <a
              href="https://wa.me/8801234567890"
              target="_blank"
              className="hover:text-cyan-400"
            >
              <FaWhatsapp />
            </a>
            <a href="#" target="_blank" className="hover:text-cyan-400">
              <FaFacebook />
            </a>
          </div>

          {/* Contact Info Section */}
          <div className="w-full flex flex-col justify-center items-center">
            <div className="w-full text-center">
              <span className="text-white">Email: ram.bsmrstu@gmail.com</span>
            </div>
            <div className="w-full text-center">
              <h6 className=" text-white">
                Phone: +8801768157889, +8801568984650
              </h6>
            </div>
            <div className="w-full text-center">
              <h6 className=" text-white">
                Address: Madaripur, Dhaka, Bangladesh
              </h6>
            </div>

            {/* <div>
              <h6 className="text-lg font-semibold text-white">
                Connect with me
              </h6>
              <div className="flex justify-end items-center gap-4 mt-2">
                <a
                  href="https://github.com/RamprosadG"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <span
                    className="iconify"
                    data-icon="akar-icons:github-fill"
                    data-width="40"
                    data-height="40"
                    style={{ color: "white" }}
                  ></span>
                </a>
                <a
                  href="https://www.linkedin.com/in/ramprosad-gharami/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <span
                    className="iconify"
                    data-icon="logos:linkedin-icon"
                    data-width="40"
                    data-height="40"
                  ></span>
                </a>
                <a
                  href="https://www.facebook.com/ramprosad.gharami.568"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <span
                    className="iconify"
                    data-icon="akar-icons:facebook-fill"
                    data-width="40"
                    data-height="40"
                    style={{ color: "#1877F2" }}
                  ></span>
                </a>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
