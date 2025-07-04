import React, { useState } from "react";

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
    <div className="py-16 flex justify-center items-center bg-[#0f172a] text-gray-300">
      <div className="max-w-7xl w-full px-4">
        <h5 className="text-3xl text-center font-semibold mb-10 text-white">
          Contact
        </h5>

        <div className="flex flex-col md:flex-row gap-10">
          {/* Form Section */}
          <div className="w-full md:w-1/2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
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

              <div>
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
                  placeholder="Enter your name"
                />
              </div>

              <div>
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
                className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition inline-flex items-center gap-2"
              >
                Submit
                <i className="ri-arrow-right-up-line"></i>
              </button>
            </form>

            {toastVisible && (
              <div className="fixed bottom-5 right-5 bg-green-600 text-white px-4 py-3 rounded shadow-lg">
                Message sent
              </div>
            )}
          </div>

          {/* Contact Info Section */}
          <div className="w-full md:w-1/2 space-y-6 text-right">
            <div>
              <h6 className="text-lg font-semibold text-white">Email</h6>
              <p className="text-gray-400">ram.bsmrstu@gmail.com</p>
            </div>
            <div>
              <h6 className="text-lg font-semibold text-white">Phone</h6>
              <p className="text-gray-400">+8801768157889</p>
            </div>
            <div>
              <h6 className="text-lg font-semibold text-white">Address</h6>
              <p className="text-gray-400">Rajoir, Madaridpur, Dhaka</p>
              <p className="text-gray-400">Bangladesh</p>
            </div>

            <div>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
