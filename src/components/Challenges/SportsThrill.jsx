import "./SportsThrill.css"
import countImg from "../../assets/images/count.png"

const SportsThrill = () => {
  return (
    <div className="SportsThrill-main">
        <div className="SportsThrill">
                    
                    <div className="SportsThrill-top">
                    <h1 className="text-lg_big mb-4">
                    <span className="bg-bottom-right">
                              Unleash The Thrill Of Sports Entertainment
                    </span>
		</h1>
                    </div>

                    <div className="SportsThrill-mid">
                    <div className="ST1">
                               <img src={countImg} alt="" />
                               <div className="countt"> 
                               <h5>195+</h5>
                               <span>Countries Covered</span>
                               </div>
                    </div> 
                    <div className="ST1">
                    <img src={countImg} alt="" />

                              <div className="countt">
                              <h5>24/7</h5>
                              <span>Coverage</span>
                              </div>
                    </div>
                              <div className="ST1">
                               <img src={countImg} alt="" />

                              <div className="countt">
                              <h5>1000+</h5>
                              <span>Teams</span>
                              </div>
                    </div> 
                    </div>

                    <div className="SportsThrill-btm mt-5">
                              <div className="ST-left">
                                    <h5 className="real-time-data">Real Time  Data</h5>
                              </div>
                              <div className="ST-right">
                                        <div>
                                        <img src="https://fanfunded.io/wp-content/themes/fanfunded-wp-theme/img/ESPN.svg" alt="" />
                                        </div>
                                        <div>
                                        <img src="https://fanfunded.io/wp-content/themes/fanfunded-wp-theme/img/NBC-Sports-svg.png" alt="" />
                                        </div>
                                         <div>
                                                  <img src="https://fanfunded.io/wp-content/themes/fanfunded-wp-theme/img/CBS-Sports-svg.png" alt="" />
                                         </div>
                                         
                              </div>
                    </div>

        </div>
    </div>
  )
}

export default SportsThrill