import React from "react";
import SectionHeadingStyled from "./SectionHeadingStyled";

interface HeadingProps {
  frontTxt: string;
  backgroundTxt: string;
}

const SectionHeading = ({
  frontTxt,
  backgroundTxt,
}: HeadingProps): React.ReactElement => {
  return (
    <SectionHeadingStyled>
      <span className="front-txt">{frontTxt}</span>
      <span className="bg-txt">{backgroundTxt}</span>
    </SectionHeadingStyled>
  );
};

export default SectionHeading;
