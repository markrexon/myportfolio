import React from "react";
import page1 from "../../assets/page1.png";
import page2 from "../../assets/page2.png";

const Contact = () => {
    return (
        <div className="max-w-7xl   mx-auto flex flex-col md:flex-row items-start justify-center gap-8 bg-gray-100 p-8">
            {/* Left: Resume / PDF */}
            <div className="flex flex-col w-full md:w-1/2">
                <h1 className="text-2xl font-semibold mb-4 text-center md:text-left">
                    Resume
                </h1>
                <div className="grid grid-cols-2 gap-4">
                    <img src={page1} alt="Page 1" />
                    <img src={page2} alt="Page 2" />
                </div>

            </div>

            {/* Right: Contact Form */}
            <div className="bg-white shadow-lg rounded-lg p-8 w-full md:w-1/2">
                <h1 className="text-2xl font-semibold text-center mb-6">Contact Us</h1>

                <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col">
                        <label className="mb-2 font-medium">Full Name</label>
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="mb-2 font-medium">Email</label>
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>



                    <div className="flex flex-col md:col-span-2">
                        <label className="mb-2 font-medium">Message</label>
                        <textarea
                            rows="5"
                            placeholder="Your Message"
                            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        ></textarea>
                    </div>

                    <div className="md:col-span-2 text-center">
                        <button
                            type="submit"
                            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-md transition-colors"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
