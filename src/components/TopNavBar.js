import React from "react";
import { Link } from "react-scroll";
import {
  Flex,
  Box,
  Menu,
  MenuButton,
  Portal,
  MenuList,
  MenuItem,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import NavItems from "./NavItems";
import "./TopNavBar.css";

const TopNavBar = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Flex id="top-nav">
      <Link
        id="logo"
        activeClass="active"
        to="about-section"
        spy={true}
        smooth={true}
        offset={-70}
        duration={1000}
        onClick={() => {
          if (isOpen) onToggle();
        }}
      >
        Pramod
      </Link>
      <Box id="horizontal-menu">
        {NavItems.map((item) => (
          <Link
            className="top-nav-link"
            activeClass={item.activeClass}
            to={item.to}
            spy={item.spy}
            smooth={item.smooth}
            offset={item.offset}
            duration={item.duration}
          >
            {item.text}
          </Link>
        ))}
      </Box>
      <Box id="hamburger-menu">
        <Menu closeOnSelect={false} isOpen={isOpen}>
          <MenuButton
            mr="4vw"
            as={IconButton}
            icon={<HamburgerIcon color="white" boxSize="2em" />}
            border="none"
            w="30px"
            h="30px"
            bg="inherit"
            onClick={onToggle}
          />
          <Portal>
            <MenuList w="98vw" padding="1vw">
              {NavItems.map((item) => (
                <MenuItem
                  border="none"
                  padding="1vw"
                  alignItems="center"
                  justifyContent="center"
                  bg="#000"
                  opacity="0.95"
                >
                  <Link
                    className="hamburger-nav-link"
                    activeClass={item.activeClass}
                    to={item.to}
                    spy={item.spy}
                    smooth={item.smooth}
                    offset={item.offset}
                    duration={item.duration}
                    onClick={onToggle}
                  >
                    {item.text}
                  </Link>
                </MenuItem>
              ))}
            </MenuList>
          </Portal>
        </Menu>
      </Box>
    </Flex>
  );
};

export default TopNavBar;
