export interface Skill {
  name: string;
  rating: number; // 1-10 rating
  fullSpan?: boolean; // Whether this skill should span full width on medium+ screens
}

export const digitalSkills: Skill[] = [
  {
    name: "Google BigQuery",
    rating: 7,
  },
  {
    name: "SQL",
    rating: 7,
  },
  {
    name: "Google Analytics",
    rating: 6,
  },
  {
    name: "Meta Advertising Manager",
    rating: 10,
  },
  {
    name: "Microsoft Office",
    rating: 9,
  },
  {
    name: "HTML/CSS",
    rating: 4,
  },
  {
    name: "Salesforce Commerce Cloud",
    rating: 6,
    fullSpan: true,
  },
]; 