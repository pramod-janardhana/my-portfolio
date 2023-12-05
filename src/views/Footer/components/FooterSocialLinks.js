import React from "react";
import { Flex, Spacer } from "@chakra-ui/layout";
import { Tooltip } from "@chakra-ui/react";
import githubLogo from "../../../drawables/footer/github_logo.svg";
import linkedLogo from "../../../drawables/footer/linkedin_logo.svg";
import codeLogo from "../../../drawables/footer/code_logo.svg";
import resumeLogo from "../../../drawables/footer/resume_logo.svg";
import "./FooterSocialLinks.css";

const socialLinks = [
  {
    src: githubLogo,
    alt: "github",
    href: "https://github.com/pramod-janardhana",
  },
  {
    src: linkedLogo,
    alt: "linkedin",
    href: "https://www.linkedin.com/in/pramod-j-a039aa175/",
  },
  {
    src: codeLogo,
    alt: "hackerrank",
    href: "https://www.hackerrank.com/pramod_athreya_1",
  },
  {
    src: resumeLogo,
    alt: "resume",
    href: "https://drive.google.com/file/d/1ioujrkC0UWxT-rmILsHTpfM7IxaI6oY6/view",
  },
];

const FooterSocialLinks = () => {
  return (
    <Flex id="footer-social-links">
      {socialLinks.map((item, i, { length }) => {
        const htmlItem = (
          <Tooltip label={item.alt} fontSize="sm" color="white">
            <a href={item.href} target="_blank" rel="noreferrer">
              <img src={item.src} alt={item.alt} />
            </a>
          </Tooltip>
        );
        if (length - 1 === i) {
          return htmlItem;
        } else {
          return (
            <>
              {htmlItem}
              <Spacer className="logo_spacer" />
            </>
          );
        }
      })}
    </Flex>
  );
};

export default FooterSocialLinks;
