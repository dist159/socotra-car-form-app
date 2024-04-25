import { ButtonHTMLAttributes } from "react";
import "./button.styles.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  readonly text: string;
  readonly secondary?: boolean;
  readonly removeoutline?: boolean;
}

const Button = (props: ButtonProps) => {
  const { text, secondary, removeoutline, ...defaultProps } = props;
  return (
    <button
      className={`button ${secondary ? "button-secondary" : ""} ${
        removeoutline ? "remove-outline" : ""
      } `}
      {...defaultProps}
    >
      <p>{text}</p>
    </button>
  );
};

export default Button;
