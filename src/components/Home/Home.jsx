import Footer from "../../pages/Footer/Footer"
import Navbar from "../../pages/Navbar/Navbar"
import Challenges from "../Challenges/Challenges"
import SportsThrill from "../Challenges/SportsThrill"
import JoinUs from "../Join/JoinUs"
import Rewards from "../Rewards/Rewards"
import WherePlay from "../WhyUs/WherePlay"
import Whyus from "../WhyUs/Whyus"
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
   <SportsThrill />
   <Rewards />
   <WherePlay />
   <Whyus />
   <JoinUs />
   <Footer />
   </>
  )
}

export default Home