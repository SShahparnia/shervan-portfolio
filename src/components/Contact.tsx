import React from "react";

const Contact = () => {
  // Basic contact form structure. Functionality (e.g., sending email) would require backend or third-party service.
  return (
    <section id="contact" className="py-20 bg-gray-850 text-white">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl font-bold text-center mb-12 text-lavender-400">
          Contact Me
        </h2>
        <div className="max-w-2xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
          <p className="text-lg text-center mb-6 text-gray-300">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of something great. Feel free to reach out!
          </p>
          {/* Contact Form Placeholder */}
          <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300"
              >
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="name"
                className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-lavender-500 focus:border-lavender-500 sm:text-sm text-white"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-lavender-500 focus:border-lavender-500 sm:text-sm text-white"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-300"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-lavender-500 focus:border-lavender-500 sm:text-sm text-white"
                placeholder="Your message..."
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-lavender-600 hover:bg-lavender-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lavender-500 focus:ring-offset-gray-800"
              >
                Send Message (Placeholder)
              </button>
            </div>
          </form>
          <p className="text-center mt-6 text-sm text-gray-400">
            Alternatively, you can reach me at:{" "}
            <a
              href="mailto:shervan.shahparnia@gmail.com"
              className="text-lavender-400 hover:text-lavender-300"
            >
              shervan.shahparnia@gmail.com
            </a>{" "}
            (Email from resume)
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
