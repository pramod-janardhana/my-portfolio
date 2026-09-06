// Single source of truth for the portfolio. Edit content in the section files;
// this barrel keeps the `@/lib/portfolio` import surface stable.
// Placeholder values drawn from Pramod's public profiles — refine later.
// Recommendations are placeholders until real LinkedIn quotes are added.

export { profile } from "./profile";
export { metrics } from "./metrics";
export { principles, type Principle } from "./principles";
export { stack, type StackGroup } from "./stack";
export {
    experience,
    type Role,
    type CompanyProject,
    type Company,
} from "./experience";
export { caseStudies, type CaseStudy } from "./case-studies";
export { recommendations, type Recommendation } from "./recommendations";
export { milestones } from "./milestones";
export { education, certifications, type Certification } from "./education";
export { sections } from "./navigation";
export { systemDiagram, type DiagramNode } from "./system-diagram";
