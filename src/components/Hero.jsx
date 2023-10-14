import React from "react";
import CountUp from "react-countup";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <section className="hero-wrapper">
          <div className="paddings innerWidth flexCenter hero-container">
            {/* left Side  */}
            <div className="flexColStart hero-left">
              <div className="hero-title">
                <div className="orange-circle" />
                <h1 className="h1-hero">
                  Experts <br />
                  In Our <br />
                  Reach
                </h1>
              </div>
              <div className="flexColStart hero-des">
                <span className="secondaryText">
                  No more barriar to reach out medical experts
                </span>
                <span className="secondaryText">
                  Health is the main priority, so is the medical education.
                </span>
              </div>
              <div className="flexCenter stats">
                <div className="flexColCenter stat">
                  <span>
                    <CountUp start={8800} end={9000} duration={2} />
                    <span>+</span>
                  </span>
                  <span className="secondaryText">Patients</span>
                </div>

                <div className="flexColCenter stat">
                  <span>
                    <CountUp start={1500} end={2000} duration={2} />
                    <span>+</span>
                  </span>
                  <span className="secondaryText">Medical Experts</span>
                </div>

                <div className="flexColCenter stat">
                  <span>
                    <CountUp end={20} />
                    <span>+</span>
                  </span>
                  <span className="secondaryText">Award Winning</span>
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div className="flexCenter hero-right">
              <div className="image-container">
                <img src="./hero-image1.jpeg" alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
