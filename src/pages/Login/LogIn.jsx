import { useState } from "react";
import "./Login.css";
import Navbar from "../../pages/Navbar/Navbar";
import { RiEyeLine, RiEyeOffLine } from "react-icons/ri";

const LogIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <Navbar />
      <div className="LogIn-main">
        <div className="Login-content">
          <form>
            <h5>Sign In</h5>
            <small>Please enter your details</small>
            <div className="f-ipt">
              <input type="text" name="email" placeholder="Email" />
            </div>
            <div className="f-ipt password-container">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
              />
              <span
                className="eye-icon"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <RiEyeOffLine /> : <RiEyeLine />}
              </span>
            </div>
            <div className="forget">
              <a href="/forget-password">Forgot Password?</a>
            </div>
            <div className="login-btn">
              <button>SIGN IN</button>
            </div>
            <div className="new-one">
              <span>
                New on our platform? <a href="/signup">Sign Up</a>
              </span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LogIn;
