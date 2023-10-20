import { FaArrowRight } from "react-icons/fa";
import { FaRegCircleDot } from "react-icons/fa6";

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
      <div className="d-inline-flex align-items-baseline gap-5 ">
        <ul className="desc-list">
          {descs?.map((desc) => (
            <li key={desc.head}>
              <i className="text-primary">
                <FaRegCircleDot />
              </i>
              <p>{desc.para}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExpericnceList;
