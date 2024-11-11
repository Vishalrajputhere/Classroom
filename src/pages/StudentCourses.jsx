// src/pages/StudentCourses.jsx

import { useState, useEffect } from 'react';

function StudentCourses() {
  const [courses, setCourses] = useState([]);

  // Fetch student courses (mocking data here, replace with actual API call)
  useEffect(() => {
    const fetchCourses = async () => {
      // Mock data: Replace with an actual API call if available
      const courseData = [
        { id: 1, title: 'Math 101', instructor: 'Dr. John Doe', schedule: 'Mon & Wed, 10:00-11:30 AM' },
        { id: 2, title: 'History of Art', instructor: 'Ms. Jane Smith', schedule: 'Tue & Thu, 2:00-3:30 PM' },
        { id: 3, title: 'Computer Science', instructor: 'Mr. Alan Brown', schedule: 'Mon, Wed & Fri, 1:00-2:00 PM' },
      ];
      setCourses(courseData);
    };

    fetchCourses();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen py-8 px-6">
      <h1 className="text-4xl font-bold text-center mb-8">My Courses</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div key={course.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
            <h2 className="text-2xl font-semibold text-gray-800">{course.title}</h2>
            <p className="text-gray-600">Instructor: {course.instructor}</p>
            <p className="text-gray-500">Schedule: {course.schedule}</p>
            <button
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              onClick={() => alert(`View course details for ${course.title}`)}
            >
              View Course
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StudentCourses;
