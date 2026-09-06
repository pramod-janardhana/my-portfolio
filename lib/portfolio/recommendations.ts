export type Recommendation = {
    quote: string;
    points?: string[]; // optional bulleted items shown under the quote
    pointsLabel?: string; // optional heading for the points list
    name: string;
    title: string;
    relation: string;
    source: string; // e.g. "LinkedIn" or "Performance review · 2024"
    kind: "recommendation" | "feedback"; // controls 5.1 vs 5.2 grouping
};

// Recommendations & performance-review feedback. Set `source` per entry.
// Placeholders — replace with the real quotes.
export const recommendations: Recommendation[] = [
    {
        quote:
            "Working with Pramod is an excellent experience. He is well justified of the name we have given him, \"The superstar of GoLang\"! His work ethic, knowledge and problem-solving ability is just something everyone should learn from. And not to mention his rate of delivering APIs would leave no frontend developer including myself waiting or complaining!",
        name: "Sriram G",
        title: "Software Engineer · BETSOL",
        relation: "Worked with Pramod on the same team",
        source: "LinkedIn",
        kind: "recommendation",
    },
    {
        quote:
            "I have had the pleasure of working with Pramod for 1 year, and can confidently say that he is one of the most skilled, reliable, and dedicated individuals I have had the pleasure of working with.\n\nDuring our time working together, Pramod consistently demonstrated a strong work ethic and an unwavering commitment to excellence. He consistently went above and beyond to ensure that projects were completed on time and to the highest standards possible.\n\nOne of Pramod's greatest strengths is his ability to work under pressure. He is always calm and collected in high-stress situations, and is able to think critically and creatively to find solutions to even the most complex problems.\n\nOverall, I strongly recommend Pramod for any role — an exceptional professional who would be an asset to any team fortunate enough to work with him.",
        name: "Manudeep Herle",
        title: "Sr. Software Engineer · BETSOL",
        relation: "Senior to Pramod and worked on the same team",
        source: "LinkedIn",
        kind: "recommendation",
    },
    {
        quote:
            "I had the pleasure of collaborating with Pramod on the Sentinel development project. He is a highly skilled and exceptional developer, serving as a backbone for the Sentinel development team. Pramod's contributions were invaluable, as he consistently demonstrated his excellence as a developer and his active participation as a team player. He supported us throughout every phase of the project.",
        name: "Santhosh Srinivasan",
        title: "Sr. Software Engineer · BETSOL",
        relation: "Senior to Pramod and worked on the same team",
        source: "LinkedIn",
        kind: "recommendation",
    },
    // --- Performance review feedback (replace with real excerpts) ---
    {
        quote:
            "Pramod is aligned with the feedback and motivated to take on the challenge of driving IB's scalability and performance roadmap. He understands the importance of transitioning from a strong IC to a technical leader who can influence system-level improvements.",
        name: "Tuhin Banerjee",
        title: "Sr. Manager - Product development · Lumel",
        relation: "Annual performance review",
        source: "Performance review · 2025",
        kind: "feedback",
    },
    {
        quote:
            "Pramod is an outstanding performer who consistently exceeds expectations. His deep knowledge, exceptional work ethic, and commitment to quality make him invaluable to the team. He successfully balances high-level technical contributions with mentoring responsibilities, making him ready for increased leadership opportunities.",
        pointsLabel: "Strengths to continue",
        points: [
            "Maintain exceptional code quality and optimization focus",
            "Continue grooming new team members and knowledge sharing",
            "Keep driving technical excellence and innovation",
            "Sustain availability for complex technical challenges",
        ],
        name: "Tuhin Banerjee",
        title: "Manager - Product development · Lumel",
        relation: "Mid-year performance review",
        source: "Mid-term performance review · 2025",
        kind: "feedback",
    },
    {
        quote:
            "Excellent performance. Has demonstrated remarkable growth in a short period and made significant contributions across various aspects of product development. Must contribute in enhancing the scalability of our backend modules.",
        name: "Tuhin Banerjee",
        title: "Manager - Product development · Lumel",
        relation: "Annual performance review",
        source: "Performance review · 2024",
        kind: "feedback",
    },
];
