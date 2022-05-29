import React from "react";
import { Flex, Image, Text } from "@chakra-ui/react";
import colors from "../consts";
import "./Internship.css";

const Internship = ({ internship }) => {
  return (
    <Flex className="internship" bg={colors.white} borderRadius={8}>
      <Image src={internship.companyLogo} className="intership-company-logo" alt="logo" />
      <Flex className="internship-details">
        <Text
          className="intership-company-name"
          fontFamily="Ubuntu"
          fontWeight="700"
          color={colors.darkPurpul}
          letterSpacing="1px"
        >
          {internship.companyName}
        </Text>
        <Text
          className="role-at-internship"
          fontFamily="Ubuntu"
          color={colors.grey}
        >
          {internship.role}
        </Text>
        <Text
          className="internship-duration"
          fontFamily="Ubuntu"
          color={colors.grey}
        >
          {internship.duration.start} – {internship.duration.end}
        </Text>
      </Flex>
    </Flex>
  );
};

export default Internship;
