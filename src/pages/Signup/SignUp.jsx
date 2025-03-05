import { useState } from "react";
import "./SignUp.css";
import Navbar from "../../pages/Navbar/Navbar";
import { RiEyeLine, RiEyeOffLine } from "react-icons/ri";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <>
      <Navbar />
      <div className="Signup-main">
        <div className="Signup-content">
          <form>
            <h5>Sign Up</h5>
            <small>Please enter your details</small>
            <div className="sf-ipt">
              <input type="text" name="name" placeholder="Full Name" />
            </div>
            <div className="sf-ipt">
              <input type="text" name="email" placeholder="Email" />
            </div>
            <div className="sf-ipt">
              <input type="text" name="phone" placeholder="Phone Number" />
            </div>
            <div className="sf-ipt password-containers">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
              />
              <span
                className="eye-icons"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <RiEyeOffLine /> : <RiEyeLine />}
              </span>
            </div>
            <div className="sf-ipt password-containers">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm Password"
              />
              <span
                className="eye-icons"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <RiEyeOffLine /> : <RiEyeLine />}
              </span>
            </div>
            <div className="signup-btn">
              <button>SIGN UP</button>
            </div>
            <div className="new-ones">
              <span>
                Already have an account? <a href="/login">Sign In</a>
              </span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
