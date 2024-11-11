import { Link } from "react-router-dom";

function About() {
    return (
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 min-h-screen text-white flex flex-col justify-center items-center p-6">
            <div className="container mx-auto px-6 py-12 text-center">
                <h1 className="text-4xl font-bold mb-6 animate-fadeInDown">
                    About Our Google Classroom Clone
                </h1>
                <p className="text-lg mb-8 animate-fadeInUp max-w-3xl mx-auto">
                    Welcome to our Google Classroom Clone, an interactive platform designed for teachers and students to connect, collaborate, and succeed. Built using the MERN stack (MongoDB, Express, React, Node.js), this application aims to streamline education and make learning accessible from anywhere.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Feature 1 */}
                    <div className="p-6 bg-white text-gray-800 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
                        <h3 className="text-xl font-semibold mb-2 text-indigo-600">Interactive Learning</h3>
                        <p>Engage with peers and instructors through interactive courses designed to foster collaborative learning.</p>
                    </div>

                    {/* Feature 2 */}
                    <div className="p-6 bg-white text-gray-800 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
                        <h3 className="text-xl font-semibold mb-2 text-indigo-600">Course Management</h3>
                        <p>Teachers can create and manage courses, assignments, and grading seamlessly.</p>
                    </div>

                    {/* Feature 3 */}
                    <div className="p-6 bg-white text-gray-800 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
                        <h3 className="text-xl font-semibold mb-2 text-indigo-600">Student Resources</h3>
                        <p>Access learning materials anytime, stay updated with notifications, and submit assignments easily.</p>
                    </div>
                </div>

                {/* Additional Information */}
                <div className="mt-10 space-y-6">
                    <p className="text-lg max-w-2xl mx-auto">
                        Designed with both students and teachers in mind, this platform allows for effortless management of educational content and streamlined communication.
                    </p>
                    <p className="text-lg max-w-2xl mx-auto">
                        Join us in transforming how education is experienced, making it accessible, interactive, and engaging for everyone, anywhere.
                    </p>
                </div>

                {/* Button to Home */}
                <div className="mt-10">
                    <Link
                        to="/"
                        className="text-white font-semibold py-3 px-8 bg-indigo-600 rounded-lg shadow-lg hover:bg-indigo-700 transition duration-300"
                    >
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default About;
