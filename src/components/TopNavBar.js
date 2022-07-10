import React from "react";
import { Image } from "@chakra-ui/image";
import { Link } from "react-scroll";
import { Flex, Box } from "@chakra-ui/react";
import NavItems from "./NavItems";
import MyDrawer from "./Drawer";
import Logo from "../drawables/navbar/logo.svg";
import "./TopNavBar.css";

const TopNavBar = () => {
  try {
    window.onresize = () => {
      if (window.innerWidth <= 750) {
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
      if (window.innerWidth > 750) {
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
  } catch (e) {
    console.log("error loading component");
  }

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
        <img id="logo-icon" src={Logo} alt="logo" />
        Pramod
      </Link>
      <Flex
        id="horizontal-menu"
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
      >
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
      </Flex>
      <MyDrawer />
    </Flex>
  );
};

export default TopNavBar;
