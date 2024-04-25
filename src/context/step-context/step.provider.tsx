"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface StepsContextType {
  currentStep: number;
  setStep: (step:number) => void;
}


const StepsContext = createContext<StepsContextType | undefined>(undefined);

export const useSteps = () => {
  const context = useContext(StepsContext);
  if (!context) {
    throw new Error("useSteps must be used within a StepProvider");
  }
  return context;
};

export const StepProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <StepsContext.Provider
      value={{
        currentStep,
        setStep: setCurrentStep,
      }}
    >
      {children}
    </StepsContext.Provider>
  );
};
