import React from "react";
import { Flex, Box } from "@chakra-ui/layout";
import { Grid, GridItem } from "@chakra-ui/react";
import colors from "../consts.js";
import "./card.css";

const Card = ({ title, skills }) => {
  return (
    <Flex className="skill">
      <Box className="group" color={colors.blue}>
        {title}
      </Box>
      <Grid
        className="card-grid"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(2, 1fr)"
        gap="4px"
      >
        {skills.map((skill) => (
          <GridItem
            className="my-skill"
            color={colors.blue}
            // fontFamily="Courgette"
            // fontSize="32px"
            // lineHeight="40px"
          >
            {skill}
          </GridItem>
        ))}
      </Grid>
    </Flex>
  );
};

export default Card;
