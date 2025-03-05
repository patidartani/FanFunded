import "./Footer.css"
import FooterLogo from "../../assets/images/MainLogo.png"
import FooterLogo2 from "../../assets/images/gaminghost_logo_footer.png"


const Footer = () => {
  return (
    <div className="Footer-main">
      <div className="footer-content">
        
           <div className="footer-top">
                   <div className="F-one">
                         <h5>
                          <img src={FooterLogo} alt="" />
                         </h5>
                         <div className="links">
                          <p>Fan Data LLC <br /> 30 N Gould St <br /> Sheridan, WY 82801</p>
                         </div>
                         <span>support@fanfunded.io</span>
                   </div>
                   <div className="F-one">
                       <h5>Important Links</h5>
                       <div className="links">
                         <a href="">Terms & Conditions</a> 
                         <a href="">Privacy Policy</a>
                         <a href="">Refund Policy</a>
                         <a href="">Affiliates</a>
                         <a href="">FAQ</a>
                         <a href="">Sports Picker Assessment</a>
                      </div>
                   </div>
                   <div className="F-one">
                        <h5>Community</h5>
                        <div className="links">
                          <a href="">Discord Community</a>
                          <a href="">Instagram </a>
                          <a href="">X (Twitter)</a>
                          <a href="">Blog</a>
                        </div>
                   </div>
                   <div className="F-one">
                      <h5 style={{width:"60%"}}>
                        <img src={FooterLogo2} alt="" />
                      </h5>
                   </div>
           </div>

             <div className="footer-btm">
                <p>Fan Funded is not a casino, sports book or gambling operator and does not accept or place wagers of any type, in any capacity. Additionally, Fan Funded does not endorse or encourage illegal gambling of any sort. All information and services provided by Fan Funded are for educational & entertainment purposes only. No real money wagering occurs on our website and all challenge accounts use virtual profit points to showcase theoretical pick results based upon real, live sports odds from established operators.</p>
                <span> © {new Date().getFullYear()} Fan Funded. All Rights Reserved.</span>
            </div>


      </div>
    </div>
  )
}

export default Footer