import React, { useState, useEffect } from "react";
import LoadingScreen from "react-loading-screen";
import firebaseDB from "../../firebase";
import profile from "../../drawables/about/profile.svg";
import code from "../../drawables/about/code.svg";
import github from "../../drawables/about/github.svg";
import linkedin from "../../drawables/about/linkedin.svg";
import resume from "../../drawables/about/resume.svg";
import "./about.css";
import { Tooltip } from "@chakra-ui/react";
import { Box, Flex } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";

function About() {
  const [loading, setLoading] = useState(true);
  const name = "Pramod Janardhana";
  const role = "Full Stack Developer";
  const company = "Betsol";

  const socialLinks = [
    {
      src: github,
      alt: "github",
      href: "https://github.com/pramod-janardhana",
    },
    {
      src: linkedin,
      alt: "linkedin",
      href: "https://www.linkedin.com/in/pramod-j-a039aa175/",
    },
    {
      src: code,
      alt: "hackerrank",
      href: "https://www.hackerrank.com/pramod_athreya_1",
    },
    {
      src: resume,
      alt: "resume",
      href: "https://drive.google.com/file/d/1F-zREWdTKMGf4zEh6EY3r-yV5WoFwu3_/view",
    },
  ];

  return (
    <Flex id="about-section">
      <Flex id="about-section-wrapper">
        <Image
          id="profile-image"
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
                <a
                  href="https://www.betsol.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {company}
                </a>
              </span>
            </p>
          </div>
          <Flex id="social-links-wrapper">
            <Flex id="social-links">
              {socialLinks.map((item) => (
                <Tooltip label={item.alt} fontSize="sm" color="white">
                  <a href={item.href} target="_blank" rel="noreferrer">
                    <Image className="icon" src={item.src} alt={item.alt} />
                  </a>
                </Tooltip>
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
