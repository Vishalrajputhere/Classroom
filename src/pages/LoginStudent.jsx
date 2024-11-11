// src/pages/LoginStudent.jsx

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function LoginStudent() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (email === 'student@example.com' && password === 'password') {
            sessionStorage.setItem('userType', 'student');
            navigate('/sdash');
        } else {
            alert('Invalid login credentials!');
        }
    };

    return (
        <div className="min-h-screen flex flex-col justify-center bg-blue-100">
            <div className="container mx-auto max-w-md p-8 bg-white shadow-lg rounded">
                <h2 className="text-2xl font-semibold text-center">Student Login</h2>
                <form onSubmit={handleLogin} className="mt-4 space-y-4">
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2 border rounded"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-2 border rounded"
                    />
                    <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded">
                        Login
                    </button>
                </form>
                <div className="text-center mt-4">
                    <p>New here? <Link to="/signup-student" className="text-blue-500 hover:underline">Sign Up as Student</Link></p>
                </div>
            </div>
        </div>
    );
}

export default LoginStudent;
