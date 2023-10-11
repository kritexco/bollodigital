import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faInstagram, faLinkedinIn, faTwitter, faGoogle} from "@fortawesome/free-brands-svg-icons";

import { LINKS } from "@utils/constant";

const SocialIcons = () => {
  return (
    <ul className="social-icons popup">
      <li>
        <a href={LINKS.Instagram} rel="noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </li>
      <li>
        <a href={LINKS.Twitter} rel="noreferrer">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </li>
      <li>
        <a href={LINKS.Twitter} rel="noreferrer">
          <FontAwesomeIcon icon={faDiscord} />
        </a>
      </li>
      <li>
        <a href={LINKS.Twitter} rel="noreferrer">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
      </li>

      <li>
      <a href = "mailto: abc@example.com">
        <FontAwesomeIcon icon={faGoogle} />
        </a>
      </li>
     
    </ul>
  );
};

export { SocialIcons };
