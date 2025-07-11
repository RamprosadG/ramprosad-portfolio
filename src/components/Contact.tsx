import React, { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import {
  emailServiceId,
  emailTemplateId,
  emailPublicKey,
} from "../configs/dotenv";
import SocialLinks from "./SocialLinks";

type FormData = {
  email: string;
  subject: string;
  message: string;
};

const Contact: React.FC = () => {
  const [toastVisible, setToastVisible] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      await emailjs.send(emailServiceId, emailTemplateId, data, emailPublicKey);
      setToastVisible(true);
      reset();
      setTimeout(() => setToastVisible(false), 3000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="w-full text-white">
      <h2 className="text-xl md:text-2xl text-center font-semibold mb-10 text-white">
        Contact Me
      </h2>

      <div className="bg-gray-800 p-6 rounded-lg flex flex-col gap-10">
        {/* Form Section */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 w-full">
          <div className="flex w-full flex-col md:flex-row justify-between gap-4">
            {/* Email */}
            <div className="w-full">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-white"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^@]+@[^@]+\.[^@]+$/,
                    message: "Invalid email",
                  },
                })}
                className="w-full px-4 py-3 border border-cyan-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-700"
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Subject */}
            <div className="w-full">
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-white"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                {...register("subject", {
                  required: "Subject is required",
                })}
                className="w-full px-4 py-3 border border-cyan-700 rounded-md bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-700"
                placeholder="Enter subject"
              />
              {errors.subject && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.subject.message}
                </p>
              )}
            </div>
          </div>

          {/* Message */}
          <div className="w-full">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-white"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              {...register("message", {
                required: "Message is required",
              })}
              className="w-full px-4 py-3 border border-cyan-700 rounded-md bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-700"
              placeholder="Write your message..."
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-4 px-6 py-2 cursor-pointer bg-cyan-600 text-white rounded hover:bg-cyan-700 transition w-full justify-center flex items-center gap-2"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>

          {toastVisible && (
            <div className="fixed bottom-5 right-5 bg-cyan-600 text-white px-4 py-2 rounded shadow-lg">
              Message sent!
            </div>
          )}
        </form>

        {/* Social Icons */}
        <SocialLinks />

        {/* Contact Info */}
        <div className="w-full text-center space-y-1">
          <p className="text-white">Email: ram.bsmrstu@gmail.com</p>
          <p className="text-white">Phone: +8801768157889, +8801568984650</p>
          <p className="text-white">Address: Madaripur, Dhaka, Bangladesh</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
