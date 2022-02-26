import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { Element } from "react-scroll";

import Certificate from "./components/Certificate";
import "./certifications.css";

function Certifications() {
  const certificates = [
    {
      title: "Database and Management System",
      details: {
        duration: "8 week course",
        provider: "Provided By: NPTEL",
        score: "Score: 75.0%",
      },
    },
    {
      title: "Python",
      details: {
        duration: "12 week course",
        provider: "Provided By: NPTEL",
        score: "Score: 86.0%",
      },
    },
  ];
  const myCertificates = certificates.map((certificate) => (
    <Certificate myCertificate={certificate} />
  ));

  return (
    <>
      <Flex id="certifications-head">
        <Element name="certificates" />
        <Text id="certifications-title" noOfLines={[1, 2, 3]}>CERTIFICATIONS</Text >
      </Flex>
      <Flex id="certifications-body">{myCertificates}</Flex>
    </>
  );
}

export default Certifications;
