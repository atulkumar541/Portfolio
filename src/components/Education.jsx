import ExpericnceList from "./Reused Components/ExpericnceList";
import Heading from "./Reused Components/Heading";
import { FaArrowRight } from "react-icons/fa";
const Education = () => {
  const Lists = [
    {
      designation: "Master In Computer Application (MCA)",
      company_name: "L.B.H.S.S. Trust's INSTITUTE OF COMPUTER APPLICATION",
      university: "Mumbai University",
      start_year: "2017",
      end_year: "2020",
    },
    {
      designation: "Bacholer Of Computer Application (BCA)",
      company_name: "Shailendra Education Society",
      university: "Tilak Maharashtra Vidyapeeth, Pune University",
      start_year: "2013",
      end_year: "2016",
    },
    {
      designation: "HSC",
      company_name: "Sheth Gopalji Hemraj High School",
      university: "Mumbai University",
      start_year: "2010",
      end_year: "2012",
    },
  ];
  return (
    <div className="container bg-white py-5">
      <div className="row px-3">
        <Heading name={"Education"} />
        <div className="col-12">
          <div className="border-left border-primary pt-2 pl-4 ml-2">
            {Lists?.map((list) => (
              <ExpericnceList
                key={list.degree}
                designation={list.designation}
                company_name={list.company_name}
                start_year={list.start_year}
                end_year={list.end_year}
                university={list.university}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
