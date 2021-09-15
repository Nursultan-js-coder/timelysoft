import React, { useState, useEffect } from "react";
import "./home.css";
import LandingPage from "./LandingPage";
import LandingPage2 from "./LandingPage2";

interface Props {}

const HomePage: React.FC<Props> = () => {
  useEffect(() => {}, []);
  return (
    <>
      <LandingPage />
      <LandingPage2 />
    </>
  );
};

export default HomePage;
