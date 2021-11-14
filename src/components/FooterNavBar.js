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
        PRAMOD J
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
        SKILLS
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
        EXPERIENCE
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
        PROJECTS
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
        CERTIFICATIONS
      </Link>
    </Flex>
  );
};

export default FooterNavBar;
