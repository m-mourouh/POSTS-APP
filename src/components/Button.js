import PropTypes from "prop-types";

function Button({color,text,type,onClick}) {
  return (
    <button type={type} className="btn" style={{backgroundColor:color}} onClick={onClick} >{text}</button>
  );
}

Button.defaultProps = {
    color: "red",
    text: "Button"
}

Button.prototypes = {
    color: PropTypes.string,
    text: PropTypes.string,
}

export default Button;
