import { useState } from 'react';

function CreateCourse() {

  const [courseTitle, setCourseTitle] = useState('');
  const [courseDescription, setCourseDescription] = useState('');
  const [message, setMessage] = useState('');

  const handleCreateCourse = (e) => {
    e.preventDefault();

    if (!courseTitle || !courseDescription) {
      setMessage('Please fill in both fields.');
      return;
    }

    // Here you would send the course data to your backend to save it (e.g., MongoDB)
    // For now, we mock the behavior
    setMessage(`Course "${courseTitle}" created successfully!`);

    // Clear fields
    setCourseTitle('');
    setCourseDescription('');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center">Create a New Course</h1>
      
      <form onSubmit={handleCreateCourse} className="max-w-lg mx-auto mt-8 space-y-4">
        <div>
          <label className="block text-lg font-medium text-gray-700">Course Title</label>
          <input
            type="text"
            value={courseTitle}
            onChange={(e) => setCourseTitle(e.target.value)}
            className="w-full px-4 py-2 border rounded"
            placeholder="Enter course title"
          />
        </div>
        
        <div>
          <label className="block text-lg font-medium text-gray-700">Course Description</label>
          <textarea
            value={courseDescription}
            onChange={(e) => setCourseDescription(e.target.value)}
            className="w-full px-4 py-2 border rounded"
            placeholder="Enter course description"
            rows="4"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-blue-600 text-white rounded mt-4"
        >
          Create Course
        </button>
      </form>

      {message && (
        <div className="mt-4 text-center text-green-600">
          {message}
        </div>
      )}
    </div>
  );

}

export default CreateCourse