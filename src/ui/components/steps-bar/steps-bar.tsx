"use client";
import { useSteps } from "@/context/step-context/step.provider";
import "./steps-bar.styles.scss";
import { Fragment } from "react";

const StepsBar = () => {
  const steps = [1, 2, 3, 4];
  const { currentStep } = useSteps();


  return (
    <div className="steps-container">
      {steps.map((step, index) => (
        <Fragment key={index}>
          <div className={`step ${currentStep === step ? "selected" : ""}`}>
            <p>{step}</p>
          </div>
          {index !== steps.length - 1 && <div className="line-divider" />}
        </Fragment>
      ))}
    </div>
  );
};

export default StepsBar;
