import { Skill } from "./skillsData";

interface DigitalSkillsProps {
  skills: Skill[];
  title?: string;
}

export default function DigitalSkills({ skills, title = "Digital Skills" }: DigitalSkillsProps) {
  const renderRatingDots = (rating: number) => {
    const dots = [];
    for (let i = 1; i <= 10; i++) {
      dots.push(
        <div
          key={i}
          className={`w-3 h-3 rounded-full ${
            i <= rating ? "bg-orange" : "bg-gray-300"
          }`}
        />
      );
    }
    return dots;
  };

  return (
    <div className="pb-5">
      <h3 className="text-xl font-semibold text-gray-600 mb-4 pb-2 inline-block relative">
        {title}
        <div className="absolute bottom-0 left-0 w-1/4 h-0.5 bg-green"></div>
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`flex items-center ${
              skill.fullSpan ? "md:col-span-2" : ""
            }`}
          >
            <span className="text-sm font-medium text-gray-600 w-40">
              {skill.name}
            </span>
            <div className="flex gap-1">
              {renderRatingDots(skill.rating)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 