import { Json } from 'sequelize/lib/utils';
import './RegisterForm.css';
import React,{useState} from 'react';
export default function RegisterForm() {
    
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    async function Register(e) {
        e.preventDefault()
        await fetch('http://localhost:4000/register', {
            method: 'POST',
            body: JSON.stringify({ userName, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )
    }
    return (
        <div className="form-container">
            <h1 className="form-title">Sign up to your account</h1>
            
            <form onSubmit={Register}>
                <label className="form-label">Your email</label>
                <input 
                    type="email" 
                    className="form-input" 
                    placeholder="name@company.com"
                    required
                    value={userName} 
                    onChange={(e) => setUserName(e.target.value)} 
                />
                
                <label className="form-label">Password</label>
                <input 
                    type="password" 
                    className="form-input" 
                    placeholder="••••••••"
                    required
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                />
                
                <div className="form-footer">
                    <label className="remember-me">
                        <input type="checkbox" checked={password !== ''} // Check if password is not empty
    onChange={(e) => setPassword(e.target.value)} // Update state on input change
                        />
                        <span>Remember me</span>
                    </label>
                    
                    <a href="#" className="forgot-password">Forgot password?</a>
                </div>
                
                <button className="register-button" type="submit">Sign Up</button>

                <p className="signup-link">
                    Don't have an account yet? <a href="#">Sign up</a>
                </p>
            </form>
        </div>
    );
}
