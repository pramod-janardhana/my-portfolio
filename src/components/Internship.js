import React from "react";
import { Flex } from "@chakra-ui/layout";
import logo from "../drawables/experience/company-logo.svg";
import "./Internship.css";

const Internship = ({ internship }) => {
  const {
    companyName,
    companyLogo,
    role,
    duration: { start, end },
  } = internship;
  console.log({ internship, companyLogo, companyName, start, end });
  return (
    <Flex className="internship">
      <img src={companyLogo} className="intership-company-logo" alt="logo" />
      <Flex className="internship-details">
        <div className="intership-company-name">{companyName}</div>
        <div className="role-at-internship">{role}</div>
        <div className="internship-duration">
          {start} – {end}
        </div>
      </Flex>
    </Flex>
  );
};

export default Internship;
