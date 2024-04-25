"use client";

/**
 * this file and the vehicles editor have a lot of similarities
 * that can be reused for bothe files reducing the code, for
 *  example with the input items, the header and footer
 * is very similar so it can be setup by parameters
 */

import React, { useEffect, useState } from "react";
import Input from "@/ui/shared/input/input";
import Button from "@/ui/shared/button/button";
import { useSidebar } from "@/context/side-bar/side-bar.provider";
import { useForm } from "@/context/form-context/form.provider";
import { FormActionTypes } from "@/context/form-context/enums";
import { DriversFormItems } from "../constants";

import "../sidebar-components.styles.scss";
import { Driver } from "@/interfaces/global";

export default function DriversEditor() {
  const { closeSidebar, metaData } = useSidebar();
  const { dispatch, state } = useForm();
  const [formData, setFormData] = useState<Driver | any>({
    firstName: "",
    lastName: "",
    licenceNumber: "",
  });

  useEffect(() => {
    if (metaData.index !== -1) {
      setFormData(state.drivers[metaData.index]);
    } else {
      setFormData({
        firstName: "",
        lastName: "",
        licenceNumber: "",
      });
    }
  }, [metaData, state.drivers]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev: Driver) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (metaData.index === -1) {
      dispatch({
        type: FormActionTypes.AddDriver,
        payload: formData,
      });
    } else {
      dispatch({
        type: FormActionTypes.UpdateDriver,
        payload: { index: metaData.index, driver: formData },
      });
    }
    closeSidebar();
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="header">
        <p>Add Driver</p>
      </div>
      <div className="inputs-container-sidebar">
        {DriversFormItems.map((item, index) => (
          <Input
            key={index}
            {...item}
            value={formData[item.name]}
            onChange={handleChange}
            required
          />
        ))}
      </div>
      <div className="footer">
        <Button secondary onClick={closeSidebar} text="Cancel" />
        <Button text="Confirm" type="submit" />
      </div>
    </form>
  );
}
