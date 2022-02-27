import React from "react";
import { Flex, Box } from "@chakra-ui/layout";
import colors from "../consts.js";
import "./backend.css";

const Backend = ({ title, skills }) => {
  //   const backendSkills = ["Django and Flask", "Golang (Gin/Mux)", "Node JS"];

  return (
    <Flex
      id="backend-skill"
      bg={colors.blue}
      //   flexDirection="column"
      //   justifyContent="center"
      //   alignItems="center"
    >
      <Box
        id="group"
        fontFamily="Special Elite"
        // fontSize="108px"
        color={colors.white}
      >
        {title}
      </Box>
      <Flex flexDirection="column">
        {skills.map((skill) => (
          <Box
            className="my-backend-skill"
            color={colors.white}
            fontFamily="Courgette"
            // fontSize="42px"
            // textAlign="center"
          >
            {skill}
          </Box>
        ))}
      </Flex>
    </Flex>
  );
};

export default Backend;
