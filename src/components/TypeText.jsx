import { TypeAnimation } from "react-type-animation";

const TypeText = () => {
  return (
    <TypeAnimation
      sequence={[
        "Web Developer", // Types 'One'
        1000, // Waits 1s
        "Software Engineer", // Deletes 'One' and types 'Two'
        2000, // Waits 2s
        "Mern Stack Developer", // Types 'Three' without deleting 'Two'
        3000, // Waits 2s
        "Full Stack Developer", // Types 'Three' without deleting 'Two'
        () => {
          console.log("Sequence completed");
        },
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: "2em", display: "inline-block" }}
    />
  );
};

export default TypeText;
