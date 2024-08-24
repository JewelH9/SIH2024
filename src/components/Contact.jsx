import React from "react";

function Contact() {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl font-bold mb-8 text-center">Contact Us</h2>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  type="text"
                  id="name"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  type="email"
                  id="email"
                  placeholder="Your Email"
                />
              </div>
            </div>

            <div className="mt-8">
              <label className="block text-gray-700 mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                id="message"
                rows="5"
                placeholder="Your Message"
              ></textarea>
            </div>

            <div className="mt-8 text-center">
              <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
