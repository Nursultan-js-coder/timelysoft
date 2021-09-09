import React, { useState } from "react";
import "./home.css";
import bannerImage from "../../assets/images/landing-page-image.svg";
import verifyIcon from "../../assets/icons/verification-icon.svg";
import likeIcon from "../../assets/icons/like.svg";
import ideaIcon from "../../assets/icons/el_idea.svg";
import { Button, Form } from "react-bootstrap";
interface Props {}

const HomePage: React.FC<Props> = () => {
  const [email, setEmail] = useState("");
  return (
    <div className="home-page">
      <div className="home-page__left">
        <p className="home-page__top-text">
          <span className="home-page__title-green">Timely</span> time tracking
          software
        </p>
        <h3 className="home-page__title">
          Say hello to{" "}
          <span className="home-page__title-green">automtic time tracking</span>
        </h3>
        <p className="home-page__bottom-text">
          Timely automates company time tracking, so you and your team can focus
          on the work that matters.
        </p>
        <Form className="home-page__form">
          <Form.Control
            style={{
              width: "100%",
              outline: "none",
              border: "none",
              fontSize: "1.3rem",
            }}
            type="text"
            value={email}
            placeholder="email..."
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button variant="dark" style={{ padding: 10 }}>
            start my free trial
          </Button>
        </Form>
        <ul className="home-page__small-texts">
          <li>
            <img src={verifyIcon} alt="icon" />
            <p>Trusted by 5000+ businesses globally</p>
          </li>
          <li>
            <img src={likeIcon} alt="icon" />
            <p>Free 14-day trial — No credit cards needed</p>
          </li>
          <li>
            <img src={ideaIcon} alt="icon" />
            <p>Reduce time tracking admin by 75%</p>
          </li>
        </ul>
      </div>
      <img
        src={bannerImage}
        className="home-page__image"
        alt="landing-page image"
      />
    </div>
  );
};

export default HomePage;
