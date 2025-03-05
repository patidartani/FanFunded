import "./Rewards.css"
import golar1 from "../../assets/images/golar1.png"
import golar2 from "../../assets/images/golar2.png"
import golar3 from "../../assets/images/golar3.png"
import soccer1 from "../../assets/images/soccer1.png"
import soccer2 from "../../assets/images/soccer2.png"
import soccer3 from "../../assets/images/soccer3.png"
import soccer4 from "../../assets/images/soccer4.png"
import soccer5 from "../../assets/images/soccer5.png"





const Rewards = () => {
  return (
    <div className='Rewards-main'>
          <div className="Rewards">
                 
                 <div className="Rewards-top">
                 <h1 className="  font-bold mb-5 ">
                    <span className="line-right-box dubble-line">
                     Where Every Pick Sparks <br /> Excitement and Rewards
                    </span>
	               </h1>
                 </div>

                 <div className="Rewards-medium">
            <div className="reward-1">

            <img width="100%" height="300px" loading="lazy" alt="img" src={golar1} />
            <div className="r-text d-flex align-items-center justify-content-between flex-column">
              <h2 className="text-white font-bold">
                Worldwide <br />Soccer Picks</h2>
              <div className="btn-reward">
                <a style={{ textDecoration: "none" }} href="" className="btn-white3 relative">
                  <span className="text-center font-bold text-gradient ">SOCCER</span>
                </a>
              </div>
            </div>
            <img width="294" height="400" src={soccer1} className="img-boy" alt="" decoding="async" loading="lazy" />
          </div>
             
          <div className="reward-1">

<img width="100%" height="300px" loading="lazy" alt="img" src={golar2} />
<div className="r-text d-flex align-items-center justify-content-between flex-column">
  <h2 style={{marginLeft:"4vmax"}} className="text-white font-bold">
  Live NFL <br />Showdowns
  </h2>
  <div className="btn-reward">
    <a style={{ textDecoration: "none" }} href="" className="btn-white3 relative">
      <span className="text-center font-bold text-gradient ">FOOTBALL</span>
    </a>
  </div>
</div>
<img style={{marginLeft:"2vmax"}} width="294" height="370" src={soccer2} className="img-boy" alt="" decoding="async" loading="lazy" />
</div>
           
                 </div>

                 <div className="Reward-btm">
                     <div className="RB-1">
                     <img className="golar-img" src={golar3} alt="" />
                          <div className="text-r">
                            <h5>Skate to Victory <br /> with Your <br /> Selections</h5>
                            <div className="btn-rewards">
                            <a style={{ textDecoration: "none" }} href="" className="r-white-btn relative">
                              <span className="text-center font-bold text-gradient ">HOCKEY</span>
                            </a>
                            </div>
                          <div>
                          <img  className="soccer-img" src={soccer3} alt="" />
                          </div>
                          </div>
                     </div>
                     <div className="RB-1">
                     <img className="golar-img" src={golar3} alt="" />
                          <div className="text-r">
                            <h5>Hit a Home Run<br /> with Your <br /> Choices</h5>
                            <div className="btn-rewards">
                            <a style={{ textDecoration: "none" }} href="" className="r-white-btn relative">
                              <span className="text-center font-bold text-gradient ">BASEBALL</span>
                            </a>
                            </div>
                          <div>
                          <img  className="soccer-img" src={soccer4} alt="" />
                          </div>
                          </div>
                     </div>
                     <div className="RB-1">
                     <img className="golar-img" src={golar3} alt="" />
                          <div className="text-r">
                            <h5>One Pick Away <br /> with Your <br /> Dunk</h5>
                            <div className="btn-rewards">
                            <a style={{ textDecoration: "none" }} href="" className="r-white-btn relative">
                              <span className="text-center font-bold text-gradient ">BASKETBALL</span>
                            </a>
                            </div>
                          <div>
                          <img  className="soccer-img" src={soccer5} alt="" />
                          </div>
                          </div>
                     </div>
                 </div>

          </div>
    </div>
  )
}

export default Rewards