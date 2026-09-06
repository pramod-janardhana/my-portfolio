export const education = {
    school: "Dayananda Sagar Institutions",
    degree: "B.E., Computer & Information Sciences",
    period: "2017 — 2021",
    cgpa: "8.81",
};

export type Certification = { title: string; issuer: string; date: string };

export const certifications: Certification[] = [
    { title: "Certified Cloud Practitioner", issuer: "AWS", date: "2024" },
    { title: "Go (Intermediate)", issuer: "HackerRank", date: "2022" },
    { title: "Java", issuer: "HackerRank", date: "2020" },
    { title: "Python", issuer: "NPTEL", date: "2019" },
    { title: "SQL", issuer: "NPTEL", date: "2019" },
];
