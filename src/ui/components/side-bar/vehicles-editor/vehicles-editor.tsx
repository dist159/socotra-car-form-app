"use client";

import React, { useEffect, useState } from "react";

import Input from "@/ui/shared/input/input";
import Button from "@/ui/shared/button/button";

import { useSidebar } from "@/context/side-bar/side-bar.provider";
import { useForm } from "@/context/form-context/form.provider";
import { FormActionTypes } from "@/context/form-context/enums";

import "../sidebar-components.styles.scss";
import { Vehicle } from "@/interfaces/global";
import { vehiclesFormItems } from "../constants";

export default function VehicleEditor() {
  const { closeSidebar, metaData } = useSidebar();
  const { dispatch, state } = useForm();

  const [formData, setFormData] = useState<Vehicle | any>({
    make: "",
    model: "",
    year: "",
    value: "",
  });

  useEffect(() => {
    if (metaData.index !== -1) {
      setFormData(state.vehicles[metaData.index]);
    } else {
      setFormData({
        make: "",
        model: "",
        year: "",
        value: "",
      });
    }
  }, [metaData, state.vehicles]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev: Vehicle) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (metaData.index === -1) {
      dispatch({
        type: FormActionTypes.AddVehicle,
        payload: formData,
      });
    } else {
      dispatch({
        type: FormActionTypes.UpdateVehicle,
        payload: { index: metaData.index, vehicle: formData },
      });
    }
    closeSidebar();
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="header">
        <p>Add Vehicle</p>
      </div>
      <div className="inputs-container-sidebar">
        {vehiclesFormItems.map((item, index) => (
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
