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
      desc: [
        {
          head: "Booking Engine Experience",
          para: "Worked in-depth with a Booking Engine, gaining valuable insights into its functionality and operations",
        },
        {
          head: "Booking Engine Experience",
          para: "Worked in-depth with a Booking Engine, gaining valuable insights into its functionality and operations",
        },
        {
          head: "Booking Engine Experience",
          para: "Worked in-depth with a Booking Engine, gaining valuable insights into its functionality and operations",
        },
      ],
    },
    {
      designation: "Website Developer",
      company_name: "Kubic Technology",
      start_year: "2020",
      end_year: "2021",
      desc: [
        {
          head: "Booking Engine Experience",
          para: "Worked in-depth with a Booking Engine, gaining valuable insights into its functionality and operations",
        },
        {
          head: "Booking Engine Experience",
          para: "Worked in-depth with a Booking Engine, gaining valuable insights into its functionality and operations",
        },
        {
          head: "Booking Engine Experience",
          para: "Worked in-depth with a Booking Engine, gaining valuable insights into its functionality and operations",
        },
      ],
    },
    {
      designation: "Web Designer",
      company_name: "K2S2 Digistrat Solutions Pvt. Ltd.",
      start_year: "2019",
      end_year: "2020",
      desc: [
        {
          head: "Booking Engine Experience",
          para: "Worked in-depth with a Booking Engine, gaining valuable insights into its functionality and operations",
        },
        {
          head: "Booking Engine Experience",
          para: "Worked in-depth with a Booking Engine, gaining valuable insights into its functionality and operations",
        },
        {
          head: "Booking Engine Experience",
          para: "Worked in-depth with a Booking Engine, gaining valuable insights into its functionality and operations",
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
