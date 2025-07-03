import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#012e2c] text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold mb-3">StudyLink BD</h2>
          <p className="text-sm leading-6">
            Your trusted platform for higher study consultancy in Bangladesh. Connect with expert advisors and plan your future globally.
          </p>
          <div className="flex space-x-4 mt-4 text-xl">
            <a href="#" className="hover:text-blue-400"><FaFacebookF /></a>
            <a href="#" className="hover:text-blue-400"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/consultants" className="hover:underline">Find Consultants</a></li>
            <li><a href="/faq" className="hover:underline">FAQ</a></li>
            <li><a href="/terms" className="hover:underline">Terms & Conditions</a></li>
            <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/contact" className="hover:underline">Contact Us</a></li>
            <li><a href="/help" className="hover:underline">Help Center</a></li>
            <li><a href="/student/dashboard" className="hover:underline">Student Portal</a></li>
            <li><a href="/consultant/dashboard" className="hover:underline">Consultant Portal</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <div className="flex items-center mb-2 text-sm">
            <FaMapMarkerAlt className="mr-2" />
            <span>Dhaka, Bangladesh</span>
          </div>
          <div className="flex items-center mb-2 text-sm">
            <FaPhoneAlt className="mr-2" />
            <span>+880 1234 567 890</span>
          </div>
          <div className="flex items-center text-sm">
            <FaEnvelope className="mr-2" />
            <span>support@studylinkbd.com</span>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-xs mt-10 border-t border-white/10 pt-4">
        © {new Date().getFullYear()} StudyLink BD. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
