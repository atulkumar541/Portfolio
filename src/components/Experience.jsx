import ExpericnceList from "./Reused Components/ExpericnceList";
import Heading from "./Reused Components/Heading";
import { FaArrowRight } from "react-icons/fa";

const Experience = () => {
  const Lists = [
    {
      designation: "Software Engineer",
      company_name: "INNsight Interactive Pvt. Ltd.",
      start_year: "2021",
      end_year: "Present",
      desc: "Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit amet dolor eirmod. Eos ipsum est tempor dolor. Clita lorem kasd sed ea lorem diam ea lorem eirmod duo sit ipsum stet lorem diam",
    },
    {
      designation: "Website Developer",
      company_name: "Kubic Technology",
      start_year: "2020",
      end_year: "2021",
      desc: "Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit amet dolor eirmod. Eos ipsum est tempor dolor. Clita lorem kasd sed ea lorem diam ea lorem eirmod duo sit ipsum stet lorem diam",
    },
    {
      designation: "Web Designer",
      company_name: "K2S2 Digistrat Solutions Pvt. Ltd.",
      start_year: "2019",
      end_year: "2020",
      desc: "Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit amet dolor eirmod. Eos ipsum est tempor dolor. Clita lorem kasd sed ea lorem diam ea lorem eirmod duo sit ipsum stet lorem diam",
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
