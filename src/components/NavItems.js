import achivementIcon from "../drawables/navbar/achivementIcon.svg";
import certificationIcon from "../drawables/navbar/certificationIcon.svg";
import experienceIcon from "../drawables/navbar/experienceIcon.svg";
import skillsIcon from "../drawables/navbar/skillsIcon.svg";
const smoothScrollOptions = {
  activeClass: "active",
  spy: true,
  smooth: true,
  offset: -10,
  duration: 1000,
};

const NavItems = [
  {
    to: "skills-head",
    text: "Skills",
    icon: skillsIcon,
    ...smoothScrollOptions,
  },
  {
    to: "experience-head",
    text: "Experince",
    icon: experienceIcon,
    ...smoothScrollOptions,
  },
  {
    to: "certifications-head",
    text: "Projects",
    icon: achivementIcon,
    ...smoothScrollOptions,
  },
  {
    to: "certifications-head",
    text: "Certificates",
    icon: certificationIcon,
    ...smoothScrollOptions,
  },
];

export default NavItems;
