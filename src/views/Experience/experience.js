import React, { useState, useEffect } from "react";
import { Flex, Box } from "@chakra-ui/react";
import firebaseDB, { storage } from "../../firebase";
import ExperienceSectionHeader from "./components/ExperienceSectionHeader";
import Internship from "./components/Internship";
import Fulltime from "./components/Fulltime";
import sideImage from "../../drawables/experience/side-image.svg";
import colors from "./consts";
import "./experience.css";

function Experience() {
  const [internships, setInternships] = useState([]);
  useEffect(() => {
    const spaceRef = storage.ref("company-logo.svg");
    console.log({ spaceRef });
    spaceRef.getDownloadURL().then((url) => console.log({ url }));

    firebaseDB.child("experience").on("value", (snapshot) => {
      const result = snapshot.val();
      if (result != null) {
        console.log(result.internships[0], result.internships.length);
        setInternships([...result.internships, internships]);
        setInternships([...result.internships, internships]);
        setInternships([...result.internships, internships]);
      }
    });
  }, []);
  const myInternships = [
    <Internship internship={internships[0]} />,
    <Internship internship={internships[0]} />,
    <Internship internship={internships[0]} />,
  ];

  return (
    <>
      <Flex id="experience-head">
        <div id="experience-title">EXPERIENCE</div>
      </Flex>
      <Box id="experience-body" bg={colors.lightPurpul}>
        <div>
          <ExperienceSectionHeader title="INTERNSHIP" />
          <Flex id="internship-body">
            <img src={sideImage} id="side-image" />
            <Flex id="internships">{myInternships}</Flex>
            {/* <Flex id="internships">
              {internships.map((internship) => (
                <Internship internship={internship} />
              ))}
            </Flex> */}
          </Flex>
        </div>
        <div>
          <ExperienceSectionHeader title="FULLTIME" />
          <Flex id="full-time-body">
            <Fulltime />
          </Flex>
        </div>
      </Box>
    </>
  );
}

export default Experience;
