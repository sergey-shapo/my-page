import CheckBoxStyled from "./CheckBoxStyled";

interface CheckBoxProps {
  onChange: () => void;
}

const CheckBox = ({ onChange }: CheckBoxProps): React.ReactElement => {
  return (
    <CheckBoxStyled>
      <input
        type="checkbox"
        className="checkbox"
        id="check"
        onChange={onChange}
      />
      <div className="content">
        <label htmlFor="check" className="label">
          <i className="fab fa-galactic-republic"></i>
          <i className="fab fa-rebel"></i>
          <span className="ball"></span>
        </label>
      </div>
    </CheckBoxStyled>
  );
};

export default CheckBox;
