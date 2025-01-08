import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div>
            <footer class="text-white px-8 py-6 bg-gray-800">
                <div class="container  max-w-full mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div class="mb-8 md:mb-0 w-full">
                        <h3 class="text-lg font-bold mb-4">Socials</h3>
                        <ul>
                            <li><a href='https://www.facebook.com/profile.php?id=61571236943896&mibextid=JRoKGi' class="hover:text-yellow-400">Facebook</a></li>
                            <li><a href='https://www.instagram.com/jemmavalleytours/profilecard/?igsh=MXAzMzFtOTZmNjV6aA==' to='about' class="hover:text-yellow-400">Instagram</a></li>
                            <li><a href='https://wa.me/message/KTEEXWJN4BMDA1' class="hover:text-yellow-400">WhatsApp</a></li>

                        </ul>
                    </div>

                    <div class="mb-8 md:mb-0 w-full">
                        <h3 class="text-lg font-bold mb-4">Links</h3>
                        <ul>
                            <li><Link to='/' class="hover:text-yellow-400">Home</Link></li>
                            <li><Link to='about' class="hover:text-yellow-400">About Us</Link></li>
                            <li><Link to='contact' class="hover:text-yellow-400">Contact Us</Link></li>
                            <li><Link to='blogs' class="hover:text-yellow-400">Blog</Link></li>
                            <li><Link to='packages' class="hover:text-yellow-400">Packages</Link></li>
                            <li><Link to='destinations' class="hover:text-yellow-400">Destinations</Link></li>
                        </ul>
                    </div>
                    <div className="mb-1 md:mb-0 w-full max-w-screen-sm mx-auto">
                        <h3 className="text-lg font-bold mb-4">Contact Us</h3>
                        <ul className="mb-4 space-y-2">
                            <p className="mb-2">
                                <a href="tel:+251912960059" className="hover:text-yellow-400">
                                    +251912960059
                                </a>
                            </p>
                            <p className="mb-2">
                                <a href="tel:+251983038998" className="hover:text-yellow-400">
                                    +251983038998
                                </a>
                            </p>
                            <p>
                                <a href="mailto:jemmavalleytours@gmail.com" className="hover:text-yellow-400">
                                    jemmavalley
                                    <wbr />
                                    tours@gmail.com
                                </a>
                            </p>
                            <p>
                                <a href="mailto:jemmavalleyethiopiatours@gmail.com" className="hover:text-yellow-400">
                                    jemmavalleyethiopia
                                    <wbr />
                                    tours@gmail.com
                                </a>
                            </p>
                        </ul>

                        <div className="mt-4 flex space-x-4">
                            <a href="#"><i className="fab fa-facebook fa-2x"></i></a>
                            <a href="#"><i className="fab fa-instagram fa-2x"></i></a>
                            <a href="mailto:calinscompagnies@calins.com"><i className="far fa-envelope fa-2x"></i></a>
                        </div>
                    </div>

                    <div class="mb-8 md:mb-0 w-full">
                        <h3 class="text-lg font-bold mb-4">Address</h3>
                        <p class="mb-2">NV Business Center 8th floor Mickey Leland St, Addis Ababa,Ethiopia</p>
                    </div>

                </div>
                <p class="text-center mt-1">&copy; 2024 Kasma Tech Solution - All rights reserved.</p>
            </footer>
        </div>
    )
}

export default Footer