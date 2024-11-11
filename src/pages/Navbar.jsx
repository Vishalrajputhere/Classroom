// src/components/Navbar.jsx

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
const Navbar = ({ userType, logout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const navItemClass = (path) =>
    `px-3 py-2 rounded-md text-sm font-medium ${
      location.pathname === path
        ? "bg-blue-700 text-white"
        : "hover:bg-blue-700 text-white"
    }`;

  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex items-center justify-between w-full">
            <Link to="/" className="text-2xl font-bold">
              Classroom
            </Link>
            <div className="hidden sm:block">
              <div className="flex space-x-4">
                {/* Conditional Links */}
                {userType === "student" && (
                  <>
                    <Link to="/sdash" className={navItemClass("/sdash")}>
                      Student Dashboard
                    </Link>
                    <Link
                      to="/student/courses"
                      className={navItemClass("/student/courses")}
                    >
                      Courses
                    </Link>
                  </>
                )}
                {userType === "teacher" && (
                  <>
                    <Link to="/tdash" className={navItemClass("/tdash")}>
                      Teacher Dashboard
                    </Link>
                    <Link
                      to="/teacher/create-course"
                      className={navItemClass("/teacher/create-course")}
                    >
                      Create Course
                    </Link>
                  </>
                )}
                {(!userType || userType === "guest") && (
                  <>
                    <Link to="/about" className={navItemClass("/about")}>
                      About
                    </Link>
                    <Link to="/contact" className={navItemClass("/contact")}>
                      Contact Us
                    </Link>
                  </>
                )}
                {userType && (
                  <button
                    onClick={logout}
                    className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-red-500"
                  >
                    Logout
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  userType: PropTypes.string.isRequired,
  logout: PropTypes.func.isRequired,
};

export default Navbar;
