import React from "react";
import { Flex, Text } from "@chakra-ui/layout";
import ReactRoundedImage from "react-rounded-image";
import logo from "../../../drawables/experience/betsol-logo.svg";
import colors from "../consts";
import "./Fulltime.css";

const Fulltime = ({fulltime}) => {
  return (
    <>
      <Flex className="fulltime">
        {/* <div className="fulltime-company-logo">
          <ReactRoundedImage
            image={logo}
            imageWidth="200"
            roundedColor="#B15367"
            roundedSize="2"
          />
        </div> */}
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
      {/* <hr className="fulltime-item-dividor" /> */}
    </>
  );
};

export default Fulltime;
