import { useState, useEffect, useContext } from 'react';
import './Home.css'
import { Link } from 'react-router-dom';
import { UserContext } from '../components/UserContext';
export default function Home() {
    const { userInfo, setUserInfo }=useContext(UserContext);
    useEffect(() => {
        fetch('http://localhost:4000/profile', {
            credentials: 'include'
        }).then(response => {
            response.json().then(userInfo => {
                console.log(userInfo);
                setUserInfo(userInfo);
            });
        });
    }, [])
    function logout() {
        fetch('http://localhost:4000/logout', {
            credentials: 'include',
            method: 'POST'
        }).then(response => {
            if(response.ok) {
                setUserInfo(null);
            }
        })
    }
    const username = userInfo?.username;
    return (
        <div className="Home">
            <nav className="navbar">
                <a href="/" className="logo">BlogWave</a>
                <div className="nav-links">
                    <a href="/home">Home</a>
                    <a href="/explore">Explore</a>
                    <a href="/write">Write</a>
                    <a href="/about">About</a>
                    {username && (
                        <>
                            <Link to='/create' className="btn btn-primary">Create  New Post</Link>
                            <a onClick={logout}>Logout ({username})</a>
                        </>    
                    )}
                    {!username && (
                     <>
                            <Link to="/login" className="btn btn-primary">Sign In</Link>
                            <Link to="/register" className="btn btn-secondary">Sign Up</Link>
                    </>
                    )}
                </div>
            </nav>

            <main className="hero">
                <div className="hero-content">
                    <h1 className="hero-title">Share Your Stories with the World</h1>
                    <p className="hero-subtitle">Unleash your creativity and connect with readers through our intuitive blogging platform.</p>
                    <div className="cta-buttons">
                        <button className="btn btn-primary">Get Started</button>
                        <button className="btn" style={{ backgroundColor: '#e9ecef' }}>Learn More</button>
                    </div>
                </div>
                <div className="hero-image">
                    <div className="logo-placeholder">BlogWave</div>
                </div>
            </main>
            <section class="features-section">
        <h2 class="features-title">Key Features of BlogWave</h2>
        <div class="features-grid">
            <div class="feature-card">
                <svg class="feature-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                </svg>
                <h3 class="feature-title">Easy Content Creation</h3>
                <p class="feature-description">Intuitive editor with rich formatting options to bring your stories to life.</p>
            </div>
            <div class="feature-card">
                <svg class="feature-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
                <h3 class="feature-title">Community Engagement</h3>
                <p class="feature-description">Connect with readers through comments, likes, and sharing features.</p>
            </div>
            <div class="feature-card">
                <svg class="feature-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M18 20V10"/>
                    <path d="M12 20V4"/>
                    <path d="M6 20v-6"/>
                </svg>
                <h3 class="feature-title">Analytics Dashboard</h3>
                <p class="feature-description">Track your blog's performance with comprehensive insights and metrics.</p>
            </div>
        </div>
        <button class="btn btn-primary">Explore All Features</button>
            </section>
            <section class="trending-section">
        <h2 class="trending-title">Discover Trending Topics</h2>
        <div class="trending-grid">
            <article class="topic-card">
                <div class="topic-image">
                    <img src="/api/placeholder/400/200" alt="Tech Trends" />
                </div>
                <div class="topic-content">
                    <h3 class="topic-title">Latest Tech Trends</h3>
                    <p class="topic-description">Explore the cutting-edge technologies shaping our future.</p>
                    <a href="#" class="read-more">Read More</a>
                </div>
            </article>

            <article class="topic-card">
                <div class="topic-image">
                    <img src="/api/placeholder/400/200" alt="Travel Adventures" />
                </div>
                <div class="topic-content">
                    <h3 class="topic-title">Travel Adventures</h3>
                    <p class="topic-description">Embark on a journey through exotic destinations and cultures.</p>
                    <a href="#" class="read-more">Read More</a>
                </div>
            </article>

            <article class="topic-card">
                <div class="topic-image">
                    <img src="/api/placeholder/400/200" alt="Healthy Living" />
                </div>
                <div class="topic-content">
                    <h3 class="topic-title">Healthy Living Tips</h3>
                    <p class="topic-description">Discover ways to improve your wellness and lifestyle.</p>
                    <a href="#" class="read-more">Read More</a>
                </div>
            </article>
        </div>
        <button class="btn btn-primary">View All Posts</button>
            </section>

            <section class="newsletter-section">
        <h2 class="newsletter-title">Stay Updated with BlogWave</h2>
        <p class="newsletter-description">
            Subscribe to our newsletter for the latest blogging tips, trends, and exclusive content.
        </p>
        <form class="newsletter-form">
            <input 
                type="email" 
                class="newsletter-input" 
                placeholder="Enter your email"
                required
            />
            <button type="submit" class="newsletter-button">
                Subscribe
            </button>
        </form>
        <p class="privacy-notice">
            We respect your privacy. Unsubscribe at any time.
        </p>
    </section>
            
            <footer class="footer">
        <div class="footer-content">
            <div class="footer-section">
                <h3>BlogWave</h3>
                <p>Empowering bloggers worldwide to share their stories and connect with readers.</p>
            </div>

            <div class="footer-section">
                <h3>Quick Links</h3>
                <ul class="footer-links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Features</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>

            <div class="footer-section">
                <h3>Resources</h3>
                <ul class="footer-links">
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Help Center</a></li>
                    <li><a href="#">Community</a></li>
                    <li><a href="#">Webinars</a></li>
                </ul>
            </div>

            <div class="footer-section">
                <h3>Stay Connected</h3>
                <div class="social-links">
                    <a href="#" aria-label="Facebook">
                        <svg class="social-icon" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                        </svg>
                    </a>
                    <a href="#" aria-label="Instagram">
                        <svg class="social-icon" viewBox="0 0 24 24" fill="currentColor">
                            <rect x="2" y="2" width="20" height="20" rx="5"/>
                            <circle cx="12" cy="12" r="4"/>
                            <circle cx="17" cy="7" r="1"/>
                        </svg>
                    </a>
                    <a href="#" aria-label="Twitter">
                        <svg class="social-icon" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>

        <div class="footer-bottom">
            <p>© 2023 BlogWave. All rights reserved.</p>
        </div>
    </footer>
    </div>
    )
}
