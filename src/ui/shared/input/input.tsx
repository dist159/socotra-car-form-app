"use client";

import { InputHTMLAttributes } from "react";
import "./input.styles.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  readonly title: string;
  readonly className?: string;
}

const Input = (props: InputProps) => {
  const { title, className } = props;
  return (
    <div className={`input-item ${className ? className : ""}`}>
      <div>{title}</div>
      <input {...props} />
    </div>
  );
};

export default Input;
