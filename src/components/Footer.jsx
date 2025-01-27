import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <footer class="text-white px-8 py-6 bg-gray-800">
        <div class="container  max-w-full mx-auto grid grid-cols-2 md:grid-cols-5 gap-4">
        <div class="mb-8 md:mb-0 w-full">
            <h3 class="text-lg font-bold mb-4">Links</h3>
            <ul>
              <li>
                <Link to="/" class="hover:text-yellow-400">
                  Home
                </Link>
              </li>
              <li>
                <Link to="about" class="hover:text-yellow-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="contact" class="hover:text-yellow-400">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="blogs" class="hover:text-yellow-400">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="packages" class="hover:text-yellow-400">
                  Packages
                </Link>
              </li>
              <li>
                <Link to="destinations" class="hover:text-yellow-400">
                  Destinations
                </Link>
              </li>
            </ul>
          </div>
          <div className="mb-8 md:mb-0 w-full">
            <h3 className="text-lg font-bold mb-4">Socials</h3>
            <ul>
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=61571236943896&mibextid=JRoKGi"
                  className="flex items-center hover:text-yellow-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook className="mr-2" size={20} />
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/jemmavalleytours/profilecard/?igsh=MXAzMzFtOTZmNjV6aA=="
                  className="flex items-center hover:text-yellow-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="mr-2" size={20} />
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/message/KTEEXWJN4BMDA1"
                  className="flex items-center hover:text-yellow-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp className="mr-2" size={20} />
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          <div className="mb-1 md:mb-0 w-full col-span-2 md:col-span-1 max-w-screen-sm mx-auto">
            <h3 className="text-lg font-bold mb-4">Email</h3>
            <p>
              <a
                href="mailto:jemmavalleytours@gmail.com"
                className="hover:text-yellow-400"
              >
                jemmavalleytours@gmail.com
              </a>
            </p>
            <p>
              <a
                href="mailto:info@jemmavalleytour.com	"
                className="hover:text-yellow-400"
              >
                info@jemmavalleytour.com	
              </a>
            </p>
          </div>
          <div className="mb-1 md:mb-0 w-full max-w-screen-sm mx-auto">
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="mb-4 space-y-2">
              <div>
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
              </div>
            </ul>
          </div>
       

          <div class="mb-8 md:mb-0 w-full">
            <h3 class="text-lg font-bold mb-4">Address</h3>
            <p class="mb-2">
              NB Business Center 8th floor Mickey Leland St, Addis
              Ababa,Ethiopia
            </p>
          </div>
        </div>
        <p class="text-center mt-1">
  &copy; 2024 JemmaValleyTours - All rights reserved. Developed By 
  <a href="https://www.kasmasolution.com/" target="_blank" rel="noopener noreferrer" class="text-blue-500 mx-2 hover:underline">
    Kasma Tech Solution
  </a>
</p>
  
      </footer>
    </div>
  );
}

export default Footer;
