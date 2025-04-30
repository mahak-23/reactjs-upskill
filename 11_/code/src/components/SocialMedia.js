import React, { Component } from "react";
import {
  LINKEDIN_URL,
  GiTHUB_LINK,
  EMAIL_LINK,
} from "../../../../assets/constant";
import { SiGmail, SiLinkedin, SiGithub } from "react-icons/si";

class SocialMedia extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="social-media-container">
        <a
          href={LINKEDIN_URL}
          className="icon-button linkedin"
          target="_blank"
        >
            <SiLinkedin />
        </a>
        <a href={GiTHUB_LINK} className="icon-button github" target="_blank">
            <SiGithub />
        </a>
        <a href={"mailto:" + EMAIL_LINK} className="icon-button email">
            <SiGmail />
        </a>
      </div>
    );
  }
}

export default SocialMedia;
