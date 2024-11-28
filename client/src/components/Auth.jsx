import React, {useState} from 'react';
import Cookies from 'universal-cookie';
import axios from 'axios';

//import signinImage from '../assets/signup1.jpg';


const Auth = () => {
  const [isSignup, setisSignup] = useState(true);
  const handleChange = () => {}
  const switchMode = () => {
    setisSignup((prevIsSignup) => !prevIsSignup);
  }

  return (
    <div className="auth__form-container">
        <div className="auth__form-container_fields">
          <div className="auth__form-container_fields-content">
            <p>{isSignup ? 'Sign Up' : 'Sign In'}</p>
            <form onSubmit={() => {}}>
                {isSignup && (
                  <div className="auth__form-container_fields-content_input">
                    <label htmlFor="Full Name">Full Name</label>
                    <input
                      name="fullName"
                      type="text"
                      placeholder="Full Name"
                      onChange={handleChange}
                      autoFocus
                      required
                    />
                  </div>
                )}
                <div className="auth__form-container_fields-content_input">
                    <label htmlFor="username">Username</label>
                    <input
                      name="username"
                      type="text"
                      placeholder="Username"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  {isSignup && (
                  <div className="auth__form-container_fields-content_input">
                    <label htmlFor="phone#">Phone #</label>
                    <input
                      name="phone#"
                      type="number"
                      placeholder="+639"
                      onChange={handleChange}
                      required
                    />
                  </div>
                )}
                 {isSignup && (
                  <div className="auth__form-container_fields-content_input">
                    <label htmlFor="avatarURL">Avatar URL</label>
                    <input
                      name="avatarURL"
                      type="text"
                      placeholder="Avatar URL"
                      onChange={handleChange}
                      required
                    />
                  </div>
                )}
                <div className="auth__form-container_fields-content_input">
                    <label htmlFor="password">Password</label>
                    <input
                      name="password"
                      type="password"
                      placeholder="Password"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  {isSignup && (
                    <div className="auth__form-container_fields-content_input">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                      name="confirmPassword"
                      type="password"
                      placeholder="Confirm Password"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  )}
            </form>
                  <div className="auth__form-container_fields-account">
                    <p>
                      {isSignup ? "Already have an account?" : "Don't have an account?"}
                    </p>
                      <span onClick={switchMode}>
                      {isSignup ? 'Sign In' : 'Sign Up'}
                      </span>
                  </div>
          </div>
        </div>
        <div className="auth__form-container_image">
                  <img src="https://gifdb.com/images/high/welcome-greeting-1y2timm763pcwtl2.gif" alt="sign in" />  
        </div>
    </div>
  )
}

export default Auth
