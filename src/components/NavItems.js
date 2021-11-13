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
    text: "SKILLS",
    ...smoothScrollOptions,
  },
  {
    to: "experience-head",
    text: "EXPERIENCE",
    ...smoothScrollOptions,
  },
  {
    to: "certifications-head",
    text: "PROJECTS",
    ...smoothScrollOptions,
  },
  {
    to: "certifications-head",
    text: "CERTIFICATIONS",
    ...smoothScrollOptions,
  },
];

export default NavItems;
