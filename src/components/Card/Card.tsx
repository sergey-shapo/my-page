import CardStyled from "./CardStyled";

export interface CardProps {
  heading: string;
  year: string;
  rol: string;
  description: string;
}

const Card = ({
  heading,
  rol: where,
  year,
  description,
}: CardProps): React.ReactElement => {
  return (
    <CardStyled>
      <span className="year">{year}</span>
      <h2>{heading}</h2>
      <div className="card-info">{where}</div>
      <div className="card-description">{description}</div>
    </CardStyled>
  );
};

export default Card;
