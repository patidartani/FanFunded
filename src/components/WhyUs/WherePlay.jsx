import "./WherePlay.css"
import mapImg from "../../assets/images/map.png"
import punchBall from "../../assets/images/punch-ball.png"
import new2 from "../../assets/images/new-2.png"



const WherePlay = () => {
  return (
    <div className='WherePlay-main'>
      <div className="background-image">
        <img src={punchBall} alt="punchball" className="bg-left-imgs" />
        <img src={new2} alt="" className="bg-new" />
      </div>

      <div className="where">

        <div className="where-top">
          <h1>
            <span className="bg-bottom-right">Where Can I Play</span>
          </h1>
        </div>

        <div className="where-btm">
          <img src={mapImg} alt="" />
          {/* <img className="res-map-img" src="https://fanfunded.io/wp-content/themes/fanfunded-wp-theme/img/map-mobile.png" alt="" /> */}
          <div className="where-text">
            <h2>Your Ultimate Worldwide <br />
              Sports Destination</h2>
            <div className="where-btn">
              <a style={{ textDecoration: "none" }} href="" className="btn-where2 relative">
                <span className="text-center font-bold text-gradient ">GET STARTED</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WherePlay