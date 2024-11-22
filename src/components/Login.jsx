import { useState } from "react";
import "./Login.css";

function Login() {
    const [showLoginForm, setShowLoginForm] = useState(false);  // Default to showing landing page
    const [showSignUpForm, setShowSignUpForm] = useState(false);

    const handleLoginClick = () => {
        setShowLoginForm(true);
        setShowSignUpForm(false);  // Hide sign-up form if login is clicked
    };

    const handleSignUpClick = () => {
        setShowSignUpForm(true);
        setShowLoginForm(false);  // Hide login form if sign-up is clicked
    };

    return (
        <div className={`container ${showLoginForm || showSignUpForm ? "hide-background" : ""}`}>
            {/* Landing Page */}
            {!showLoginForm && !showSignUpForm ? (
                <div className="container-1">
                    <div className="cont">
                        <h1 className="logo">Spotify</h1>
                        <h2>Millions of songs.</h2>
                        <h2>Free on Spotify.</h2>
                        <button className="login" onClick={handleLoginClick}>
                            Login
                        </button>
                        <p>
                            New to Spotify? <a href="#" onClick={handleSignUpClick}>Sign up free</a>
                        </p>
                    </div>
                </div>
            ) : showLoginForm ? (
                // Login Form
                <div className="login-page">
                    <h1 className="logo">Log in to Spotify</h1>
                    <div className="buttons">
                        <button className="btn">Continue with Google</button>
                        <button className="btn">Continue with Phone Number</button>
                    </div>
                    <hr />
                    <div className="credentials-section">
                        <div className="input-field">
                            <label htmlFor="email">Email or Username</label>
                            <input type="text" id="email" placeholder="Enter your email" />
                        </div>
                        <div className="input-field">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" placeholder="Enter your password" />
                        </div>
                        <button className="login-button">Log In</button>
                        <p className="forgot-password">Forgot your password?</p>
                    </div>
                    <p className="signup">
                        New to Spotify? <a href="#" onClick={handleSignUpClick}>Sign up free</a>
                    </p>
                </div>
            ) : (
                // Sign Up Form
                <div className="signup-page">
                    <h1 className="logo">Sign up to Spotify</h1>
                    <div className="buttons">
                        <button className="btn">Continue with Google</button>
                        <button className="btn">Continue with Phone Number</button>
                    </div>
                    <hr />
                    <div className="credentials-section">
                        <div className="input-field">
                            <label htmlFor="email">Email or Username</label>
                            <input type="text" id="email" placeholder="Enter your email" />
                        </div>
                        <div className="input-field">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" placeholder="Enter your password" />
                        </div>
                        <div className="input-field">
                            <label htmlFor="confirm-password">Confirm Password</label>
                            <input type="password" id="confirm-password" placeholder="Confirm your password" />
                        </div>
                        <button className="signup-button">Sign Up</button>
                        <p className="forgot-password">Forgot your password?</p>
                    </div>
                    <p className="signup">
                        Already have an account? <a href="#" onClick={handleLoginClick}>Log in</a>
                    </p>
                </div>
            )}
        </div>
    );
}

export default Login;
