import React from "react";
import { Flex, Divider } from "@chakra-ui/react";
import "./ExperienceSectionHeader.css";
import colors from "../consts";

const ExperienceSectionHeader = ({ title }) => {
  return (
    <Flex className="experience-section-header">
      <Divider h="4px" bg={colors.white} />
      <div
        className="experience-section-header-title"
        color={colors.white}
        fontFamily="Kaushan Script"
      >
        {title}
      </div>
      <Divider h="4px" bg={colors.white} />
    </Flex>
  );
};

export default ExperienceSectionHeader;
