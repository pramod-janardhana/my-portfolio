import React from "react";
import { Flex } from "@chakra-ui/react";
import checkMark from "../drawables/skills/check-mark.svg";
import "./Skill.css";

const Skill = ({ mySkill }) => {
  return (
    <Flex className="skill">
      <div className="check-mark">
        <img src={checkMark} alt="check mark" />
      </div>
      <div className="my-skill">{mySkill}</div>
    </Flex>
  );
};

export default Skill;
