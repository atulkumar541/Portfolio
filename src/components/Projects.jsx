import { FaPlus } from "react-icons/fa";
import Heading from "./Reused Components/Heading";
const Projects = () => {
  return (
    <div id="projectSection">
      <div className="container bg-white pt-5 pb-3">
        <div className="row px-3">
          <Heading name={"Projects"} />

          <div className="col-12">
            <div className="row portfolio-container">
              <div className="col-md-6 mb-4 portfolio-item first">
                <div className="position-relative overflow-hidden mb-2">
                  <img
                    className="img-fluid w-100"
                    src="portfolio/maritimeeconomy.png"
                    alt="The Maritime Economy Publications"
                  />
                  <div className="portfolio-btn d-flex align-items-center justify-content-center">
                    <a
                      rel="nofollow noopener noreferrer"
                      target="_blank"
                      href="https://www.maritimeeconomy.com/"
                    >
                      <i className="text-white">
                        <FaPlus size={45} />
                      </i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-4 portfolio-item second">
                <div className="position-relative overflow-hidden mb-2">
                  <img
                    className="img-fluid w-100"
                    src="portfolio/cracindia.png"
                    alt="CracIndia"
                  />
                  <div className="portfolio-btn d-flex align-items-center justify-content-center">
                    <a
                      rel="nofollow noopener noreferrer"
                      target="_blank"
                      href="https://cracindia.in/"
                    >
                      <i className="text-white">
                        <FaPlus size={45} />
                      </i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-4 portfolio-item first">
                <div className="position-relative overflow-hidden mb-2">
                  <img
                    className="img-fluid w-100"
                    src="portfolio/MaritimeTransportLogistics.png"
                    alt="Maritime Transport & Logistics"
                  />
                  <div className="portfolio-btn d-flex align-items-center justify-content-center">
                    <a
                      rel="nofollow noopener noreferrer"
                      target="_blank"
                      href="https://www.maritimetransport-india.com/"
                    >
                      <i className="text-white">
                        <FaPlus size={45} />
                      </i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
