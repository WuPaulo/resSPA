import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="header">
      <div className="headerInfo">
        <h1>Paulo Wu , Web Developer</h1>
        <p>
          I am a web developer with a passion in creating and design through the
          use of Front-End applications in order to build accessible and
          responsive web applications. I incorporate my interpersonal ,
          teamworking, leadership skills as well as my values in every role that
          I am in.
        </p>
        <div className="socials">
          <a href="https://github.com/WuPaulo">
            <FontAwesomeIcon
              icon={faGithub}
              className="socialIcon"
            ></FontAwesomeIcon>
          </a>
          <a href="https://www.linkedin.com/in/paulo-wu/">
            <FontAwesomeIcon
              icon={faLinkedinIn}
              className="socialIcon"
            ></FontAwesomeIcon>
          </a>
          <a href="https://twitter.com/paulwu__">
            <FontAwesomeIcon
              icon={faTwitter}
              className="socialIcon"
            ></FontAwesomeIcon>
          </a>
          <a href="mailto:paulowudev@gmail.com">
            <FontAwesomeIcon
              icon={faCoffee}
              className="socialIcon"
            ></FontAwesomeIcon>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
