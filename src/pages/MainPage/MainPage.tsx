import pic from "/me.avif";
import cv from "/shaposhnik.pdf";
import MainPageStyled from "./MainPageStyled";
import { education, experience } from "../../resume";
import Button from "../../components/Button/Button";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import { useNavigate } from "react-router-dom";
import Card from "../../components/Card/Card";
import Footer from "../../components/Footer/Footer";
import { HashLink } from "react-router-hash-link";
import { ReactComponent as TopSVG } from "../../assets/top1.svg";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const MainPage = (): React.ReactElement => {
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const navigate = useNavigate();
  const handleDownloadCV = () => {
    window.open(cv, "_blank");
  };

  const { ref, inView } = useInView();
  const { ref: bottomRef, inView: hitBottom } = useInView();

  useEffect(() => {
    if (hitBottom) {
      setIsFirstLoad(false);
    }
  }, [hitBottom]);

  const handleTalkClick = () => {
    navigate("/contact");
  };

  return (
    <MainPageStyled>
      <HashLink smooth to="/#top" className={inView ? "top-link" : "hide"}>
        Top
        <TopSVG />
      </HashLink>
      <section id="about" className="about-area">
        <div className="about-heading">
          <span>Hello</span>
          <span className="name ">Sergey Shaposhnik</span>
          <p>
            As a passionate full stack web developer, I thrive on discovering
            innovative solutions that enhance user experiences while crafting
            seamless digital journeys.
          </p>
          <Button text="Download CV" onClick={handleDownloadCV}></Button>
        </div>
        <img src={pic} alt="sergey posing" width={300} height={400} />
      </section>
      <section id="resume" className="resume-area">
        <SectionHeading frontTxt="My qualifications" backgroundTxt="Resume" />
        <div className="resume-section">
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
        </div>
      </section>

      <section
        id="skills"
        className={inView && isFirstLoad ? "skills" : ""}
        ref={ref}
      >
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
            src="https://profilinator.rishav.dev/skills-assets/angularjs-original.svg"
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
      <section className="contact-area" ref={bottomRef}>
        <h2>Interested to Work With Me?</h2>
        <Button text="LET'S TALK" onClick={handleTalkClick}></Button>
      </section>
      {/* <section className="portfolio">Portfolio</section> */}
      <Footer />
    </MainPageStyled>
  );
};

export default MainPage;
