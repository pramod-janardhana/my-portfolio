import React from "react";
import { Flex } from "@chakra-ui/react";
import { Grid, GridItem, Box } from "@chakra-ui/react";
import Card from "./component/card";
import colors from "./consts";
import "./skills.css";

function Skills() {
  const frontendSkills = ["React JS", "", "UI Design"];

  const devopsSkills = ["Docker", "Git", "Kubernetes"];
  const backendSkills = ["Django and Flask", "Golang (Gin/Mux)", "Node JS"];

  const groupFrontend = <Card title={"Frontend"} skills={frontendSkills} />;
  const groupDevops = <Card title={"DevOps"} skills={devopsSkills} />;
  const groupBackend = (
    <Flex
      bg={colors.blue}
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Box fontFamily="Special Elite" fontSize="108px" color={colors.white}>
        Backend
      </Box>
      <Flex flexDirection="column">
        {backendSkills.map((skill) => (
          <Box
            color={colors.white}
            fontFamily="Courgette"
            fontSize="42px"
            textAlign="center"
          >
            {skill}
          </Box>
        ))}
      </Flex>
    </Flex>
  );

  return (
    <>
      <Flex id="skills-head">
        <>
          <div id="skills-title">SKILLS</div>
          <div id="skills-sub-title">THAT MATTER</div>
        </>
      </Flex>

      <Grid
        id="skills-body"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(2, 1fr)"
        gap={4}
        bg={colors.blue}
      >
        <GridItem colSpan={1}>{groupFrontend}</GridItem>
        <GridItem colSpan={1} rowSpan={2}>
          {groupBackend}
        </GridItem>
        <GridItem colSpan={1}>{groupDevops}</GridItem>
      </Grid>

      {/* <Flex id="skills-body">
        <Flex 
        id="col1"
        flexDirection="column">
          {groupFrontend}
          {groupDevops}
        </Flex>
        <Flex id="col2">
          {groupBackend}
        </Flex>
      </Flex> */}
    </>
  );
}

export default Skills;
