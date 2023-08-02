import pic from "/SSHtransparent.avif";
import cv from "/CV-Sergey-Shapo.pdf";
import Button from "../Button/Button";
import MainStyled from "./MainStyled";
import Card from "../Card/Card";
import { education, experience } from "../../resume";

const Main = (): React.ReactElement => {
  const handleDownloadCV = () => {
    window.open(cv, "_blank");
  };

  return (
    <MainStyled>
      <section className="about-area">
        <span>Hello</span>
        <span>Sergey Shaposhnik</span>
        <img src={pic} alt="" width={200} />
        <p>A Professional Full Stack Web Developer.</p>
        <Button text="Download CV" onClick={handleDownloadCV}></Button>
      </section>
      <section className="resume-area">
        <h2>
          <span className="qualifications">My qualifications</span>
          <span className="resume">Resume</span>
        </h2>
        <div className="resume-section">
          <div className="education">
            <h2 className="cv-heading">Education</h2>
            <ul>
              {education.map((cv) => (
                <Card
                  key={cv.heading}
                  description={cv.description}
                  heading={cv.heading}
                  rol={cv.rol}
                  year={cv.year}
                ></Card>
              ))}
            </ul>
          </div>
          <div className="experience">
            <h2 className="cv-heading">Experience</h2>
            <ul>
              {experience.map((cv) => (
                <Card
                  key={cv.heading}
                  description={cv.description}
                  heading={cv.heading}
                  rol={cv.rol}
                  year={cv.year}
                ></Card>
              ))}
            </ul>
          </div>
        </div>
      </section>
      {/* <section className="skills">Skills</section>
      <section className="portfolio">Portfolio</section> */}
    </MainStyled>
  );
};

export default Main;
