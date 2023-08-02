import pic from "/SSHtransparent.avif";
import cv from "/CV-Sergey-Shapo.pdf";
import Button from "../Button/Button";
import MainStyled from "./MainStyled";
import Card from "../Card/Card";
import { education, experience } from "../../resume";
import SectionHeading from "../SectionHeading/SectionHeading";

const Main = (): React.ReactElement => {
  const handleDownloadCV = () => {
    window.open(cv, "_blank");
  };

  return (
    <MainStyled>
      <section className="about-area">
        <span>Hello</span>
        <span className="name">Sergey Shaposhnik</span>
        <img src={pic} alt="" width={200} />
        <p>A Professional Full Stack Web Developer.</p>
        <Button text="Download CV" onClick={handleDownloadCV}></Button>
      </section>
      <section className="resume-area">
        <SectionHeading frontTxt="My qualifications" backgroundTxt="Resume" />
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
      <section className="skills">
        <SectionHeading frontTxt="My Expertise" backgroundTxt="Skills" />
        <div className="skills-container">
          <img
            src="https://profilinator.rishav.dev/skills-assets/typescript-original.svg"
            height={100}
            width={100}
          />
          <img
            src="https://profilinator.rishav.dev/skills-assets/react-original-wordmark.svg"
            height={100}
            width={100}
          />
          <img
            src="https://profilinator.rishav.dev/skills-assets/css3-original-wordmark.svg"
            height={100}
            width={100}
          />
          <img
            src="https://profilinator.rishav.dev/skills-assets/html5-original-wordmark.svg"
            height={100}
            width={100}
          />
          <img
            src="https://profilinator.rishav.dev/skills-assets/javascript-original.svg"
            height={100}
            width={100}
          />
          <img
            src="https://profilinator.rishav.dev/skills-assets/redux-original.svg"
            alt="Redux"
            height={100}
            width={100}
          />
          <img
            src="https://profilinator.rishav.dev/skills-assets/git-scm-icon.svg"
            alt="Git"
            height={100}
            width={100}
          />
          <img
            src="https://profilinator.rishav.dev/skills-assets/nextjs.png"
            alt="NextJS"
            height={100}
            width={100}
          />
          <img
            src="https://profilinator.rishav.dev/skills-assets/tailwindcss.svg"
            alt="Tailwind CSS"
            height={100}
            width={100}
          />
          <img
            src="https://profilinator.rishav.dev/skills-assets/bootstrap-plain.svg"
            alt="Bootstrap"
            height={100}
            width={100}
          />
          <img
            src="https://profilinator.rishav.dev/skills-assets/sass-original.svg"
            alt="Sass"
            height={100}
            width={100}
          />
          <img
            src="https://profilinator.rishav.dev/skills-assets/jest.svg"
            alt="Jest"
            height={100}
            width={100}
          />
          <img
            src="https://profilinator.rishav.dev/skills-assets/figma-icon.svg"
            alt="Figma"
            height={100}
            width={100}
          />
          <img
            src="https://profilinator.rishav.dev/skills-assets/java-original-wordmark.svg"
            alt="Java"
            height={100}
            width={100}
          />
        </div>
      </section>
      {/* <section className="portfolio">Portfolio</section> */}
    </MainStyled>
  );
};

export default Main;
