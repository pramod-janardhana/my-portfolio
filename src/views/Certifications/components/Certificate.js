import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import colors from "../consts";
import "./Certificate.css";

const Certification = ({ myCertificate }) => {
  return (
    <Flex className="certification">
      <Text
        className="certification-title"
        fontFamily="Roboto"
        color={colors.white}
      >
        {myCertificate.title}
      </Text>
      <Flex className="certification-details">
        <Text fontFamily="Roboto" color={colors.white}>
          {myCertificate.details.duration}
        </Text>
        <Text fontFamily="Roboto" color={colors.white}>
          {myCertificate.details.provider}
        </Text>
        <Text fontFamily="Roboto" color={colors.white}>
          {myCertificate.details.score}
        </Text>
      </Flex>
    </Flex>
  );
};

export default Certification;
