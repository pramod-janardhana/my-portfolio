import React from "react";
import { Flex, Image, Text } from "@chakra-ui/react";
import logo from "../../../drawables/experience/company-logo.svg";
import colors from "../consts";
import "./Internship.css";

const Internship = ({ internship }) => {
  internship = {
    companyName: "Betsol",
    companyLogo: logo,
    role: "Android developer intern",
    duration: { start: "Dec 2019", end: "Jan 2020" },
  };
  const {
    companyName,
    companyLogo,
    role,
    duration: { start, end },
  } = internship;
  console.log({ internship, companyLogo, companyName, start, end });
  return (
    <Flex className="internship" bg={colors.white} borderRadius={8}>
      <Image src={companyLogo} className="intership-company-logo" alt="logo" />
      <Flex className="internship-details">
        <Text
          className="intership-company-name"
          fontFamily="Ubuntu"
          fontWeight="700"
          color={colors.darkPurpul}
        >
          {companyName}
        </Text>
        <Text
          className="role-at-internship"
          fontFamily="Ubuntu"
          color={colors.grey}
        >
          {role}
        </Text>
        <Text
          className="internship-duration"
          fontFamily="Ubuntu"
          color={colors.grey}
        >
          {start} – {end}
        </Text>
      </Flex>
    </Flex>
  );
};

export default Internship;
