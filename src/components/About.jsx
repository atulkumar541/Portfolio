import AboutList from "./Reused Components/AboutList";
import Heading from "./Reused Components/Heading";
const About = () => {
  const AboutLists = [
    { heading: "Name", value: "Atulkumar Chaturvedi" },
    { heading: "Birthday", value: "27/12/1996" },
    { heading: "Experince", value: "4+ Years" },
    { heading: "Phone", value: "7208589199" },
    { heading: "Address", value: "Mumbai, Maharashtra, India - 401209" },
    { heading: "Email", value: "chaturvediatulkumar541@gmail.com" },
  ];

  return (
    <div className="container bg-white py-5">
      <div className="row px-3">
        <Heading name={"About Me"} />
        <div className="col-12">
          <p>
            Passionate Software Engineer with a strong foundation in web and
            application development. I thrive on translating complex ideas into
            user-friendly solutions. Proficient in an array of programming
            languages and frameworks, including React and Laravel/CodeIgniter,
            My journey as a developer has taught me the value of collaboration
            and continuous learning, driving me to stay familiar with industry
            trends and best practices. As a Software Engineer, I am highly
            motivated, hardworking, and focused. I am passionate about my work
            and always willing to learn new technologies and constantly push my
            limits to grow and succeed in life.
          </p>
          <div className="row">
            {AboutLists?.map((list) => (
              <AboutList
                key={list.heading}
                heading={list.heading}
                value={list.value}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
