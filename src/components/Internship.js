import React from "react";
import { Flex } from "@chakra-ui/layout";
import logo from "../drawables/experience/company-logo.svg";
import "./Internship.css";

const Internship = () => {
  return (
    <Flex className="internship">
      <img src={logo} className="intership-company-logo" alt="logo" />
      <Flex className="internship-details">
        <div className="intership-company-name">BETSOL</div>
        <div className="role-at-internship">Software Engineer Intern</div>
        <div className="internship-duration">Mar 2021 – Jun 2021</div>
      </Flex>
    </Flex>
  );
};

export default Internship;
