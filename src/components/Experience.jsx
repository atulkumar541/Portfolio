import ExpericnceList from "./Reused Components/ExpericnceList";
import Heading from "./Reused Components/Heading";
import { FaArrowRight } from "react-icons/fa";

const Experience = () => {
  const Lists = [
    {
      designation: "Software Engineer",
      company_name: "INNsight Interactive Pvt. Ltd.",
      start_year: "03/2022",
      end_year: "Present",
      desc: [
        {
          para: "Worked and learned how Booking Engine works.",
        },
        {
          para: "Worked on API for mobile application.",
        },
        {
          para: "Develop and implement modules based on application/system requirements.",
        },
        {
          para: "Developed and implement the tools which increased the level of automation.",
        },
      ],
    },
    {
      designation: "Website Developer",
      company_name: "Kubic Technology",
      start_year: "01/2021",
      end_year: "03/2022",
      desc: [
        {
          para: "Strengthen Core PHP and PHP OOP concepts.",
        },
        {
          para: "Develop and implement web applications based on client requirements.",
        },
        {
          para: "Developed new software/website functionalities, ensure the clients vision and requrements where met.",
        },
      ],
    },
    {
      designation: "Web Designer",
      company_name: "K2S2 Digistrat Solutions Pvt. Ltd.",
      start_year: "01/2020",
      end_year: "01/2021",
      desc: [
        {
          para: "Assisted senior developers in creating and maintaining web applications.",
        },
        {
          para: "Participated in coding, debugging, and testing web projects.",
        },
        {
          para: "Collaborated with the team to implement responsive and user-friendly designs.",
        },
      ],
    },
  ];

  return (
    <div className="container bg-white py-5">
      <div className="row px-3">
        <Heading name={"Expericence"} />
        <div className="col-12">
          <div className="border-left border-primary pt-2 pl-4 ml-2">
            {Lists?.map((list) => (
              <ExpericnceList
                key={list.company_name}
                designation={list.designation}
                company_name={list.company_name}
                start_year={list.start_year}
                end_year={list.end_year}
                desc={list.desc}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
