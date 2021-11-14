import React from "react";
import { Flex, Box } from "@chakra-ui/layout";
import ReactRoundedImage from "react-rounded-image";
import logo from "../drawables/experience/company-logo.svg";
import "./Fulltime.css";

const Fulltime = () => {
  return (
    <>
      <Flex className="fulltime">
        <div className="fulltime-company-logo">
          <ReactRoundedImage
            image={logo}
            imageWidth="200"
            roundedColor="#B15367"
            roundedSize="2"
          />
        </div>
        <Flex className="fulltime-details">
          <div className="fulltime-company-name">BETSOL</div>
          <div className="role-at-fulltime">Software Engineer Intern</div>
          <div className="fulltime-duration">Mar 2021 – Jun 2021</div>
        </Flex>
      </Flex>
      <hr className="fulltime-item-dividor" />
    </>
  );
};

export default Fulltime;
