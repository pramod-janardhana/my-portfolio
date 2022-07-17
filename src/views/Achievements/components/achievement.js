import React from "react";
import { Box, Text } from "@chakra-ui/react";
import colors from "../consts";
import "./achievement.css";

const Achievement = ({ myAchievement }) => {
  return (
    <Box className="achievement">
      <Text
        fontFamily="Ubuntu"
        fontSize="26px"
        fontWeight="300"
        color={colors.white}
      >
        {myAchievement}
      </Text>
    </Box>
  );
};

export default Achievement;
