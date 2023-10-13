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
            Extremely motivated to constantly develop my skills and grow
            professionally. I am confident in my ability to come up with new
            ideas and enhance my developement skills.
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
