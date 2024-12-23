import React from 'react'
import { Link } from 'react-router-dom'

function Booking() {
    return (
     <div>
         <div className="relative bg-gradient-to-r from-purple-900 to-indigo-800 py-24 font-[sans-serif]">
                {/* Background Image */}
                <div className="absolute inset-0">
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
            <div class="flex items-center justify-center p-12">
           
           {/* <!-- Author: FormBold Team --> */}
           <div class="mx-auto w-full max-w-[550px] bg-white">
               <form>
                   <div class="mb-5">
                       <label for="name" class="mb-3 block text-base font-medium text-[#07074D]">
                           Full Name
                       </label>
                       <input type="text" name="name" id="name" placeholder="Full Name"
                           class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                   </div>
                   <div class="mb-5">
                       <label for="phone" class="mb-3 block text-base font-medium text-[#07074D]">
                           Phone Number
                       </label>
                       <input type="text" name="phone" id="phone" placeholder="Enter your phone number"
                           class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                   </div>
                   <div class="mb-5">
                       <label for="email" class="mb-3 block text-base font-medium text-[#07074D]">
                           Email Address
                       </label>
                       <input type="email" name="email" id="email" placeholder="Enter your email"
                           class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                   </div>
                   <div class="mb-5">
                       <label for="phone" class="mb-3 block text-base font-medium text-[#07074D]">
                           Number of Members
                       </label>
                       <input type="text" name="members" id="phone" placeholder="Enter Number of Members"
                           class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                   </div>
                   <div class="mb-5">
                       <label for="email" class="mb-3 block text-base font-medium text-[#07074D]">
                           Place
                       </label>
                       <input type="place" name="place" id="email" placeholder="Enter Place You Want To Visit"
                           class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                   </div>
                   <div class="mb-5">
                       <label for="email" class="mb-3 block text-base font-medium text-[#07074D]">
                           Days
                       </label>
                       <input type="text" name="days" id="email" placeholder="Enter For How Many Days You Want To Visit"
                           class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                   </div>
                   <div class="-mx-3 flex flex-wrap">
                       <div class="w-full px-3 sm:w-1/2">
                           <div class="mb-5">
                               <label for="date" class="mb-3 block text-base font-medium text-[#07074D]">
                                   Date
                               </label>
                               <input type="date" name="date" id="date"
                                   class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                           </div>
                       </div>
                       <div class="w-full px-3 sm:w-1/2">
                           <div class="mb-5">
                               <label for="time" class="mb-3 block text-base font-medium text-[#07074D]">
                                   Time
                               </label>
                               <input type="time" name="time" id="time"
                                   class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                           </div>
                       </div>
                   </div>



                   <div class="mb-5 pt-3">
                       <label class="mb-5 block text-base font-semibold text-[#07074D] sm:text-xl">
                           Address Details
                       </label>
                       <div class="-mx-3 flex flex-wrap">
                           <div class="w-full px-3 sm:w-1/2">
                               <div class="mb-5">
                                   <input type="text" name="area" id="area" placeholder="Enter area"
                                       class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                               </div>
                           </div>
                           <div class="w-full px-3 sm:w-1/2">
                               <div class="mb-5">
                                   <input type="text" name="city" id="city" placeholder="Enter city"
                                       class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                               </div>
                           </div>
                           <div class="w-full px-3 sm:w-1/2">
                               <div class="mb-5">
                                   <input type="text" name="state" id="state" placeholder="Enter state"
                                       class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                               </div>
                           </div>
                           <div class="w-full px-3 sm:w-1/2">
                               <div class="mb-5">
                                   <input type="text" name="post-code" id="post-code" placeholder="Post Code"
                                       class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                               </div>
                           </div>
                       </div>
                   </div>

                   <div>
                       <button
                           class="hover:shadow-form w-full rounded-md bg-[#56C596] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                           Book
                       </button>
                   </div>
               </form>
           </div>
       </div>
     </div>
     )
}

export default Booking