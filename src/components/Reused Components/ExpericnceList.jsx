import { FaArrowRight } from "react-icons/fa";

const ExpericnceList = (props) => {
  // console.log(props);
  return (
    <div className="position-relative mb-4">
      <i
        className="text-primary position-absolute"
        style={{ top: "3px", left: "-24px" }}
      >
        <FaArrowRight />
      </i>
      <h5 className="mb-1">{props.designation}</h5>
      <p className="mb-2">
        {props.company_name} | &nbsp;
        <small>
          {props.start_year} - {props.end_year}
        </small>
      </p>
      <p>{props.desc}</p>
    </div>
  );
};

export default ExpericnceList;
