import React from "react";
import { Flex, Divider, Box } from "@chakra-ui/react";
import FooterSocialLinks from "../components/FooterSocialLinks";
import FooterNavBar from "../components/FooterNavBar";
import FooterSignature from "../components/FooterSignature";
import "./Footer.css";

function Footer() {
  return (
    <Flex id="footer">
      <Box id="row1">Lets connect</Box>
      <Flex id="row2">
        <FooterSocialLinks />
        <FooterSignature />
      </Flex>
      {/* <FooterNavBar /> */}
      {/* <Divider h="2px" /> */}
    </Flex>
  );
}

export default Footer;
