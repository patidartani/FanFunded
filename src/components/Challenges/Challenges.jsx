import "./Challanges.css";
import LeftImg from "../../assets/images/football-position-left.png";
import LeftLineImg from "../../assets/images/v-line1.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Challenges = () => {
  return (
    <div className='Challenges'>
           <div className="background-images">
          <img src={LeftLineImg} alt="Left Line" className="bg-left-line" />
          <img src={LeftImg} alt="Football Position" className="bg-left-img" />
        </div>
      <div className="challenges-page">       

        <div className="challange-top">
          <h1 className="text-white">
            <span className="line-right-box2">Choose Your Challenge</span>
          </h1>
        </div>

        {/* ------------------------------------- */}

        <div className="challange-btm">

          <div className="challenge-boxes">
             

             <div className="challengeBox1">
             <div className="border-left-right"></div> 
                   <div className="C-box">
                   <div className="full-challenge">
                    <h5 style={{fontSize:"1.2vmax"}}>Normal</h5>
                    <span> <img alt="img-top"src="https://fanfunded.io/wp-content/themes/fanfunded-wp-theme/img/low.svg" /> Accelerated • Low Challenge Fee</span>
                    </div>
                   <div className="add-ons">
                   <h6 style={{marginTop:"1vmax"}}>Product Addons:</h6>
                    <small>Profit Split 80/20</small>
                    <small>Increase Max Drawdown by 5%</small>
                    <small>Express Payout(Bi-Weekly)</small>
                   </div>
                  

                <div className="account-size-2">
                    <div>
                    <h3>Account size:</h3>
                    <div className="select-dropdown-style">
                    <select id="plan-menu-48-blitz" autoComplete="off">
                    <option data-value="2k" value="2k">
                              $2,000
                    </option>
                    <option data-value="5k" value="5k" selected>
                              $5,000
                    </option>
                    <option data-value="10k" value="10k">
                              $10,000
                    </option>
                    <option data-value="20k" value="20k">
                              $20,000
                    </option>
                    </select>
                    </div>
                    </div>
                    <div className="challenge-fee">
                    <h3>Challenge fee:</h3>
                    <h5>
                    <span id="challenge-fee-title-blitz">$8.99</span>
                    </h5>
                    <h6>One-time</h6>
                    </div>
                    </div>

           <div className="tabs">
  <ul  className="tab-list-phase ">
  <li className="active" data-value="phase1">
      <a href="">Phase 1</a>
    </li>
    <li  data-value="phase2">
      <a href="">Phase 2</a>
    </li>
    <li data-value="phase2">
      <a href="">Phase 3</a>
    </li>
  </ul>
  <div id="tabs-content">
    <div id="tab1" className="tab-content">
      <table>
        <tbody>
          <tr>
            <td>Minimum Picks</td>
            <td style={{textAlign:"end"}}>
              N/A
            </td>
          </tr>
          <tr>
            <td>Minimum Pick Amount</td>
            <td style={{textAlign:"end"}}>
              $20
            </td>
          </tr>
          <tr>
            <td>Maximum Pick Amount</td>
            <td style={{textAlign:"end"}}>
              $200
            </td>
          </tr>
          <tr>
            <td>Max Loss</td>
            <td style={{textAlign:"end"}}>
              $400
            </td>
          </tr>
          <tr>
            <td>Max Daily Loss</td>
            <td style={{textAlign:"end"}}>
              N/A
            </td>
          </tr>
          <tr>
            <td>Profit Target</td>
            <td style={{textAlign:"end"}}>
              $660
            </td>
          </tr>
          <tr>
            <td>Time Limit</td>
            <td style={{textAlign:"end"}}>
              48 Hours
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
          </div>
             <div className="active-btn">
             <a href="#" className="activate-Player" id="start-plan-blitz">
          <span>Activate</span>
          </a></div>
            </div> 


 
             </div>

             <div className="challengeBox1">
             <div className="border-left-right"></div> 
                   <div className="C-box">
                   <div className="full-challenge">
                    <h5 style={{fontSize:"1.2vmax"}}>Aggresive</h5>
                    <span> <img alt="img-top"src="https://fanfunded.io/wp-content/themes/fanfunded-wp-theme/img/low.svg" /> Accelerated • Low Challenge Fee</span>
                    </div>
                    <div className="add-ons">
                   <h6 style={{marginTop:"1vmax"}}>Product Addons:</h6>
                    <small>Profit Split 80/20</small>
                    <small>Increase Max Drawdown by 5%</small>
                    <small>Express Payout(Bi-Weekly)</small>
                   </div>

                <div className="account-size-2">
                    <div>
                    <h3>Account size:</h3>
                    <div className="select-dropdown-style">
                    <select id="plan-menu-48-blitz" autoComplete="off">
                    <option data-value="2k" value="2k">
                              $2,000
                    </option>
                    <option data-value="5k" value="5k" selected>
                              $5,000
                    </option>
                    <option data-value="10k" value="10k">
                              $10,000
                    </option>
                    <option data-value="20k" value="20k">
                              $20,000
                    </option>
                    </select>
                    </div>
                    </div>
                    <div className="challenge-fee">
                    <h3>Challenge fee:</h3>
                    <h5>
                    <span id="challenge-fee-title-blitz">$8.99</span>
                    </h5>
                    <h6>One-time</h6>
                    </div>
                    </div>

           <div className="tabs">
  <ul  className="tab-list-phase ">
    <li className="active" data-value="phase1">
      <a href="">Phase 1</a>
    </li>
    <li  data-value="phase2">
      <a href="">Phase 2</a>
    </li>
    <li data-value="phase2">
      <a href="">Phase 3</a>
    </li>
 
  </ul>
  <div id="tabs-content">
    <div id="tab1" className="tab-content">
      <table>
        <tbody>
          <tr>
            <td>Minimum Picks</td>
            <td style={{textAlign:"end"}}>
              N/A
            </td>
          </tr>
          <tr>
            <td>Minimum Pick Amount</td>
            <td style={{textAlign:"end"}}>
              $20
            </td>
          </tr>
          <tr>
            <td>Maximum Pick Amount</td>
            <td style={{textAlign:"end"}}>
              $200
            </td>
          </tr>
          <tr>
            <td>Max Loss</td>
            <td style={{textAlign:"end"}}>
              $400
            </td>
          </tr>
          <tr>
            <td>Max Daily Loss</td>
            <td style={{textAlign:"end"}}>
              N/A
            </td>
          </tr>
          <tr>
            <td>Profit Target</td>
            <td style={{textAlign:"end"}}>
              $660
            </td>
          </tr>
          <tr>
            <td>Time Limit</td>
            <td style={{textAlign:"end"}}>
              48 Hours
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
          </div>
             <div className="active-btn">
             <a href="#" className="activate-Player" id="start-plan-blitz">
          <span>Activate</span>
          </a></div>
            </div> 


 
             </div>
          </div>

             

             {/* -----------------responsive code-------------- */}
             <div className="challenge-slider">
             <Swiper
  slidesPerView={1}
  spaceBetween={10}
  pagination={{ clickable: true }}
  modules={[Pagination]}
  style={{ width: "100%", height: "auto" }}
  breakpoints={{
    761: {
      slidesPerView: 1, // 761px par ek slide dikhega
    },
    1050: {
      slidesPerView: 1, // 1050px par bhi ek slide dikhega
    },
  }}
>


        <SwiperSlide>
        <div className="challengeBox1">
             <div className="border-left-right"></div> 

            <div className="C-box">
              <div className="full-challenge">
                <h5 className="challenge-title">Normal</h5>
                <span className="challenge-subtitle">
                  <img
                    alt="img-top"
                    src="https://fanfunded.io/wp-content/themes/fanfunded-wp-theme/img/low.svg"
                  />
                  Accelerated • Low Challenge Fee
                </span>
              </div>
              <div className="add-ons">
                   <h6 style={{marginTop:"1vmax"}}>Product Addons:</h6>
                    <small>Profit Split 80/20</small>
                    <small>Increase Max Drawdown by 5%</small>
                    <small>Express Payout(Bi-Weekly)</small>
                   </div>

              <div className="account-size-2">
                <div>
                  <h3>Account size:</h3>
                  <div className="select-dropdown-style">
                    <select id="plan-menu-48-blitz" autoComplete="off">
                      <option value="2k">$2,000</option>
                      <option value="5k" selected>
                        $5,000
                      </option>
                      <option value="10k">$10,000</option>
                      <option value="20k">$20,000</option>
                    </select>
                  </div>
                </div>
                <div className="challenge-fee">
                  <h3>Challenge fee:</h3>
                  <h5>
                    <span id="challenge-fee-title-blitz">$8.99</span>
                  </h5>
                  <h6>One-time</h6>
                </div>
              </div>

              <div className="tabs">
                <ul className="tab-list-phase">
                <li className="active" data-value="phase1">
      <a href="">Phase 1</a>
    </li>
    <li  data-value="phase2">
      <a href="">Phase 2</a>
    </li>
    <li data-value="phase2">
      <a href="">Phase 3</a>
    </li>
                </ul>
                <div id="tabs-content">
                  <div id="tab1" className="tab-content">
                    <div className="table-wrapper">
                      <table>
                        <tbody>
                          <tr>
                            <td>Minimum Picks</td>
                            <td>N/A</td>
                          </tr>
                          <tr>
                            <td>Minimum Pick Amount</td>
                            <td>$20</td>
                          </tr>
                          <tr>
                            <td>Maximum Pick Amount</td>
                            <td>$200</td>
                          </tr>
                          <tr>
                            <td>Max Loss</td>
                            <td>$400</td>
                          </tr>
                          <tr>
                            <td>Max Daily Loss</td>
                            <td>N/A</td>
                          </tr>
                          <tr>
                            <td>Profit Target</td>
                            <td>$660</td>
                          </tr>
                          <tr>
                            <td>Time Limit</td>
                            <td>48 Hours</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              <div className="active-btn">
                <a href="#" className="activate-Player" id="start-plan-blitz">
                  <span>Activate</span>
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className="challengeBox1">
             <div className="border-left-right"></div> 

            <div className="C-box">
              <div className="full-challenge">
                <h5 className="challenge-title">Aggresive</h5>
                <span className="challenge-subtitle">
                  <img
                    alt="img-top"
                    src="https://fanfunded.io/wp-content/themes/fanfunded-wp-theme/img/low.svg"
                  />
                  Accelerated • Low Challenge Fee
                </span>
              </div>
              <div className="add-ons">
                   <h6 style={{marginTop:"1vmax"}}>Product Addons:</h6>
                    <small>Profit Split 80/20</small>
                    <small>Increase Max Drawdown by 5%</small>
                    <small>Express Payout(Bi-Weekly)</small>
                   </div>

              <div className="account-size-2">
                <div>
                  <h3>Account size:</h3>
                  <div className="select-dropdown-style">
                    <select id="plan-menu-48-blitz" autoComplete="off">
                      <option value="2k">$2,000</option>
                      <option value="5k" selected>
                        $5,000
                      </option>
                      <option value="10k">$10,000</option>
                      <option value="20k">$20,000</option>
                    </select>
                  </div>
                </div>
                <div className="challenge-fee">
                  <h3>Challenge fee:</h3>
                  <h5>
                    <span id="challenge-fee-title-blitz">$8.99</span>
                  </h5>
                  <h6>One-time</h6>
                </div>
              </div>

              <div className="tabs">
                <ul className="tab-list-phase">
                <li className="active" data-value="phase1">
      <a href="">Phase 1</a>
    </li>
    <li  data-value="phase2">
      <a href="">Phase 2</a>
    </li>
    <li data-value="phase2">
      <a href="">Phase 3</a>
    </li>
                </ul>
                <div id="tabs-content">
                  <div id="tab1" className="tab-content">
                    <div className="table-wrapper">
                      <table>
                        <tbody>
                          <tr>
                            <td>Minimum Picks</td>
                            <td>N/A</td>
                          </tr>
                          <tr>
                            <td>Minimum Pick Amount</td>
                            <td>$20</td>
                          </tr>
                          <tr>
                            <td>Maximum Pick Amount</td>
                            <td>$200</td>
                          </tr>
                          <tr>
                            <td>Max Loss</td>
                            <td>$400</td>
                          </tr>
                          <tr>
                            <td>Max Daily Loss</td>
                            <td>N/A</td>
                          </tr>
                          <tr>
                            <td>Profit Target</td>
                            <td>$660</td>
                          </tr>
                          <tr>
                            <td>Time Limit</td>
                            <td>48 Hours</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              <div className="active-btn">
                <a href="#" className="activate-Player" id="start-plan-blitz">
                  <span>Activate</span>
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
             {/* -----------------responsive code-------------- */}
         </div>
        {/* ------------------------------------- */}
   





      </div>
    </div>
  );
};

export default Challenges;
