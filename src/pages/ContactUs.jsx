// src/pages/ContactUs.jsx

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

function ContactUs() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message!");
    // Process form data here
  };

  return (
    <div className="bg-gradient-to-r from-green-400 to-blue-500 min-h-screen flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold text-white mb-8 text-center">Contact Us</h1>
      
      {/* Contact Form */}
      <div className="flex flex-col md:flex-row w-full md:w-3/4 lg:w-2/3 bg-white shadow-lg rounded-lg overflow-hidden">
        
        {/* Form Section */}
        <div className="md:w-2/3 p-6 flex flex-col justify-center">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="peer w-full border-b-2 border-gray-300 text-gray-800 bg-transparent focus:outline-none focus:border-blue-500"
              />
              <label className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all duration-200 transform peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm">
                Name
              </label>
            </div>
            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="peer w-full border-b-2 border-gray-300 text-gray-800 bg-transparent focus:outline-none focus:border-blue-500"
              />
              <label className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all duration-200 transform peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm">
                Email
              </label>
            </div>
            <div className="relative">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="peer w-full border-b-2 border-gray-300 text-gray-800 bg-transparent focus:outline-none focus:border-blue-500 h-24 resize-none"
              />
              <label className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all duration-200 transform peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm">
                Message
              </label>
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-200"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info and Map Section */}
        <div className="md:w-1/3 p-6 bg-blue-500 text-white flex flex-col justify-center items-center space-y-6">
          <div className="text-center space-y-2">
            <FontAwesomeIcon icon={faPhone} className="text-xl" />
            <p>+123 456 7890</p>
          </div>
          <div className="text-center space-y-2">
            <FontAwesomeIcon icon={faEnvelope} className="text-xl" />
            <p>info@example.com</p>
          </div>
          <div className="text-center space-y-2">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-xl" />
            <p>1234 Street Name, City, State</p>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
