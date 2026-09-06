export type Principle = { title: string; body: string };

// "How I work" — qualities/working style. Edit freely.
export const principles: Principle[] = [
    {
        title: "Review from every angle",
        body: "When I review a problem or a proposed approach, I weigh it on three axes — technical soundness, backward compatibility, and the customer's usability — so a fix in one place doesn't quietly break another.",
    },
    {
        title: "Coach with questions, not answers",
        body: "When teammates ask for suggestions, I lead with questions to surface their own reasoning and guide them to a solution, rather than handing one down. It builds stronger, more independent engineers.",
    },
];
