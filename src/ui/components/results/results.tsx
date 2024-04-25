"use client";
import { useForm } from "@/context/form-context/form.provider";
import ListItem from "@/ui/shared/list-item/list-item";

import "./results.styles.scss";
import { currencyFormatter } from "@/helpers/currencyFormat";

const Results = () => {
  const { state } = useForm();

  const getPrice = () => {
    let total = 0;

    for (let vehicle of state.vehicles) {
      total += Number(vehicle.value) * 0.05;
    }
    total += state.drivers.length * 10;

    if (state.userHistory.driverHasAccidents) {
      total += 35;
    }
    if (state.userHistory.driverHasConvictions) {
      total += 55;
    }
    if (state.userHistory.driverHasSuspensions) {
      total += 100;
    }

    return total / 2;
  };

  return (
    <div className="main-container">
      <div className="quote-container">
        <h1>Auto Quote</h1>
        <h2>{currencyFormatter(getPrice())}</h2>
        <p>per Month</p>
      </div>
      <div>
        <div className="subheader">Vehicles</div>
        {state.vehicles.map((vehicle, index) => (
          <div key={index}>
            <ListItem
              secondary
              icon={"car"}
              title={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
            />
          </div>
        ))}
      </div>
      <div>
        <div className="subheader">Drivers</div>
        {state.drivers.map((driver, index) => (
          <div key={index}>
            <ListItem
              secondary
              icon={"people"}
              title={`${driver.firstName} ${driver.lastName} `}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Results;
