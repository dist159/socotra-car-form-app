"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "@/context/form-context/form.provider";
import Button from "@/ui/shared/button/button";
import { useSteps } from "@/context/step-context/step.provider";
import Selector from "@/ui/shared/selector/selector";
import { selectorOptions } from "./constants";

import { UserHistory } from "@/interfaces/global";
import { FormActionTypes } from "@/context/form-context/enums";

import "./step-4-container.styles.scss";
import "../steps.styles.scss";

const Step4Container = () => {
  const { dispatch } = useForm();
  const [history, userHistory] = useState<UserHistory>({} as UserHistory);
  const { setStep } = useSteps();
  const router = useRouter();

  useEffect(() => {
    setStep(4);
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement> | any) => {
    const { name, value } = event.target;
    userHistory((prev) => ({
      ...prev,
      [name]: value === "Yes" ? true : false,
    }));
  };

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch({ type: FormActionTypes.SetHistory, payload: history });
    router.push("/results");
  };

  return (
    <form onSubmit={submit} className="main-container">
      <div className="title">Tell us about your Driver(s)</div>
      <div className="items-container">
        {selectorOptions.map((option, index) => (
          <Selector
            key={index}
            {...option}
            options={["Yes", "No"]}
            onChange={handleChange}
            required
          />
        ))}
      </div>
      <div className="button-container end">
        <Button text=" Continue" type="submit" />
      </div>
    </form>
  );
};

export default Step4Container;
