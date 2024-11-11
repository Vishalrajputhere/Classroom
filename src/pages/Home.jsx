import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChalkboardTeacher, faUsers, faLaptop } from '@fortawesome/free-solid-svg-icons';

function Home() {
    return (
        <div className="bg-gradient-to-r from-blue-700 to-teal-500 min-h-screen text-white flex flex-col">
            {/* Hero Section */}
            <div className="container mx-auto px-6 py-16 text-center">
                <h1 className="text-5xl font-bold mb-4 animate__animated animate__fadeInDown">
                    Welcome to Your Classroom
                </h1>
                <p className="text-xl mb-8 animate__animated animate__fadeInUp animate__delay-1s">
                    A platform for students and teachers to connect, learn, and grow.
                </p>

                {/* Call to Action Buttons */}
                <div className="space-x-6">
                    <Link
                        to="/slogin"
                        className="inline-block py-3 px-6 bg-blue-600 text-lg font-semibold rounded-lg shadow-lg transition transform hover:-translate-y-1 hover:bg-blue-700"
                    >
                        Login as Student
                    </Link>
                    <Link
                        to="/tlogin"
                        className="inline-block py-3 px-6 bg-green-600 text-lg font-semibold rounded-lg shadow-lg transition transform hover:-translate-y-1 hover:bg-green-700"
                    >
                        Login as Teacher
                    </Link>
                </div>
            </div>

            {/* Features Section */}
            <div className="container mx-auto px-6 py-20">
                <h2 className="text-4xl font-semibold text-center text-white mb-10 animate__animated animate__fadeIn">
                    Why Choose Us?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Feature 1 */}
                    <div className="p-8 bg-white rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
                        <div className="text-6xl text-blue-600 mb-4">
                            <FontAwesomeIcon icon={faChalkboardTeacher} />
                        </div>
                        <h3 className="text-2xl font-semibold mb-3 text-gray-900">For Teachers</h3>
                        <p className="text-gray-700">
                            Create and manage courses with ease. Connect with students in real-time and track their progress effectively.
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="p-8 bg-white rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
                        <div className="text-6xl text-green-600 mb-4">
                            <FontAwesomeIcon icon={faUsers} />
                        </div>
                        <h3 className="text-2xl font-semibold mb-3 text-gray-900">For Students</h3>
                        <p className="text-gray-700">
                            Access your courses, join classes with unique IDs, and collaborate with peers for a better learning experience.
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="p-8 bg-white rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
                        <div className="text-6xl text-purple-600 mb-4">
                            <FontAwesomeIcon icon={faLaptop} />
                        </div>
                        <h3 className="text-2xl font-semibold mb-3 text-gray-900">Learn Anywhere</h3>
                        <p className="text-gray-700">
                            Access your classes from anywhere, on any device, and at any time, making learning flexible and convenient.
                        </p>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-blue-800 py-8">
                <div className="container mx-auto text-center text-gray-100">
                    <p className="text-lg">&copy; 2024 ClassroomApp | All Rights Reserved</p>
                    <div className="mt-4">
                        <Link to="/about" className="text-teal-200 hover:underline mr-4">
                            About Us
                        </Link>
                        <Link to="/contact" className="text-teal-200 hover:underline">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Home;
