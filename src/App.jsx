// src/App.jsx

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/Home';
import LoginStudent from './pages/LoginStudent';
import LoginTeacher from './pages/LoginTeacher';
import StudentDashboard from './pages/StudentDashboard';
import TeacherDashboard from './pages/TeacherDashboard';
import Navbar from './pages/Navbar';
import About from './pages/About'; // Import the About page
import CreateCourse from './pages/CreateCourse'; // Import CreateCourse page
import SignupStudent from './pages/SignupStudent';
import SignupTeacher from './pages/SignupTeacher';
import StudentCourses from './pages/StudentCourses';
import ContactUs from './pages/ContactUs';

const userType = 'student'; // Hardcoded for now, later change based on user login state

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Navbar userType='' />
        <Home />
      </>
    ),
  },
  {
    path: '/slogin',
    element: (
      <>
        <Navbar userType='student' />
        <LoginStudent />
      </>
    ),
  },
  {
    path: '/tlogin',
    element: (
      <>
        <Navbar userType='teacher' />
        <LoginTeacher />
      </>
    ),
  },
  {
    path: '/sdash',
    element: (
      <>
        <Navbar userType="student" />
        <StudentDashboard />
      </>
    ),
  },
  {
    path: '/tdash',
    element: (
      <>
        <Navbar userType="teacher" />
        <TeacherDashboard />
      </>
    ),
  },
  {
    path: '/about',
    element: (
      <>
        <Navbar userType='' />
        <About />
      </>
    ),
  },
  {
    path: '/teacher/create-course',
    element: (
      <>
        <Navbar userType="teacher" />
        <CreateCourse />
      </>
    ),
  },
  {
    path:'/signup-student',
    element:(
      <>
      <Navbar userType='student' />
      <SignupStudent />
      </>
    )
  },
  {
    path:'/signup-teacher',
    element:(
      <>
      <Navbar userType='teacher' />
      <SignupTeacher />
      </>
    )
  },
  {
    path:'/student/courses',
    element:(
      <>
      <Navbar userType='student' />
      <StudentCourses />
      </>
    )
  },
  {
    path:'/contact',
    element:(
      <>
      <Navbar userType='' />
      <ContactUs />
      </>
    )
  },
]);

function App() {
  return( 
 <RouterProvider router={router} />
 );
}

export default App;
