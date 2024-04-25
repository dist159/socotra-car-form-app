"use client";

import { SelectHTMLAttributes, useState } from "react";
import "./selector.styles.scss";

interface InputProps extends SelectHTMLAttributes<HTMLSelectElement> {
  readonly title: string;
  readonly options: string[];
}

const Selector = (props: InputProps) => {
  const { title, options } = props;

  return (
    <div className="selector-container">
      <label className="">
        {title}
      </label>
      <select
        defaultValue={""}
        {...props}
        className=""
      >
        <option value="" disabled className="">
          Select
        </option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Selector;
