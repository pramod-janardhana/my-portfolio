import React, { useState, useEffect } from "react";
import LoadingScreen from "react-loading-screen";
import firebaseDB from "../firebase";
import profile from "../drawables/about/profile.svg";
import code from "../drawables/about/code.svg";
import github from "../drawables/about/github.svg";
import linkedin from "../drawables/about/linkedin.svg";
import "./About.css";
import { Box, Flex } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";

function About() {
  const [loading, setLoading] = useState(true);
  const name = "Pramod Janardhana";
  const role = "Full Stack Developer";
  const company = "Betsol";

  const socialLinks = [
    { src: linkedin, alt: "linkedIn" },
    { src: github, alt: "github" },
    { src: code, alt: "code" },
  ];

  return (
    <Flex id="about-section">
      <Flex>
        <Image
          src={profile}
          height="458px"
          width="378px"
          objectFit="cover"
          alt="Pramod J"
        />
        <Flex id="my-details">
          <div>
            <p id="name">{name}</p>
            <p id="role">
              {role} AT <br />
              <span>
                <a href="https://www.betsol.com/" target="_blank">
                  {company}
                </a>
              </span>
            </p>
          </div>
          <Flex id="social-links-wrapper">
            <Flex id="social-links">
              {socialLinks.map((item) => (
                <Image
                  className="icon"
                  src={item.src}
                  boxSize="32px"
                  alt={item.alt}
                />
              ))}
            </Flex>
            <Flex id="quote">
              <p>Every programmer is an author!</p>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default About;
