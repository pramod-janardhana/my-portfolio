import { Link } from "react-scroll";
import React from "react";
import {
  Image,
  Spacer,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import AboutIcon from "../drawables/navbar/aboutIcon.svg";
import NavItems from "./NavItems";

const MyDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const placement = "right";

  return (
    <>
      <Button
        id="hamburger"
        onClick={onOpen}
        padding="0"
        borderRadius="0"
        _focus={{ outline: "none" }}
      >
        <Box className="line" background="#000000" width="40px" height="5px" />
        <Spacer height="5px" />
        <Box className="line" background="#000000" width="40px" height="5px" />
        <Spacer height="5px" />
        <Box className="line" background="#000000" width="40px" height="5px" />
      </Button>
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <Box height="60px">
            <DrawerCloseButton
              size="lg"
              _focus={{ outline: "none" }}
              padding="4px"
              top="15px"
              right="15px"
              background="white"
              _hover={{ color: "#898383" }}
            />
          </Box>
          <DrawerBody padding="20px">
            <Link
              className="top-nav-link"
              activeClass="active"
              to="about-section"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              onClick={onClose}
              _hover={{ color: "red" }}
            >
              <Image
                src={AboutIcon}
                display="inline"
                paddingRight="8px"
                alt="About"
              />
              About
            </Link>
            <Spacer height="24px" />

            {NavItems.map((item) => (
              <>
                <Link
                  className="top-nav-link"
                  activeClass={item.activeClass}
                  to={item.to}
                  spy={item.spy}
                  smooth={item.smooth}
                  offset={item.offset}
                  duration={item.duration}
                  onClick={onClose}
                >
                  <Image
                    src={item.icon}
                    display="inline"
                    paddingRight="8px"
                    alt={item.text}
                  />
                  {item.text}
                </Link>
                <Spacer height="24px" />
              </>
            ))}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MyDrawer;
