import React from "react";
import { Link } from "react-scroll";
import {
  Flex,
  Spacer,
  Box,
  Menu,
  MenuButton,
  Portal,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";

const Hamburger = () => {
  return (
    <Box id="hamburger-menu">
      <Menu>
        <MenuButton mr="4vw">Open menu</MenuButton>
        <Portal>
          <MenuList>
            <Link className="top-nav-link">Menu 1</Link>
            <MenuItem className="top-nav-link">New Window</MenuItem>
            <MenuItem className="top-nav-link">Open Closed Tab</MenuItem>
            <MenuItem className="top-nav-link">Open File</MenuItem>
          </MenuList>
        </Portal>
      </Menu>
    </Box>
  );
};
