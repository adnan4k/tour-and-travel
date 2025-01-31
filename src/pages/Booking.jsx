import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

function Booking() {
    const location = useLocation();
    console.log(location,'here is location')
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        members: '',
        date: '',
        TourCode: location.state?.tourCode || '',
        });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Validation: Check if all fields are filled
        const { name, phone, email, members, date, TourCode } = formData;
        if (!name || !phone || !email || !members || !date || !TourCode) {
            toast.error("All fields are required!");
            return;
        }
    
        try {
            const response = await fetch('https://dashboard.jemmavalleytour.com/api/book', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
    
            if (response.ok) {
                // Handle successful response
                toast.success('Booking successful');
                resetForm();
            } else {
                // Handle error response
                toast.error('Booking failed');
            }
        } catch (error) {
            toast.error('Error: ' + error.message);
        }
    };
    
function resetForm() {
        setFormData({
            name: '',
            phone: '',
            email: '',
            members: '',
            days: '',
            date: '',
            TourCode:''
        });
}
    return (
        <div className='mb-10 flex flex-col w-full justify-center '>
            <div className="relative bg-gradient-to-r from-purple-900 to-indigo-800 py-24 font-[sans-serif]">
                {/* Background Image */}
                <div className="absolute inset-0 w-full">
                    <img
                        src="/assets/photos/tour.jpg"
                        alt="Background Image"
                        className="w-full h-full object-cover opacity-60"
                    />
                </div>

                {/* Content */}
                <div className="cursor-pointer relative max-w-screen-lg mx-auto px-8 z-10 text-center text-white">
                    {/* Title */}
                    <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-8">
                        Booking
                    </h1>

                    {/* Path (Center and Indicating "Home") */}
                    <div className="text-lg md:text-2xl font-semibold mb-12 bg-white text-indigo-800 py-4 px-6 rounded-full shadow-lg inline-block">
                        <Link to='/' className="inline">Home</Link>  → Book
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center p-12"></div>
            <div className="mx-auto flex justify-center w-full mx-4  bg-white">
                <form className='flex w-3/4 flex-col justify-center' onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="mb-5 w-full">
                            <label htmlFor="name" className="mb-3 block text-base font-medium text-[#07074D]">
                                Full Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Full Name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="phone" className="mb-3 block text-base font-medium text-[#07074D]">
                                Phone Number
                            </label>
                            <input
                                type="text"
                                name="phone"
                                id="phone"
                                placeholder="Enter your phone number"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="email" className="mb-3 block text-base font-medium text-[#07074D]">
                                Email Address
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="members" className="mb-3 block text-base font-medium text-[#07074D]">
                                Number of Team
                            </label>
                            <input
                                type="text"
                                name="members"
                                id="members"
                                placeholder="Enter Number of Members"
                                value={formData.members}
                                onChange={handleChange}
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="time" className="mb-3 block text-base font-medium text-[#07074D]">
                                Tour Code
                            </label>
                            <input
                                placeholder='enter Tour Code '
                                type="text"
                                name="TourCode"
                                id="TourCode"
                                value={formData.TourCode}
                                onChange={handleChange}
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>
                    
                        <div className="mb-5">
                            <label htmlFor="date" className="mb-3 block text-base font-medium text-[#07074D]">
                                Date
                            </label>
                            <input
                                type="date"
                                name="date"
                                id="date"
                                value={formData.date}
                                onChange={handleChange}
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>
                     
                   
                    
                    </div>
                    <div className='mx-auto w-1/2'>
                        <button
                            type="submit"
                            className="hover:shadow-form w-full rounded-md bg-[#56C596] py-3 px-8 text-center text-base font-semibold text-white outline-none"
                        >
                            Book
                        </button>
                    </div>
                </form>
            </div>
            <ToastContainer />

        </div>
    );
}

export default Booking;
