import './LoginForm.css'
export default function LoginForm() {
    return (
    <div class="form-container">
    <h1 class="form-title">Sign in to your account</h1>
    
    <form>
        <label class="form-label">Your email</label>
        <input 
            type="email" 
            class="form-input" 
            placeholder="name@company.com"
            required
        />
        
        <label class="form-label">Password</label>
        <input 
            type="password" 
            class="form-input" 
            placeholder="••••••••"
            required
        />
        
        <div class="form-footer">
            <label class="remember-me">
                <input type="checkbox"/>
                <span>Remember me</span>
            </label>
            
            <a href="#" class="forgot-password">Forgot password?</a>
        </div>
        
        <p class="signup-link">
            Don't have an account yet? <a href="#">Sign up</a>
        </p>
    </form>
    </div>
    )
}