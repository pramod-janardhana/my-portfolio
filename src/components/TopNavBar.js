import React from "react";
import { Link } from "react-scroll";
import { Flex, Box } from "@chakra-ui/react";
import NavItems from "./NavItems";
import MyDrawer from "./Drawer";
import "./TopNavBar.css";

const TopNavBar = () => {
  window.onresize = () => {
    if (window.screen.width <= 750) {
      document.getElementById("top-nav").style.height = "60px";
    } else {
      if (window.pageYOffset > 100) {
        document.getElementById("top-nav").style.height = "80px";
      } else {
        document.getElementById("top-nav").style.height = "100px";
      }
    }
  };

  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    if (window.screen.width > 750) {
      if (window.pageYOffset > 100) {
        document.getElementById("top-nav").style.height = "80px";
      } else {
        document.getElementById("top-nav").style.height = "100px";
      }
    }

    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("top-nav").style.top = "0";
    } else {
      document.getElementById("top-nav").style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
  };

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
      <MyDrawer />
    </Flex>
  );
};

export default TopNavBar;
