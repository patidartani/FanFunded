import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./Faq.css";
import Navbar from "../../../pages/Navbar/Navbar";
import Footer from "../../../pages/Footer/Footer";

import FaqImg from "../../../assets/images/faq.png";
const faqData = [
          {
            title: "General Rules",
            articles: 17,
            content: [
              { title: "Fan Funded 101", details: "This is a basic guide explaining the rules of Fan Funded." },
              { title: "How Does the Fan Funded Challenge Work?", details: "Explains the structure of the challenge." },
              { title: "What Countries Are Supported?", details: "Lists the countries that can participate in the challenge." },
              { title: "When Can I Claim My Rewards?", details: "Explains the process and timing for claiming rewards." },
              { title: "Blitz Challenge vs Player Challenge", details: "Describes the differences between these two challenge types." },
              { title: "Maximum Allocation", details: "Explains the maximum allocation limits for participants." },
              { title: "Minimum and Maximum Picks Per Outcome", details: "Defines the minimum and maximum picks allowed per outcome." },
              { title: "KYC and Receiving Your Funded Account", details: "Details the KYC verification process for receiving a funded account." },
              { title: "Minimum Rewards Withdrawal", details: "Explains the minimum amount required for withdrawing rewards." },
              { title: "Deposit Methods", details: "Lists the available deposit methods for Fan Funded." },
              { title: "Account Verification", details: "Describes the account verification process in detail." },
              { title: "Challenge Time Limits", details: "Explains the time limits for completing challenges." },
              { title: "Leaderboard and Ranking", details: "Describes how the leaderboard and ranking system work." },
              { title: "Taxes and Fees", details: "Explains any applicable taxes and fees for withdrawals." },
              { title: "Security Measures", details: "Covers the security steps taken to prevent fraud." },
              { title: "Support and Contact", details: "Provides information on how to contact the support team." },
              { title: "User Agreement", details: "Outlines the official user agreement and policies." },
            ],
          },
          {
            title: "Challenge Rules",
            articles: 4,
            content: [
              { title: "Challenge Overview", details: "An introduction to the challenge structure." },
              { title: "Eligibility Criteria", details: "Lists the eligibility requirements for participation." },
              { title: "Winning Criteria", details: "Explains how winners are determined." },
              { title: "Challenge Rewards", details: "Details the rewards for completing a challenge." },
            ],
          },
          {
            title: "Funded Rules",
            articles: 6,
            content: [
              { title: "Funding Eligibility", details: "Explains who is eligible for funding." },
              { title: "How Funding Works", details: "Describes the funding process in detail." },
              { title: "Withdrawal Rules", details: "Lists the rules for withdrawing funds." },
              { title: "Funding Period", details: "Defines the duration for which funding remains active." },
              { title: "Bonus Rules", details: "Explains how bonuses work and their conditions." },
              { title: "Terms and Conditions", details: "Provides all important terms and conditions." },
            ],
          },
          {
            title: "Sports Terminology",
            articles: 8,
            content: [
              { title: "Basic Sports Terms", details: "Explains basic sports-related terminology." },
              { title: "Betting Terms", details: "Defines key betting terms and their meanings." },
              { title: "Advanced Sports Strategies", details: "Covers advanced strategies used in sports." },
              { title: "Scoring Systems", details: "Explains scoring systems for different games." },
              { title: "Popular Sports Glossary", details: "A glossary of important sports-related words." },
              { title: "Team Strategies", details: "Describes various team strategies in sports." },
              { title: "Player Stats Meaning", details: "Explains how to interpret player performance stats." },
              { title: "Match Analysis Terms", details: "Defines key terms used in match analysis." },
            ],
          },
        ];
        
        

const Faq = () => {
  const [activeTab, setActiveTab] = useState(null);
  const [openArticle, setOpenArticle] = useState(null);

  const toggleArticle = (index) => {
    setOpenArticle(openArticle === index ? null : index);
  };

  return (
    <>
      <Navbar />
      <div className="Faq-main">
        <div className="Faq-page">
          {/* Search Bar */}
          <div className="faq-Top">
            <h5>Advice and answers from the FanFunded Team</h5>
            <div className="search-faq">
              <FaSearch style={{ marginRight: "10px", color: "#888" }} />
              <input type="text" placeholder="Search for articles..." />
            </div>
          </div>

          {/* Show Categories if No Tab is Selected */}
          {activeTab === null && (
            <div className="faq-btm">
              {faqData.map((item, index) => (
                <div key={index} className="f-btm-1" onClick={() => setActiveTab(index)}>
                  <div className="f-btm-left">
                    <img src={FaqImg} alt="" />
                  </div>
                  <div className="f-btm-right">
                    <h6>{item.title}</h6>
                    <span>{item.articles} articles</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Show Articles List when a Category is Selected */}
          {activeTab !== null && (
            <div className="faq-content">
              <button className="back-btn" onClick={() => setActiveTab(null)}>
                <i className="ri-arrow-left-double-line"></i> Back
              </button>
              <h3>{faqData[activeTab].title}</h3>
              <span>{faqData[activeTab].articles} articles</span>
              <div className="faq-articles">
                {faqData[activeTab].content.map((article, index) => (
                  <div className="faq-item" key={index}>
                    <span  onClick={() => toggleArticle(index)}>
                      <h6>{article.title}</h6>
                      <i
                        style={{
                          color: "#D000CC",
                          transform: openArticle === index ? "rotate(90deg)" : "rotate(0deg)",
                          transition: "0.3s",
                        }}
                        className="ri-arrow-right-s-line"
                      ></i>
                    </span>
                    {openArticle === index && <p className="faq-details">{article.details}</p>}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Faq;
