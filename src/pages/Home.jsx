import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Aysar Hijazi</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>
          <a href=" https://github.com/AysarHijazi" target="_blank">
        <GitHubIcon />
        </a>
        <a href=" https://www.facebook.com/profile.php?id=100086768232172&mibextid=ZbWKwL" target="_blank">
          <FacebookIcon />
        </a>
        <a href="https://www.linkedin.com/in/aysar-hijazi-08b964266/  " target="_blank">
          <LinkedInIcon />
        </a>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, HTML, CSS, 
               BootStrap
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, php
              MySQL,firebase
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java, Python</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
