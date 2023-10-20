import Heading from "./Reused Components/Heading";
import SkillsChart from "./Reused Components/SkillsChart";

import HTML from "../assets/html.png";
import jQuery from "../assets/jquery.png";
import VSCode from "../assets/vscode.png";
import ReactIcon from "../assets/react.png";

import GitLogo from "../assets/git.png";
import GitHublogo from "../assets/github.png";
import GMeet from "../assets/meet.png";
import Zoomlogo from "../assets/zoom.webp";

import CSS from "../assets/css.png";
import BootStrap from "../assets/bootstrap.png";
import JavaScript from "../assets/javascript.png";
import PostMan from "../assets/postman.png";
import WordPress from "../assets/wordpress.png";
import php from "../assets/php.png";
import codeigniter from "../assets/codeigniter.svg";
import laravel from "../assets/laravel-3.svg";
import node from "../assets/nodejs.png";
import mysql from "../assets/mysql.png";
import mongodb from "../assets/mongodb.png";

const Skills = () => {
  return (
    <div className="container bg-white py-5">
      <div className="px-3">
        <Heading name={"Skills"} />
        <div className="about-skills">
          <h6 className="skill-title">Front-End:</h6>
          <div className="skills">
            <div className="skill">
              <img src={ReactIcon} alt="" />
              <p>React</p>
            </div>
            <div className="skill">
              <img src={JavaScript} alt="" />
              <p>JavaScript</p>
            </div>

            <div className="skill">
              <img src={HTML} alt="" />
              <p>HTML5</p>
            </div>
            <div className="skill">
              <img src={CSS} alt="" />
              <p>CSS3</p>
            </div>
            <div className="skill">
              <img src={jQuery} alt="" />
              <p>jQuery</p>
            </div>

            <div className="skill">
              <img src={BootStrap} alt="" />
              <p>Bootstrap</p>
            </div>
          </div>
          <h6 className="skill-title">Back-End :</h6>
          <div className="skills">
            <div className="skill">
              <img src={php} alt="" />
              <p>PHP</p>
            </div>
            <div className="skill">
              <img src={node} alt="" />
              <p>Node Js</p>
            </div>
            <div className="skill">
              <img src={laravel} alt="" />
              <p>Laravel</p>
            </div>
            <div className="skill">
              <img src={codeigniter} alt="" />
              <p>CodeIgniter</p>
            </div>
          </div>
          <h6 className="skill-title">DataBase :</h6>
          <div className="skills">
            <div className="skill">
              <img src={mysql} alt="" />
              <p>mySQL</p>
            </div>
            <div className="skill">
              <img src={mongodb} alt="" />
              <p>Mongodb</p>
            </div>
          </div>

          <h6 className="skill-title">Tools :</h6>
          <div className="skills">
            <div className="skill">
              <img src={GitLogo} alt="" />
              <p>Git</p>
            </div>
            <div className="skill">
              <img src={GitHublogo} alt="" className="bg-black" />
              <p>GitHub</p>
            </div>
            <div className="skill">
              <img src={VSCode} alt="" />
              <p>VS Code</p>
            </div>
            <div className="skill">
              <img src={PostMan} alt="" />
              <p>Postman</p>
            </div>
            <div className="skill">
              <img src={WordPress} alt="" />
              <p>WordPress</p>
            </div>
          </div>
          <h6 className="skill-title">Communication :</h6>
          <div className="skills">
            <div className="skill">
              <img src={GMeet} alt="" />
              <p>Google Meet</p>
            </div>
            <div className="skill">
              <img src={Zoomlogo} alt="" />
              <p>Zoom</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
