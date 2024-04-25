"use client";
import Button from "@/ui/shared/button/button";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "@/context/form-context/form.provider";
import { useSidebar } from "@/context/side-bar/side-bar.provider";
import { useSteps } from "@/context/step-context/step.provider";
import ListItem from "@/ui/shared/list-item/list-item";
import { currencyFormatter } from '@/helpers/currencyFormat';

import "./step-2-container.styles.scss";
import "../steps.styles.scss";

const Step2Container = () => {
  const { state } = useForm();
  const { openSidebar } = useSidebar();
  const router = useRouter();

  const { setStep } = useSteps();

  useEffect(() => {
    setStep(2);
  });

  const openBar = (index: number) => {
    openSidebar("vehicles", { index });
  };

  const _goToNextStep = () => {
    router.push("/car-form/step-3");
  };

  return (
    <div className="main-container">
      <div className="title">Tell us about your vehicle(s)</div>
      {state.vehicles.map((vehicle, index) => (
        <div key={index} onClick={() => openBar(index)}>
          <ListItem
            icon={"car"}
            title={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
            subHeader={`${currencyFormatter(Number(vehicle.value))}`}
          />
        </div>
      ))}

      <div className="items-container">
        <div className="button-container">
          <Button
            secondary={state.vehicles.length !== 0}
            removeoutline={state.vehicles.length !== 0}
            text="+ Add vehicle"
            onClick={() => openBar(-1)}
          />
        </div>
      </div>

      {state.vehicles.length !== 0 && (
        <div className="button-container end">
          <Button text="Continue" onClick={_goToNextStep} />
        </div>
      )}
    </div>
  );
};

export default Step2Container;
