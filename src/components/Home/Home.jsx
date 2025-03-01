import Navbar from "../../pages/Navbar/Navbar"
import Challenges from "../Challenges/Challenges"
import BankRoll from "./BankRoll"
import "./Home.css"
import Home1 from "./Home1"
// import HomeTwo from "./HomeTwo"


const Home = () => {
  return (
   <>
   <Navbar />
   <Home1 />
   {/* <HomeTwo /> */}
   <BankRoll/>
   <Challenges />
   </>
  )
}

export default Home