import React, { useState } from 'react';
import './SignIn.css';
import fb from '../../Assests/fb.png';
import tw from '../../Assests/tw.png';
import gp from '../../Assests/gp.png';

const SignIn = () => {
  const handleRegister = (event) => {
    console.log(event.target);
  };

  const [checked, setChecked] = useState(false);
  const [toggle, setToggle] = useState('login');

  const logIn = () => {
    setToggle('login');
  };

  const register = () => {
    setToggle('register');
  };

  const handleCheck = () => {
    setChecked(!checked);
    console.log(checked);
  };

  return (
    <>
      <div className="hero">
        <div className="form-box">
          <div className="button-box">
            <div id="btn"></div>
            <button type="button" className="toggle-btn" onClick={logIn}>
              Log In
            </button>
            <button type="button" className="toggle-btn" onClick={register}>
              Register
            </button>
          </div>
          <div className="social-icons">
            <img src={fb} />
            <img src={tw} />
            <img src={gp} />
          </div>
          {toggle === 'login' && (
            <form id="login" className="input-group">
              <label>Username</label>
              <input
                type="text"
                className="input-field"
                placeholder="Username"
                required
              ></input>
              <label>Email</label>
              <input
                type="email"
                className="input-field"
                placeholder="Email"
                required
              ></input>
              <label>Password</label>
              <input
                type="text"
                className="input-field"
                placeholder="Enter Password"
                required
              ></input>

              <button type="submit" className="submit-btn">
                Log In
              </button>
            </form>
          )}
          {toggle === 'register' && (
            <form id="register" className="input-group">
              <label>Username</label>
              <input
                type="text"
                className="input-field"
                placeholder="Username"
                required
              ></input>
              <label>Email</label>
              <input
                type="email"
                className="input-field"
                placeholder="Email"
                required
              ></input>
              <label>Password</label>
              <input
                type="password"
                className="input-field"
                placeholder="Enter Password"
                required
              ></input>

              <label className="pro-check">I would like to be a Pro</label>
              <input
                type="checkbox"
                className="check-boxpro"
                onClick={handleCheck}
              ></input>

              {checked && (
                <div>
                  <input
                    type="text"
                    className="input-field"
                    placeholder="Business Name"
                    required
                  ></input>
                  <input
                    type="text"
                    className="input-field"
                    required
                    placeholder="Type of Business"
                  ></input>
                  <input
                    type="text"
                    className="input-field"
                    required
                    placeholder="Phone Number"
                  ></input>
                </div>
              )}
              <button type="submit" className="submit-btn">
                Register
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default SignIn;
