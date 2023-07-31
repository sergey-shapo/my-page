import pic from "/SSHtransparent.avif";
import Button from "../Button/Button";
import MainStyled from "./MainStyled";

const Main = (): React.ReactElement => {
  const handleDownloadCV = () => {
    // Replace "Sergey_Shaposhnik_CV.pdf" with the actual name of your CV file
    const cvFile = "/Sergey_Shaposhnik_CV.pdf";
    window.open(cvFile, "_blank");
  };

  return (
    <MainStyled>
      <section className="about">
        <span className="hello">Hello</span>
        <span>I&apos;m Sergey Shaposhnik</span>
        <img src={pic} alt="" width={200} />
        <p>A Professional Full Stack Web Developer.</p>
        <Button text="Download CV" onClick={handleDownloadCV}></Button>
      </section>
      {/* <section className="resume">Resume</section>
      <section className="skills">Skills</section>
      <section className="portfolio">Portfolio</section> */}
    </MainStyled>
  );
};

export default Main;
