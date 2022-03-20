import React from "react";
import image from "../assets/ims.png";
import Blob from "./Blob";

const Landing = () => {
  return (
    <div className="landing">
      <div className="subject-image">
        <Blob />
        <img src={image} className="hero-image" alt="Imran" />
      </div>
      <div className="subject-info">
        <div className="subject-name-main pronoun">I'm</div>
        <div className="subject-name-main name">Imran Siddiki</div>
        <p className="subject-occupation">Mathematician and Data Analyst</p>
        <button
          className="button my-resume"
          title="Download Resume"
          onClick={() => window.open("resume.pdf", "_blank")}
        >
          My Resume
        </button>
      </div>
    </div>
  );
};

export default Landing;
