import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Subscription() {
    const [email, setEmail] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent default form submission

        // Replace this with your backend URL
        const backendURL = 'https://dashboard.jemmavalleytour.com/api/subscribe';

        try {
            const response = await fetch(backendURL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            if (response.ok) {
                toast.success('Thank you for subscribing!'); // Success toast
                setEmail(''); // Clear the input field
            } else {
                const errorData = await response.json();
                toast.error(errorData.message || 'Subscription failed. Please try again.'); // Error toast
            }
        } catch (error) {
            toast.error('An error occurred. Please try again later.'); // Error toast for network issues
        }
    };

    return (
        <div>
            <div className="bg-[#56C596]">
                <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
                    <div className="px-6 py-6 md:px-12 lg:flex lg:items-center lg:px-16">
                        <div className="lg:flex-1 xl:w-0">
                            <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                                Email Newsletter
                            </h2>
                            <p className="mt-3 max-w-3xl text-lg leading-6 text-white">
                                Sign up for our email newsletter to stay up to date.
                            </p>
                        </div>
                        <div className="mt-8 sm:w-full sm:max-w-md xl:mt-0 xl:ml-8">
                            <form className="sm:flex" onSubmit={handleSubmit}>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="w-full rounded-md border-white px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-0"
                                    placeholder="Enter your email"
                                />
                                <button
                                    type="submit"
                                    className="mt-3 flex w-full items-center justify-center rounded-md border border-transparent bg-[#FF6F61] px-5 py-3 text-base font-medium text-white shadow hover:bg-indigo-400 focus:outline-none focus:ring-0 sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
                                >
                                    Subscribe
                                </button>
                            </form>
                            <p className="mt-3 text-sm text-white">
                                We will never send any spam emails. Promise.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Toast container to display notifications */}
            <ToastContainer position="top-right" autoClose={5000} />
        </div>
    );
}

export default Subscription;
