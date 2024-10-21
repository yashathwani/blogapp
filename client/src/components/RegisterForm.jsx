import React, { useState } from 'react';
import './RegisterForm.css';

export default function RegisterForm() {
    const [username, setusername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    async function Register(e) {
        e.preventDefault();
        setLoading(true);
        setError('');
        setSuccess('');

        try {
            const response = await fetch('http://localhost:4000/register', {
                method: 'POST',
                body: JSON.stringify({ username, password }),
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include'
            });
            if (response.ok) {
                setSuccess('Registration successful! Please check your email to verify your account.');
                // You might want to clear the form or redirect the user here
            } else {
                const errorData = await response.json();
                setError(errorData.message || 'Registration failed. Please try again.');
            }
        } catch (error) {
            setError(error.message || 'Registration failed. Please try again.');
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="register-page">
            <div className="register-form">
                <h1 className="form-title">Sign up for an account</h1>
                
                {error && <div className="error-message">{error}</div>}
                {success && <div className="success-message">{success}</div>}
                
                <form onSubmit={Register}>
                    <div className="form-group">
                        <label htmlFor="username" className="form-label">Your username</label>
                        <input 
                            id="username"
                            type="text"
                            className="form-input"
                            placeholder="Enter your username"
                            required
                            value={username}
                            onChange={(e) => setusername(e.target.value)}
                        />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input 
                            id="password"
                            type="password"
                            className="form-input"
                            placeholder="••••••••"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    
                    <div className="form-footer">
                        <label className="remember-me">
                            <input type="checkbox" />
                            <span>Remember me</span>
                        </label>
                        
                        <a href="#" className="forgot-password">Forgot password?</a>
                    </div>
                    
                    <button className="register-button" type="submit" disabled={loading}>
                        {loading ? 'Signing Up...' : 'Sign Up'}
                    </button>
                    
                    <p className="login-link">
                        Already have an account? <a href="#">Sign in</a>
                    </p>
                </form>
            </div>
        </div>
    );
}
