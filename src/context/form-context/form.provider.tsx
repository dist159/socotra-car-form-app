"use client";
import { Vehicle, Driver, User, UserHistory } from "@/interfaces/global";
import React, { createContext, useContext, useReducer, ReactNode } from "react";
import { FormActionTypes } from "./enums";

interface FormState {
  vehicles: Vehicle[];
  user: User;
  drivers: Driver[];
  userHistory: UserHistory;
}

type FormAction =
  | { type: FormActionTypes.AddVehicle; payload: Vehicle }
  | {
      type: FormActionTypes.UpdateVehicle;
      payload: { index: number; vehicle: Vehicle };
    }
  | { type: FormActionTypes.SetUser; payload: any }
  | { type: FormActionTypes.AddDriver; payload: Driver }
  | {
      type: FormActionTypes.UpdateDriver;
      payload: { index: number; driver: Driver };
    }
  | {
      type: FormActionTypes.SetHistory;
      payload: UserHistory;
    };

const initialState: FormState = {
  vehicles: [],
  user: {
    name: "",
    dateOfBirth: undefined as any,
  },
  drivers: [],
  userHistory: {
    driverHasAccidents: false,
    driverHasConvictions: false,
    driverHasSuspensions: false,
  },
};

/**
 * Because this states takes a lot of variables and objects
 *  into consideration I decided to use a reducer instead of 
 * a useState function */

function reducer(state: FormState, action: FormAction): FormState {
  switch (action.type) {
    case FormActionTypes.AddVehicle:
      return {
        ...state,
        vehicles: [...state.vehicles, action.payload],
      };
    case FormActionTypes.UpdateVehicle:
      return {
        ...state,
        vehicles: state.vehicles.map((v, i) =>
          i === action.payload.index ? { ...v, ...action.payload.vehicle } : v
        ),
      };
    case FormActionTypes.SetUser:
      return {
        ...state,
        user: action.payload,
      };
    case FormActionTypes.AddDriver:
      return {
        ...state,
        drivers: [...state.drivers, action.payload],
      };
    case FormActionTypes.UpdateDriver:
      return {
        ...state,
        drivers: state.drivers.map((v, i) =>
          i === action.payload.index ? { ...v, ...action.payload.driver } : v
        ),
      };
    case FormActionTypes.SetHistory:
      return {
        ...state,
        userHistory: action.payload,
      };
    default:
      throw new Error(`Unhandled action: ${action}`);
  }
}

const FormContext = createContext<
  | {
      state: FormState;
      dispatch: React.Dispatch<FormAction>;
    }
  | undefined
>(undefined);

export const useForm = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useForm must be used within a FormProvider");
  }
  return context;
};

export const FormProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <FormContext.Provider value={{ state, dispatch }}>
      {children}
    </FormContext.Provider>
  );
};
