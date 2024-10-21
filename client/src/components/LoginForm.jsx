import React, { useState } from 'react';
import './LoginForm.css';
import {Navigate} from 'react-router-dom'
export default function LoginForm() {
    const [username, setusername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [redirect, setRedirect] = useState(false);
    async function Login(e) {
        e.preventDefault();
        setLoading(true);
        setError('');
        setSuccess('');

        try {
            const response = await fetch('http://localhost:4000/login', {
                method: 'POST',
                body: JSON.stringify({ username, password }),
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include'
            });
            if (response.ok) {
                setSuccess('Login successful!');
                setRedirect(true);
            } else {
                const errorData = await response.json();
                setError(errorData.message || 'Login failed. Please try again.');
            }
        } catch (error) {
            setError(error.message || 'Login failed. Please try again.');
        } finally {
            setLoading(false);
        }
    }
    if (redirect) {
        return <Navigate to={'/'}/>
    }

    return (
        <div className="register-page">
            <div className="register-form">
                <h1 className="form-title">Log in to your account</h1>
                
                {error && <div className="error-message">{error}</div>}
                {success && <div className="success-message">{success}</div>}
                
                <form onSubmit={Login}>
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
                        {loading ? 'Loading...' : 'Log In'}
                    </button>
                    
                    <p className="login-link">
                        Don't have an account? <a href="#">Sign Up</a>
                    </p>
                </form>
            </div>
        </div>
    );
}
