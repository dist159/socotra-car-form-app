"use client";
import Button from "@/ui/shared/button/button";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "@/context/form-context/form.provider";
import { useSidebar } from "@/context/side-bar/side-bar.provider";
import { useSteps } from "@/context/step-context/step.provider";
import ListItem from "@/ui/shared/list-item/list-item";

import "./step-3-container.styles.scss";
import "../steps.styles.scss";

const Step3Container = () => {
  const { state } = useForm();
  const { setStep } = useSteps();

  useEffect(() => {
    setStep(3);
  });

  const router = useRouter();

  const { openSidebar } = useSidebar();

  const openBar = (index: number) => {
    openSidebar("drivers", { index });
  };

  const goToNextStep = () => {
    router.push("/car-form/step-4");
  };

  return (
    <div className="main-container">
      <div className="title">Tell us about your Driver(s)</div>
      <div className="items-container">
        {state.drivers.map((driver, index) => (
          <div key={index} onClick={() => openBar(index)}>
            <ListItem
              icon={"people"}
              title={`${driver.firstName} ${driver.lastName} `}
              subHeader={`${driver.licenceNumber}`}
            />
          </div>
        ))}
        <div className="items-container">
          <div className="button-container">
            <Button
              secondary={state.drivers.length !== 0}
              removeoutline={state.drivers.length !== 0}
              text="+ Add Driver"
              onClick={() => openBar(-1)}
            />
          </div>
        </div>

        {state.drivers.length !== 0 && (
          <div className="button-container end">
            <Button text="Continue" onClick={goToNextStep} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Step3Container;
