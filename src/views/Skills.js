import React from "react";
import { Flex } from "@chakra-ui/react";
import Skill from "../components/Skill";
import "./Skills.css";

function Skills() {
  const skills = [
    "ANDROID DEV",
    "DJANGO / FLASK",
    "REACT JS",
    "UI DESIGN",
    "DOCKER",
    "GIT",
  ];

  const mySkills = skills.map((skill) => <Skill mySkill={skill} />);

  return (
    <>
      <Flex id="skills-head">
        <div id="skills-title">SKILLS</div>
        <div id="skills-sub-title">THAT MATTER</div>
      </Flex>
      <Flex id="skills-body">{mySkills}</Flex>
    </>
  );
}

export default Skills;
