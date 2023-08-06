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
      <section id="about" className="about-area">
        <div className="about-heading">
          <span>Hello</span>
          <span className="name">Sergey Shaposhnik</span>
          <p>A Professional Full Stack Web Developer</p>
          <Button text="Download CV" onClick={handleDownloadCV}></Button>
        </div>
        <img src={pic} alt="sergey posing" width={300} />
      </section>
      <section id="resume" className="resume-area">
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
      <section id="skills" className="skills">
        <SectionHeading frontTxt="My Expertise" backgroundTxt="Skills" />
        <div className="skills-container">
          <img
            src="https://profilinator.rishav.dev/skills-assets/typescript-original.svg"
            alt="TypeScript"
            height={70}
            width={70}
          />
          <img
            src="https://profilinator.rishav.dev/skills-assets/react-original-wordmark.svg"
            alt="React"
            height={70}
            width={70}
          />
          <img
            src="https://profilinator.rishav.dev/skills-assets/css3-original-wordmark.svg"
            alt="CSS3"
            height={70}
            width={70}
          />
          <img
            src="https://profilinator.rishav.dev/skills-assets/html5-original-wordmark.svg"
            alt="HTML5"
            height={70}
            width={70}
          />
          <img
            src="https://profilinator.rishav.dev/skills-assets/javascript-original.svg"
            alt="JavaScript"
            height={70}
            width={70}
          />
          <img
            src="https://profilinator.rishav.dev/skills-assets/redux-original.svg"
            alt="Redux"
            height={70}
            width={70}
          />
          <img
            src="https://profilinator.rishav.dev/skills-assets/git-scm-icon.svg"
            alt="Git"
            height={70}
            width={70}
          />
          <img
            src="https://profilinator.rishav.dev/skills-assets/nextjs.png"
            alt="NextJS"
            height={70}
            width={70}
          />
          <img
            src="https://profilinator.rishav.dev/skills-assets/tailwindcss.svg"
            alt="Tailwind CSS"
            height={70}
            width={70}
          />
          <img
            src="https://profilinator.rishav.dev/skills-assets/bootstrap-plain.svg"
            alt="Bootstrap"
            height={70}
            width={70}
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
            height={70}
            width={70}
          />
          <img
            src="https://profilinator.rishav.dev/skills-assets/figma-icon.svg"
            alt="Figma"
            height={70}
            width={70}
          />
          <img
            src="https://profilinator.rishav.dev/skills-assets/java-original-wordmark.svg"
            alt="Java"
            height={70}
            width={70}
          />
          <img
            src="https://profilinator.rishav.dev/skills-assets/mysql-original-wordmark.svg"
            alt="MySQL"
            height={70}
            width={70}
          />
          <img
            src="https://profilinator.rishav.dev/skills-assets/docker-original-wordmark.svg"
            alt="Docker"
            height={70}
            width={70}
          />
        </div>
      </section>
      {/* <section className="portfolio">Portfolio</section> */}
    </MainStyled>
  );
};

export default Main;
