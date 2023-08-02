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
      <h2>{heading}</h2>
      <div className="card-info">
        <span className="year">{year}</span> {where}
      </div>
      <div className="card-description">{description}</div>
    </CardStyled>
  );
};

export default Card;
