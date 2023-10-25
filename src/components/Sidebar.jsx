import { FaTwitter, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";
import TypeText from "./TypeText";
import resume from "../../public/resume/AtulkumarChaturvediResume.pdf";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-text d-flex flex-column h-100 justify-content-center text-center ">
        <img
          className="w-100 img-fluid mb-5 sidebar_image"
          src="images/profileImage-bg.png"
          alt="Atulkumar Chaturvedi"
        />
        <h1 className="mt-2 chachterSpan">
          I'm Atulkumar <span>Chaturvedi</span>
        </h1>
        <div className="mb-4">
          <h4 className="typed-text-output d-inline-block text-body">as a..</h4>
          <div className="typed-text">
            <TypeText />
          </div>
        </div>
        <div className="d-flex justify-content-center mt-auto mb-3 social-image">
          <a className="mx-2" href="https://github.com/atulkumar541">
            <img
              className="w-100 img-fluid mb-5"
              src="social/icons8-github.svg"
              alt="Git hub"
            />
          </a>
          <a
            className="mx-2"
            href="https://www.linkedin.com/in/atulkumar-chaturvedi/"
          >
            <img
              className="w-100 img-fluid mb-5"
              src="social/icons8-linkedin-480.svg"
              alt="Linkedin"
            />
          </a>
          <a className="mx-2" href="https://twitter.com/atulkumar_541">
            <img
              className="w-100 img-fluid mb-5"
              src="social/icons8-twitter-circled.svg"
              alt="Twitter"
            />
          </a>
          <a className="mx-2" href="https://www.instagram.com/atulkumar_541/">
            <img
              className="w-100 img-fluid mb-5"
              src="social/icons8-instagram.svg"
              alt="Instagram"
            />
          </a>
        </div>
        <div className="d-flex align-items-end justify-content-between">
          <a
            download
            href="../../public/resume/AtulkumarChaturvediResume.pdf"
            className="btn btn-block border-right"
          >
            Download CV
          </a>
          <a
            href="mailto:chaturvediatulkumar541@gmail.com"
            className="btn btn-block btn-scroll"
          >
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
