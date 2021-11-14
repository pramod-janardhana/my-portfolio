import React, { useState, useEffect } from "react";
import LoadingScreen from "react-loading-screen";
import firebaseDB from "../firebase";
import profile from "../drawables/about/profile.svg";
import "./About.css";
import { Flex } from "@chakra-ui/layout";

function About() {
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [company, setCompany] = useState("");

  useEffect(() => {
    firebaseDB.child("about").on("value", (snapshot) => {
      const result = snapshot.val();
      if (result != null) {
        //console.log(result.name);

        setName(result.name);
        setEmail(result.email);
        setRole(result.work.role);
        setCompany(result.work.company);
        setLoading(false); // set loading to false
      }
    });
  }, []);

  return (
    // <LoadingScreen
    // 	loading={loading}
    // 	bgColor='#f1f1f1'
    // 	spinnerColor='#1765cc'
    // 	logoSrc={profile}
    // >
    <Flex id="about-section" justifyContent="center" alignItems="center">
      <img src={profile} id="profile-picture" alt="profile" />
      <Flex id="my-details" justifyContent="flex-start" flexDirection="column">
        <div>
          <div id="name">{name}</div>
          <div id="email">{email}</div>
        </div>
        <div id="role">
          {role} AT <br />
          <span>
            <a href="https://www.betsol.com/" target="_blank">
              {company}
            </a>
          </span>
        </div>
      </Flex>
    </Flex>
    //</LoadingScreen>
  );
}

export default About;
