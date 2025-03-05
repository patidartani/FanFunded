import "./Whyus.css";

const whyUsData = [
  {
    title: "Real Time Game Data",
    description: "Real-time game data powers our Fan Funded platform, delivering live scores, player stats, and game updates.",
  },
  {
    title: "Sports Picking",
    description: "Choose your favorite teams and players in for a chance at awesome rewards.",
  },
  {
    title: "Fan Funded Treasury",
    description: "Explore our Fan Funded treasury, our prize chest for exciting giveaways and community rewards!",
  },
  {
    title: "Watch and Play",
    description: "At Fan Funded we keep you updated on game-time decisions while offering access to all your favorite sports.",
  },
  {
    title: "24 Hour Withdrawals",
    description: "Instantly access your rewards anytime with our 24-hour withdrawals section.",
  },
  {
    title: "Stay Informed",
    description: "Stay in the loop with all the latest Fan Funded news by subscribing to our email updates.",
  }
];

const Whyus = () => {
  return (
    <div className="Whyus-main">
      <div className="why-us">
        <div className="why-top">
          <h3>Why Us?</h3>
          <p>You’re not just watching the game, you’re a part of the action! <br /> Here’s what you can do with Us</p>
        </div>

        <div className="why-btm">
          {whyUsData.map((item, index) => (
            <div key={index} className="why-box">
              <h5>{item.title}</h5>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Whyus;
