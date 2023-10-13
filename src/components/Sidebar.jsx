import { FaTwitter, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";
import TypeText from "./TypeText";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-text d-flex flex-column h-100 justify-content-center text-center sidebar_image">
        <img
          className="w-100 img-fluid mb-4"
          src="images/profileImage.png"
          alt="Atulkumar Chaturvedi"
        />
        <h1 className="mt-2 chachterSpan">
          Atulkumar <span>Chaturvedi</span>
        </h1>
        <div className="mb-4">
          <h4 className="typed-text-output d-inline-block text-body"></h4>
          <div className="typed-text">
            <TypeText />
          </div>
        </div>
        <div className="d-flex justify-content-center mt-auto mb-3">
          <a className="mx-2" href="#">
            <i>
              <FaGithub size={20} />
            </i>
          </a>
          <a className="mx-2" href="#">
            <i>
              <FaLinkedin size={20} />
            </i>
          </a>
          <a className="mx-2" href="#">
            <i>
              <FaTwitter size={20} />
            </i>
          </a>
          <a className="mx-2" href="#">
            <i>
              <FaInstagram size={20} />
            </i>
          </a>
        </div>
        <div className="d-flex align-items-end justify-content-between">
          <a href="" className="btn btn-block border-right">
            Download CV
          </a>
          <a href="#contact" className="btn btn-block btn-scroll">
            Contact Me
          </a>
        </div>
      </div>
      <div className="sidebar-icon d-flex flex-column h-100 justify-content-center text-right">
        <i className="fas fa-2x fa-angle-double-right text-primary"></i>
      </div>
    </div>
  );
};

export default Sidebar;
