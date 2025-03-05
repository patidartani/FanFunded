import { useState } from "react";
import "./Forgot.css"
import Navbar from "../../pages/Navbar/Navbar"
import Footer from "../../pages/Footer/Footer"
import { RiEyeLine, RiEyeOffLine } from "react-icons/ri";

const Forgot = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <Navbar />
      <div className="Forgot-main">
        <div className="Forgot-content">
          <form>
            <h5>Forgot Password</h5>
            <small>Please enter your email address.</small>
            <div className="forgot-ipt">
              <input type="text" name="email" placeholder="Email" />
            </div>
            <div className="forgot-ipt  f-password-container">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
              />
              <span
                className="f-eye-icon"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <RiEyeOffLine /> : <RiEyeLine />}
              </span>
            </div>
            <div className="reset-btn">
              <button>RESET PASSWORD</button>
            </div>
            <div className="f-new-one">
              <span>
                Remembered your password? <a href="/login">Sign In</a>
              </span>
            </div>
          </form>

        </div>
      </div>
      <Footer />
    </>
  )
}

export default Forgot