import { Routes, Route } from "react-router-dom"
import Home from "./components/Home/Home"
import LogIn from "./pages/Login/LogIn"
import SignUp from "./pages/Signup/SignUp"
import Faq from "./components/NavPages/Faq/Faq"
import Forgot from "./pages/Forgot-Password/Forgot"

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/forget-password" element={<Forgot />} />

      </Routes> 
    </>
  )
}

export default App