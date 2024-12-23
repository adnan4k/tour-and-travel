import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Contact() {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        if (openIndex === index) {
            setOpenIndex(null); // Close the answer if it's already open
        } else {
            setOpenIndex(index); // Open the clicked question's answer
        }
    }
    // Data for questions and answers
    const faqs = [
        {
            question: "How can I get started?",
            answer: "Getting started is easy! Sign up for an account, and you'll have access to our platform's features. No credit card required for the initial signup."
        },
        {
            question: "What is the pricing structure?",
            answer: "Our pricing structure is flexible. We offer both free and paid plans. You can choose the one that suits your needs and budget."
        },
        {
            question: "What kind of support do you provide?",
            answer: "We offer comprehensive customer support. You can reach out to our support team through various channels, including email, chat, and a knowledge base."
        },
        {
            question: "Can I cancel my subscription anytime?",
            answer: "Yes, you can cancel your subscription at any time without any hidden fees. We believe in providing a hassle-free experience for our users."
        }
    ];
    return (
        <div>
            <div class="bg-white">
                <div className="relative bg-gradient-to-r from-purple-900 to-indigo-800 py-24 font-[sans-serif]">
                    {/* Background Image */}
                    <div className="absolute inset-0">
                        <img
                            src="/assets/photos/contact.jpg"
                            alt="Background Image"
                            className="w-full h-full object-cover opacity-60"
                        />
                    </div>

                    {/* Content */}
                    <div className="cursor-pointer relative max-w-screen-lg mx-auto px-8 z-10 text-center text-white">
                        {/* Title */}
                        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-8">
                            Our Contact
                        </h1>

                        {/* Path (Center and Indicating "Home") */}
                        <div className="text-lg md:text-2xl font-semibold mb-12 bg-white text-indigo-800 py-4 px-6 rounded-full shadow-lg inline-block">
                            <Link to='/' className="inline">Home</Link>  → Contact
                        </div>
                    </div>
                </div>
                <section class="text-center py-12 px-4">
                    <h2 class="text-2xl font-bold">Get In Touch</h2>
                    <p class="mt-4 text-gray-700 max-w-2xl mx-auto">We are here to help you. Reach out to us via any of the following methods.</p>
                    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8 animate-fadeIn">
                        <div class="p-4 shadow-lg rounded-lg bg-green-100 hover:bg-green-200 transition-colors">
                            <h3 class="text-xl font-bold">Call Us</h3>
                            <p class="text-gray-700 mt-2">+1 123 456 7890</p>
                        </div>
                        <div class="p-4 shadow-lg rounded-lg bg-green-100 hover:bg-green-200 transition-colors">
                            <h3 class="text-xl font-bold">Email Us</h3>
                            <p class="text-gray-700 mt-2">contact@wisedoctors.com</p>
                        </div>
                        <div class="p-4 shadow-lg rounded-lg bg-green-100 hover:bg-green-200 transition-colors">
                            <h3 class="text-xl font-bold">Visit Us</h3>
                            <p class="text-gray-700 mt-2">123 Health St, Wellness City</p>
                        </div>
                    </div>
                </section>
                <section class="bg-gray-100 py-12 px-4">
                    <h2 class="text-2xl font-bold text-center">Send Us A Message</h2>
                    <form class="max-w-2xl mx-auto mt-8 space-y-8">
                        <div>
                            <label htmlFor="name" class="block text-gray-700 font-bold">Name</label>
                            <input type="text" id="name" class="w-full mt-2 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition" />
                        </div>
                        <div>
                            <label htmlFor="email" class="block text-gray-700 font-bold">Email</label>
                            <input type="email" id="email" class="w-full mt-2 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition" />
                        </div>
                        <div>
                            <label htmlFor="message" class="block text-gray-700 font-bold">Message</label>
                            <textarea id="message" rows="5" class="w-full mt-2 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition"></textarea>
                        </div>
                        <button type="submit" class="w-full bg-green-700 text-white py-3 rounded-lg shadow-lg hover:bg-green-600 transition-colors">Send Message</button>
                    </form>
                </section>

                <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
                    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                        <div className="max-w-2xl mx-auto text-center">
                            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                                Explore Common Questions
                            </h2>
                        </div>
                        <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
                            {faqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50"
                                >
                                    <button
                                        type="button"
                                        className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                                        onClick={() => handleToggle(index)}
                                    >
                                        <span className="flex text-lg font-semibold text-black">{faq.question}</span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            className={`w-6 h-6 text-gray-400 transform transition-transform ${openIndex === index ? 'rotate-180' : ''
                                                }`}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M19 9l-7 7-7-7"
                                            ></path>
                                        </svg>
                                    </button>
                                    {openIndex === index && (
                                        <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                                            <p>{faq.answer}</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                        <p className="text-center text-gray-600 text-base mt-9">
                            Still have questions?
                            <span className="cursor-pointer font-medium text-tertiary transition-all duration-200 hover:text-tertiary focus:text-tertiary hover-underline">
                                Contact our support
                            </span>
                        </p>
                    </div>
                </section>


            </div>
        </div>
    )
}

export default Contact