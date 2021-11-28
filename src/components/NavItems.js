const smoothScrollOptions = {
  activeClass: "active",
  spy: true,
  smooth: true,
  offset: -70,
  duration: 1000,
};

const NavItems = [
  {
    to: "skills-head",
    text: "Skills",
    ...smoothScrollOptions,
  },
  {
    to: "experience-head",
    text: "Experince",
    ...smoothScrollOptions,
  },
  {
    to: "certifications-head",
    text: "Projects",
    ...smoothScrollOptions,
  },
  {
    to: "certifications-head",
    text: "Certificates",
    ...smoothScrollOptions,
  },
];

export default NavItems;
