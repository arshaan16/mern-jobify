import React from "react";
import { Logo } from "../components";
import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/Testing";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            I'm baby pabst health goth pork belly post-ironic kickstarter palo
            santo gorpcore helvetica. Sustainable food truck vegan banh mi
            narwhal mukbang gorpcore lumbersexual big mood. Pabst glossier jawn
            wayfarers blackbird spyplane narwhal. Gentrify trust fund keffiyeh
            tonx palo santo celiac stumptown godard XOXO squid. Ennui typewriter
            ethical pitchfork actually venmo. Keffiyeh shoreditch banh mi
            pour-over. Lomo brunch single-origin coffee, ennui cupping live-edge
            etsy copper mug cornhole mixtape 8-bit waistcoat sustainable austin
            plaid.
          </p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
