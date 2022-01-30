import React from "react";
import { Flex, Divider } from "@chakra-ui/react";
import FooterSocialLinks from "../components/FooterSocialLinks";
import FooterNavBar from "../components/FooterNavBar";
import FooterSignature from "../components/FooterSignature";
import "./Footer.css";

function Footer() {
  return (
    <Flex id="footer">
      <FooterSocialLinks />
      <FooterNavBar />
      <Divider h="2px" />
      <FooterSignature />
    </Flex>
  );
}

export default Footer;
