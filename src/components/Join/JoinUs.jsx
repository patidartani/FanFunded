import React from 'react'
import "./JoinUs.css"
import TsHIRT from "../../assets/images/frame-t-shirt.png"

const JoinUs = () => {
  return (
    <div className='JoinUs-main'>
      <div className="bg-img">
        <img className='bg-rocket' src="https://fanfunded.io/wp-content/themes/fanfunded-wp-theme/img/3dicons.png" alt="" />
      </div>
          <div className="Join-us">

                 <div className="Join-top">
                    <img src={TsHIRT} alt="" />
                    <div className="join-text">
                    <h2>Join Our Community of <br /> Fans</h2>
                    <div className="join-btn">
                    <a style={{ textDecoration: "none" }} href="" className="btn-join relative">
                        <span className="text-center font-bold text-gradient ">JOIN DISCORD</span>
                    </a>
                    </div>
                    </div>
                  </div>

                  <div className="join-btm">
                     <div className="j-left">
                        <h6>stay up to date</h6>
                        <h4>Our Newsletter</h4>
                     </div>
                     <div className="j-right">
                         <form>
                             <img src="https://fanfunded.io/wp-content/themes/fanfunded-wp-theme/img/email-field1.svg" alt="" />
                              <div className='form-data'>
                              <input type="text" placeholder='Email'/>
                              <button>SUBMIT</button>
                              </div>
                         </form>
                     </div>
                  </div>

          </div>
    </div>
  )
}

export default JoinUs