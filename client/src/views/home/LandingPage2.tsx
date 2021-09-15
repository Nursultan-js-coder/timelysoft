import React, { useState } from "react";
import bannerImage from "../../assets/images/landing-page-image.svg";
import verifyIcon from "../../assets/icons/verification-icon.svg";
import likeIcon from "../../assets/icons/like.svg";
import ideaIcon from "../../assets/icons/el_idea.svg";
import { Button, Form } from "react-bootstrap";
import { toggleDropdown } from "../../components/utils";
import "./LandingPage2.css";
import mobile from "../../assets/landing-page-2/mobile.svg";

const LandingPage2 = () => {
  const [email, setEmail] = useState("");
  return (
    <div className="home-page landing-page-2">
      <div className="home-page__content">
        <h2>Turn your app into super app</h2>
        <p>Appboxo is rethinking how apps interact with each other.</p>
        <Button
          variant="success"
          style={{
            backgroundColor: "#A6FF87",
            color: "#28272C",
            fontSize: 35,
            fontWeight: 600,
            height: 100,
            width: 330,
          }}
        >
          Join Whitelist
        </Button>
      </div>
      <img src={mobile} alt="mobile" />
    </div>
  );
};

export default LandingPage2;
