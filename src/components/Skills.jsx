import Heading from "./Reused Components/Heading";
import SkillsChart from "./Reused Components/SkillsChart";

const Skills = () => {
  const skills = [
    {
      skill: "React Js",
      parcentage: "90",
      color: "bg-primary",
    },
    {
      skill: "Node Js",
      parcentage: "70",
      color: "bg-warning",
    },
    {
      skill: "MongoDB",
      parcentage: "65",
      color: "bg-info",
    },
    {
      skill: "Express",
      parcentage: "82",
      color: "bg-dark",
    },
    {
      skill: "Html/Css",
      parcentage: "90",
      color: "bg-danger",
    },
    {
      skill: "PHP",
      parcentage: "77",
      color: "bg-primary",
    },
  ];

  return (
    <div className="container bg-white py-5">
      <div className="row px-3">
        <Heading name={"Skills"} />
        <div className="row">
          {skills?.map((skill) => (
            <SkillsChart
              key={skill.skill}
              skill={skill.skill}
              color={skill.color}
              parcentage={skill.parcentage}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
