import React from "react";
import { Flex, Spacer } from "@chakra-ui/layout";
import githubLogo from "../../../drawables/footer/github_logo.svg";
import linkedLogo from "../../../drawables/footer/linkedin_logo.svg";
import codeLogo from "../../../drawables/footer/code_logo.svg";
import "./FooterSocialLinks.css";

const FooterSocialLinks = () => {
  return (
    <Flex id="footer-social-links">
      <a
        href="https://github.com/mr-pramod-98"
        target="_blank"
        rel="noreferrer"
      >
        <img src={githubLogo} alt="github" />
      </a>
      <Spacer id="logo_spacer" />
      <a
        href="https://www.linkedin.com/in/pramod-j-a039aa175/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={linkedLogo} alt="linkedin" />
      </a>
      <Spacer />
      <a
        href="https://www.hackerrank.com/pramod_athreya_1"
        target="_blank"
        rel="noreferrer"
      >
        <img src={codeLogo} alt="code" />
      </a>
    </Flex>
  );
};

export default FooterSocialLinks;
