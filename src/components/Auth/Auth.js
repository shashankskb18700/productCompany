import React, { useState } from "react";
import { authService } from "../firebase/fbase";

import "./Auth.css";

const Auth = () => {
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [newUser, SetNewUser] = useState(false);
  const [error, setError] = useState("");

  const onChange = (event) => {
    const { name, value } = event.target;

    if (name === "email") SetEmail(value);
    else SetPassword(value);
  };

  const SignInSignUpGoogle = async () => {
    const auth = authService.getAuth();
    const provider = new authService.GoogleAuthProvider();

    const data = await authService.signInWithPopup(auth, provider);
  };

  const SignInSignUp = async () => {
    const auth = authService.getAuth();

    let data;
    try {
      if (newUser) {
        data = await authService.createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
      } else {
        data = await authService.signInWithEmailAndPassword(
          auth,
          email,
          password
        );
      }
    } catch (e) {
      // NotificationManager.info("Invalid credential");
      console.log(e);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const toggle = () => {
    SetNewUser(!newUser);
  };

  return (
    <div className="Auth">
      <div className="logo">
        THE <span className="logo-mid">PRODUCT</span> COMPANY
      </div>
      <div className="Auth-Form">
        <form onSubmit={onSubmit} className="Form">
          <div className="Auth-Input">
            <label className="labEmail">EMAIL</label>
            <input
              type="email"
              name="email"
              // placeholder="entre your email"
              value={email}
              required
              onChange={onChange}
            />
          </div>
          <div className="Auth-Input">
            <label className="labPass">PASSWORD</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={onChange}
              required
              // placeholder="entre your password"
            />
          </div>
          <br />
          <div className="auth-button-container">
            <button className="auth-button" onClick={SignInSignUpGoogle}>
              GOOGLE
            </button>

            <button className="auth-button" onClick={SignInSignUp}>
              {newUser ? "SIGN UP" : "SIGN IN"}
            </button>
          </div>
          <div onClick={toggle} className="user-type">
            {newUser
              ? "Already have a account ? Log in"
              : "New to THE PRODUCT COMPANY ? Create Account"}
          </div>
        </form>
      </div>
      {/* <NotificationContainer /> */}
    </div>
  );
};

export default Auth;
