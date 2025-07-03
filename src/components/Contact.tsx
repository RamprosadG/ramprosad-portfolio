import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    user_message: '',
  });
  const [toastVisible, setToastVisible] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // You would handle actual form submission here (e.g. API call)

    // Show toast message
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 3000);
    setFormData({ user_name: '', user_email: '', user_message: '' });
  };

  return (
    <section id="contact" className="py-16 flex justify-center items-center">
      <div className="max-w-7xl w-full px-4">
        <h5 className="text-2xl text-center font-semibold mb-8">Contact</h5>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Form Section */}
          <div className="w-full md:w-1/2">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <input
                  type="text"
                  name="user_name"
                  id="user-name"
                  value={formData.user_name}
                  onChange={handleChange}
                  placeholder=" "
                  required
                  className="peer w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <label
                  htmlFor="user-name"
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm transition-all"
                >
                  Name
                </label>
              </div>

              <div className="relative">
                <input
                  type="email"
                  name="user_email"
                  id="user-email"
                  value={formData.user_email}
                  onChange={handleChange}
                  placeholder=" "
                  required
                  className="peer w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <label
                  htmlFor="user-email"
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm transition-all"
                >
                  Email
                </label>
              </div>

              <div className="relative">
                <textarea
                  name="user_message"
                  id="user-message"
                  rows={5}
                  value={formData.user_message}
                  onChange={handleChange}
                  placeholder=" "
                  required
                  className="peer w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
                <label
                  htmlFor="user-message"
                  className="absolute left-4 top-4 text-gray-500 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm transition-all"
                >
                  Message
                </label>
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
              <div className="fixed bottom-5 right-5 bg-green-500 text-white px-4 py-3 rounded shadow-lg transition">
                Message sent
              </div>
            )}
          </div>

          {/* Contact Info Section */}
          <div className="w-full md:w-1/2 space-y-6 text-right">
            <div>
              <h6 className="text-lg font-semibold">Email</h6>
              <p className="text-gray-700">ram.bsmrstu@gmail.com</p>
            </div>
            <div>
              <h6 className="text-lg font-semibold">Phone</h6>
              <p className="text-gray-700">+8801768157889</p>
            </div>
            <div>
              <h6 className="text-lg font-semibold">Address</h6>
              <p className="text-gray-700">Rajoir, Madaridpur, Dhaka</p>
              <p className="text-gray-700">Bangladesh</p>
            </div>

            <div>
              <h6 className="text-lg font-semibold">Connect with me</h6>
              <div className="flex justify-end items-center gap-4 mt-2">
                <a
                  href="https://github.com/RamprosadG"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <span className="iconify" data-icon="akar-icons:github-fill" data-width="40" data-height="40"></span>
                </a>
                <a
                  href="https://www.linkedin.com/in/ramprosad-gharami/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <span className="iconify" data-icon="logos:linkedin-icon" data-width="40" data-height="40"></span>
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
                    style={{ color: '#1877F2' }}
                  ></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
