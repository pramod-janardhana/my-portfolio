import React, { useState, useEffect } from "react";
import { Flex, Box, Text } from "@chakra-ui/react";
import firebaseDB, { storage } from "../../firebase";
import ExperienceSectionHeader from "./components/ExperienceSectionHeader";
import Internship from "./components/Internship";
import betsolLogo from "../../drawables/experience/betsol-logo.svg";
import smartDesertLogo from "../../drawables/experience/smart-desert-logo.svg";
import blitzJobsLogo from "../../drawables/experience/blitz-jobs-logo.svg";
import Fulltime from "./components/Fulltime";
import sideImage from "../../drawables/experience/side-image.svg";
import colors from "./consts";
import "./experience.css";

function Experience() {
  // const [internships, setInternships] = useState([]);
  // useEffect(() => {
  //   const spaceRef = storage.ref("company-logo.svg");
  //   console.log({ spaceRef });
  //   spaceRef.getDownloadURL().then((url) => console.log({ url }));

  //   firebaseDB.child("experience").on("value", (snapshot) => {
  //     const result = snapshot.val();
  //     if (result != null) {
  //       console.log(result.internships[0], result.internships.length);
  //       setInternships([...result.internships, internships]);
  //       setInternships([...result.internships, internships]);
  //       setInternships([...result.internships, internships]);
  //     }
  //   });
  // }, []);
  const fulltimes = [
    {
      companyName: "BETSOL",
      companyLogo: betsolLogo,
      role: "Associate Software Engineer",
      duration: { start: "Jul 2021", end: "present" },
    },
  ];
  const myfulltimes = fulltimes.map((fulltime) => (
    <Fulltime fulltime={fulltime} />
  ));

  const internships = [
    {
      companyName: "BETSOL",
      companyLogo: betsolLogo,
      role: "Software Engineer Intern",
      duration: { start: "Mar 2021", end: "Jun 2021" },
    },
    {
      companyName: "BLITZ JOBS",
      companyLogo: blitzJobsLogo,
      role: "Application Developer Intern",
      duration: { start: "Sep 2020", end: "Dec 2020" },
    },
    {
      companyName: "Smart Desert",
      companyLogo: smartDesertLogo,
      role: "Mobile Application Developer Intern",
      duration: { start: "Jan 2020", end: "Jun 2020" },
    },
  ];
  const myInternships = internships.map((internship) => (
    <Internship internship={internship} />
  ));

  return (
    <>
      <Flex id="experience-head">
        <Text id="experience-title" noOfLines={[1, 2, 3]}>
          EXPERIENCE
        </Text>
      </Flex>
      <Box id="experience-body" bg={colors.lightPurpul}>
        <div>
          <ExperienceSectionHeader title="Internships" />
          <Flex id="internship-body">
            <img src={sideImage} id="side-image" alt="side" />
            <Flex id="internships">{myInternships}</Flex>
            {/* <Flex id="internships">
              {internships.map((internship) => (
                <Internship internship={internship} />
              ))}
            </Flex> */}
          </Flex>
        </div>
        <div>
          <ExperienceSectionHeader title="Fultime" />
          <Flex id="full-time-body">{myfulltimes}</Flex>
        </div>
      </Box>
    </>
  );
}

export default Experience;
