import React from "react";
import { Flex, Text } from "@chakra-ui/layout";
import ReactRoundedImage from "react-rounded-image";
import logo from "../../../drawables/experience/company-logo.svg";
import colors from "../consts";
import "./Fulltime.css";

const Fulltime = () => {
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
            fontFamily="Bungee"
            color={colors.white}
          >
            BETSOL
          </Text>
          <Text
            className="role-at-fulltime"
            fontFamily="Patrick Hand"
            color={colors.white}
          >
            Software Engineer Intern
          </Text>
          <Text
            className="fulltime-duration"
            fontFamily="Patrick Hand"
            color={colors.white}
          >
            Mar 2021 – Jun 2021
          </Text>
        </Flex>
      </Flex>
      {/* <hr className="fulltime-item-dividor" /> */}
    </>
  );
};

export default Fulltime;
