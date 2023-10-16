import { FaArrowRight } from "react-icons/fa";

const ExpericnceList = (props) => {
  // console.log(props);
  const descs = props.desc;
  return (
    <div className="position-relative mb-4">
      <i
        className="text-primary position-absolute"
        style={{ top: "3px", left: "-24px" }}
      >
        <FaArrowRight />
      </i>
      <h4 className="mb-1">{props.designation}</h4>
      <p className="mb-2">
        {props.company_name} | &nbsp;
        <small>
          {props.start_year} - {props.end_year}
        </small>
      </p>
      {descs?.map((desc) => (
        <div
          key={desc.head}
          className="d-inline-flex align-items-baseline gap-5 "
        >
          <h6>{desc.head} : </h6>
          <p>{desc.para}</p>
        </div>
      ))}
    </div>
  );
};

export default ExpericnceList;
