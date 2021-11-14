import React from "react";
import { Flex } from "@chakra-ui/react";
import "./Certificate.css";

const Certification = ({ myCertificate }) => {
  return (
    <Flex className="certification">
      <div className="certification-title">{myCertificate.title}</div>
      <Flex className="certification-details">
        <div>{myCertificate.details.duration}</div>
        <div>{myCertificate.details.provider}</div>
        <div>{myCertificate.details.score}</div>
      </Flex>
    </Flex>
  );
};

export default Certification;
