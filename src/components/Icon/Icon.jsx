import sprite from "../../assets/icons/sprite.svg";

const Icon = ({ iconName, width, height, fill, stroke }) => {
  return (
    <svg style={{ width, height, fill, stroke }}>
      <use href={`${sprite}#${iconName}`} />
    </svg>
  );
};

export default Icon;
