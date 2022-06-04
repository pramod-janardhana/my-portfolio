import React from "react";
import { Link } from "react-scroll";
import { Flex } from "@chakra-ui/react";
import "./FooterNavBar.css";

const FooterNavBar = () => {
  return (
    <Flex id="footer-nav">
      <Link
        className="footer-nav-link"
        activeClass="active"
        to="about-section"
        spy={true}
        smooth={true}
        offset={-70}
        duration={1000}
      >
        About
      </Link>
      <Link
        className="footer-nav-link"
        activeClass="active"
        to="skills-head"
        spy={true}
        smooth={true}
        offset={-70}
        duration={1000}
      >
        Skills
      </Link>
      <Link
        className="footer-nav-link"
        activeClass="active"
        to="experience-head"
        spy={true}
        smooth={true}
        offset={-70}
        duration={1000}
      >
        Experience
      </Link>
      <Link
        className="footer-nav-link"
        activeClass="active"
        to="section1"
        spy={true}
        smooth={true}
        offset={-70}
        duration={1000}
      >
        Projects
      </Link>
      <Link
        className="footer-nav-link"
        activeClass="active"
        to="certifications-head"
        spy={true}
        smooth={true}
        offset={-70}
        duration={1000}
      >
        Certifications
      </Link>
    </Flex>
  );
};

export default FooterNavBar;
