import React from "react";
import { Flex, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import colors from "../consts";
import "./Fulltime.css";

const Fulltime = ({ fulltime }) => {
  return (
    <>
      <Flex className="fulltime" bg={colors.darkPink}>
        <Image
          className="fulltime-company-logo"
          src={fulltime.companyLogo}
          borderRadius="full"
        />
        <Flex className="fulltime-details" bg={colors.darkPink}>
          <Text
            className="fulltime-company-name"
            fontFamily="Ubuntu"
            fontWeight="700"
            color={colors.white}
            letterSpacing="1px"
          >
            {fulltime.companyName}
          </Text>
          <Text
            className="role-at-fulltime"
            fontFamily="Ubuntu"
            color={colors.white}
          >
            {fulltime.role}
          </Text>
          <Text
            className="fulltime-duration"
            fontFamily="Ubuntu"
            color={colors.white}
          >
            {fulltime.duration.start} – {fulltime.duration.end}
          </Text>
        </Flex>
      </Flex>
    </>
  );
};

export default Fulltime;
