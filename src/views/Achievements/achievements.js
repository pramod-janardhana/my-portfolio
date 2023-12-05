import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { Element } from "react-scroll";

import Achievement from "./components/achievement";
import "./achievements.css";

function Achievements() {
  const achievements = [
    <>{"Received the"} <strong>{"Spot Award"}</strong> {"recognition from"} <strong>{"BETSOL"}</strong> {"in the last quarter of 2021"}</>,
    <>{"Received"} <strong>{"2nd place"}</strong> {"in the Hackathon organized by"} <strong>{"BETSOL"}</strong></>,
    <>{"Received the"} <strong>{"Above and Beyond"}</strong> {"recognition from"} <strong>{"BETSOL"}</strong> {"in the first quarter of 2022"}</>,
    <>{"Received the"} <strong>{"Team Excellence Award"}</strong> {"from"} <strong>{"BETSOL"}</strong> {"in the first quarter of 2022"}</>,
    <>{"Received the"} <strong>{"Above and Beyond"}</strong> {"recognition from"} <strong>{"BETSOL"}</strong> {"in the second quarter of 2023"}</>,
  ];
  const myAchievements = achievements.map((achievement) => (
    <Achievement myAchievement={achievement}/>
  ));

  return (
    <>
      <Flex id="achievements-head">
        <Element name="achievement" />
        <Text id="achievements-title" noOfLines={[1, 2, 3]}>
        ACHIVEMENTS
        </Text>
      </Flex>
      <Flex id="achievements-body">{myAchievements}</Flex>
    </>
  );
}

export default Achievements;
