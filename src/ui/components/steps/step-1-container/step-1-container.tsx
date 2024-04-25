"use client";
import { useEffect, useState } from "react";
import Button from "@/ui/shared/button/button";
import { useRouter } from "next/navigation";
import { useSteps } from "@/context/step-context/step.provider";
import { FormActionTypes } from "@/context/form-context/enums";
import { useForm } from "@/context/form-context/form.provider";

import "./step-1-container.styles.scss";
import "../steps.styles.scss";
import Input from "@/ui/shared/input/input";

const Step1Container = () => {
  const { dispatch } = useForm();
  const [user, setUser] = useState({ name: "", dateOfBirth: "" });

  const { setStep } = useSteps();

  useEffect(() => {
    setStep(1);
  });

  const router = useRouter();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch({ type: FormActionTypes.SetUser, payload: user });
    router.push("/car-form/step-2");
  };

  return (
    <form className="main-container" onSubmit={submit}>
      <div className="title">Tell us about yourself</div>

      <div className="inputs-container">
        <Input
          name="name"
          title={"Name"}
          value={user.name}
          onChange={handleChange}
          required
        />
        <Input
          name="dateOfBirth"
          title={"Date of birth"}
          value={user.dateOfBirth}
          type="date"
          onChange={handleChange}
          required
        />
      </div>
      <div className="continue-button-container">
        <Button text="Continue" type="submit" />
      </div>
    </form>
  );
};

export default Step1Container;
