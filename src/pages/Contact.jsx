import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify';

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
            question: "How can I book a tour?",
            answer: "Booking a tour is simple! Just visit our website, choose your desired tour package, and follow the booking instructions. You can also contact us directly for assistance."
        },
        {
            question: "What is included in the tour packages?",
            answer: "Our tour packages typically include accommodation, transportation, guided tours, and some meals. Specific inclusions may vary by package, so please check the details for each tour."
        },
        {
            question: "Do you offer customized tours?",
            answer: "Yes, we offer customized tours tailored to your preferences. Contact us with your requirements, and we'll create a personalized itinerary just for you."
        },
        {
            question: "What is your cancellation policy?",
            answer: "Our cancellation policy varies depending on the tour package. Generally, you can cancel up to a certain number of days before the tour date for a full or partial refund. Please refer to the specific tour details for more information."
        }
    ];

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [responseMessage, setResponseMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setResponseMessage('');

        try {
            const response = await fetch('https://dashboard.jemmavalleytour.com/api/contacts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                toast.success('Message sent successfully!');

                setResponseMessage('Message sent successfully!');

                setFormData({ name: '', email: '', message: '' });
            } else {
                const errorData = await response.json();
                setResponseMessage(`Error: ${errorData.message}`);
                toast.error(`Error: ${errorData.message}`);
            }
        } catch (error) {
            console.error('Error:', error);
            setResponseMessage('An error occurred. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };
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
                            <p class="text-gray-700 mt-2"> +251912960059                            </p>
                            <p class="text-gray-700 mt-2"> +251983038998                          </p>


                        </div>
                        <div class="p-4 shadow-lg rounded-lg bg-green-100 hover:bg-green-200 transition-colors">
                            <h3 class="text-xl font-bold">Email Us</h3>
                            <p class="text-gray-700 mt-2">jemmavalleyethiopiatours@gmail.com <br />
                                jemmavalleytours@gmail.com
                            </p>
                        </div>
                        <div class="p-4 shadow-lg rounded-lg bg-green-100 hover:bg-green-200 transition-colors">
                            <h3 class="text-xl font-bold">Visit Us</h3>
                            <p class="text-gray-700 mt-2">
                                NB Business Center
                                8th floor
                                Mickey Leland St,
                                Addis Ababa,Ethiopia</p>
                        </div>
                    </div>
                </section>
                <div className='grid lg:grid-cols-2 sm:grid-cols-1 mx-10 gap-x-10 my-10'>
                    <section className="bg-gray-100 py-12 px-4">
                        <h2 className="text-2xl font-bold text-center">Send Us A Message</h2>
                        <form
                            onSubmit={handleSubmit}
                            className="max-w-2xl mx-auto mt-8 space-y-8"
                        >
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-gray-700 font-bold"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full mt-2 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-gray-700 font-bold"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full mt-2 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-gray-700 font-bold"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="w-full mt-2 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-green-700 text-white py-3 rounded-lg shadow-lg hover:bg-green-600 transition-colors"
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                        {responseMessage && (
                            <p className="text-center mt-4 font-bold text-green-700">
                                {responseMessage}
                            </p>
                        )}
                    </section>

                    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
                        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                            <div className="max-w-2xl mx-auto text-center">
                                <h2 className="text-2xl font-bold leading-tight text-black sm:text-2xl lg:text-3xl">
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
                          
                        </div>
                    </section>
                </div>




            </div>
            <ToastContainer />
        </div>
    )
}

export default Contact