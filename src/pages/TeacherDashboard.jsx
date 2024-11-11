// src/pages/TeacherDashboard.jsx

import  { useState } from 'react';


function TeacherDashboard() {
    const [courseName, setCourseName] = useState('');
    const [courseId, setCourseId] = useState('');
    const [coursePassword, setCoursePassword] = useState('');
  
    const handleCreateCourse = (e) => {
      e.preventDefault();
      // Here you can send the course data to the backend to save it
      console.log({ courseName, courseId, coursePassword });
      alert('Course Created!');
    };
  
    return (
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-semibold text-center">Create a New Course</h2>
        <form onSubmit={handleCreateCourse} className="mt-4 max-w-lg mx-auto space-y-4">
          <input
            type="text"
            placeholder="Course Name"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
            className="w-full px-4 py-2 border rounded"
          />
          <input
            type="text"
            placeholder="Course ID"
            value={courseId}
            onChange={(e) => setCourseId(e.target.value)}
            className="w-full px-4 py-2 border rounded"
          />
          <input
            type="password"
            placeholder="Course Password"
            value={coursePassword}
            onChange={(e) => setCoursePassword(e.target.value)}
            className="w-full px-4 py-2 border rounded"
          />
          <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded">
            Create Course
          </button>
        </form>
      </div>
    );
}

export default TeacherDashboard
