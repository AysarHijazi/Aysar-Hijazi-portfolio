import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";
import { GitHub } from "@material-ui/icons";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
   
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
      <p> &copy; 2023 Aysar Hijazi</p>
    </div>
  );
}

export default Footer;
