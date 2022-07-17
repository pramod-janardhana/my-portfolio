import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import colors from "../consts";
import "./Certificate.css";

const Certification = ({ myCertificate }) => {
  return (
    <Flex className="certification">
      <Text
        className="certification-title"
        fontFamily="Ubuntu"
        color={colors.white}
      >
        {myCertificate.title}
      </Text>
      <Flex className="certification-details">
        <Text fontFamily="Ubuntu" color={colors.white}>
          {myCertificate.details.duration}
        </Text>
        <Text fontFamily="Ubuntu" color={colors.white}>
          {myCertificate.details.provider}
        </Text>
        <Text fontFamily="Ubuntu" color={colors.white}>
          {myCertificate.details.score}
        </Text>
      </Flex>
    </Flex>
  );
};

export default Certification;
