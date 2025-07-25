import React, { useRef, useState } from "react";
import "./Login.css";
import Logo from "../../assets/assets/logo.png";
import { login } from "../../firebase";
import { signUp } from "../../firebase";
import netflix_spinner from '../../assets/assets/netflix_spinner.gif';

const Login = () => {
  const [signState, setSignState] = useState("Sign In");

  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const user_auth = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (signState === "Sign In") {
      await login(email, password);
      setEmail('');
      setPassword('');
    } else {
      await signUp(name, email, password);
      setName('')
      setEmail('')
      setPassword('')
    }
    setLoading(false);
  };

  const signUpState = () => {
    setSignState("Sign Up");
  };
  const signInState = () => {
    setSignState("Sign In");
  };

  return (
    loading?<div className="loginSpinner">
      <img src={netflix_spinner} alt="" />
    </div>:
    <div className="login">
      <img src={Logo} alt="" className="login-logo" />
      <div className="login-form">
        <h1>{signState}</h1>
        <form>
          {signState === "Sign Up" ? (
            <input
              type="text"
              placeholder="Your Name:"
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
            />
          ) : (
            <></>
          )}

          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            type="email"
            placeholder="Email:"
          />
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            type="password"
            placeholder="Password:"
          />
          <button onClick={user_auth} type="submit">
            {signState}
          </button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {signState === "Sign In" ? (
            <p>
              New to Netflix? <span onClick={signUpState}>Sign Up Now</span>
            </p>
          ) : (
            <p>
              Already have account?{" "}
              <span onClick={signInState}>Sign In Now</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
