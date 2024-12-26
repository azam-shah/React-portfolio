import React from "react";
import data from "../../src/contactData.json";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

function Contact() {
  console.log("data", data);

  return (
    <div className="pt-36 pb-28 flex justify-center">
      <div className="w-[90%] max-w-5xl">
        {data.map((item) => (
          <div key={item.id}>

            {/* Header Section */}
            <div className="flex justify-center text-center mb-12">
              <div className="lg:w-[60%] w-[90%]">
                <h2 className="lg:text-7xl text-5xl font-semibold text-white mb-4">
                  {item.head}
                </h2>
                <p className="text-gray-300 lg:text-lg text-sm">{item.pera}</p>
              </div>
            </div>


            {/* Contact Info Section */}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">

              {/* Phone */}
              <div className="flex flex-col items-center border border-blue-600 bg-blue-950 p-6 rounded-lg shadow-lg">
                <FaPhoneAlt className="text-blue-500 text-5xl mb-4 border border-blue-400 p-2 rounded-full bg-white" />
                <p className="text-lg font-semibold text-white mb-2">
                  {item.title1}
                </p>
                <p className="text-gray-300 -mt-2">{item.no}</p>
              </div>

              {/* Email */}

              <div className="flex flex-col items-center border border-blue-600 bg-blue-950 p-6 rounded-lg shadow-lg">
                <FaEnvelope className="text-green-500 text-5xl mb-4 border border-green-500 p-3 rounded-full bg-white" />
                <p className="text-lg font-semibold text-white mb-2">
                  {item.title2}
                </p>
                <p className="text-gray-300 -mt-2">{item.email}</p>
              </div>

              {/* Address */}

              <div className="flex flex-col items-center border border-blue-600 bg-blue-950 p-6 rounded-lg shadow-lg">
                <FaMapMarkerAlt className="text-red-500 text-5xl mb-4 border border-red-500 p-3 rounded-full bg-white" />
                <p className="text-lg font-semibold text-white mb-2">
                  {item.title3}
                </p>
                <p className="text-gray-300 -mt-2">{item.add}</p>
              </div>
            </div>


            {/* Contact Form Section */}


            <div className="border border-blue-600 bg-blue-950 p-6 rounded-lg shadow-lg">

              <h1 className="lg:text-5xl text-3xl font-semibold text-white mb-6">
                {item.heading}
              </h1>

              <form className="mt-16" action="https://formspree.io/f/xovvjavq" method="POST">

                {/* Name */}
                <div className="flex justify-between lg:flex-row flex-col">

                <div className="lg:w-[45%] w-full">
                  <label
                    htmlFor="name"
                    className="block text-gray-300 mb-2 font-semibold"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="John Doe"
                    required
                    autoComplete="off"
                    className="w-full p-3 rounded-lg bg-gray-900 text-white"
                  />
                </div>

                {/* Email */}

                <div className="lg:w-[45%] w-full">
                  <label
                    htmlFor="email"
                    className="block text-gray-300 mb-2 font-semibold"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="contact.john@gmail.com"
                    required
                    autoComplete="off"
                    className="w-full p-3 rounded-lg bg-gray-900 text-white"
                  />
                </div>

                </div>
                {/* Phone */}

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-gray-300 mb-2 mt-4 font-semibold"
                  >
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="123-456-7890"
                    required
                    autoComplete="off"
                    className="w-full p-3 rounded-lg bg-gray-900 text-white"
                  />
                </div>

                {/* Message */}

                <div className="col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-gray-300 mb-2 mt-4 font-semibold"
                  >
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Type your message here..."
                    rows="10"
                    required
                    autoComplete="off"
                    className="w-full p-3 rounded-lg bg-gray-900 text-white"
                  ></textarea>
                </div>

                {/* Submit Button */}

                <div className="col-span-2 text-center">
                  <button
                    type="submit"
                    className=" mt-4 px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition duration-300"
                  >
                    Send Message
                  </button>
                </div>

              </form>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contact;
