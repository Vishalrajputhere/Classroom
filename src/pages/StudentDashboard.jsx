// src/pages/StudentDashboard.jsx

import { useState } from 'react';


function StudentDashboard() {
    const [courseId, setCourseId] = useState('');
    const [coursePassword, setCoursePassword] = useState('');
  
    const handleJoinCourse = (e) => {
      e.preventDefault();
      // Here you can call your backend to verify course ID and password
      console.log({ courseId, coursePassword });
      alert('Successfully joined the course!');
    };
  
    return (
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-semibold text-center">Join a Course</h2>
        <form onSubmit={handleJoinCourse} className="mt-4 max-w-sm mx-auto space-y-4">
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
          <button type="submit" className="w-full py-2 bg-green-500 text-white rounded">
            Join Course
          </button>
        </form>
      </div>
    );
}

export default StudentDashboard
