import React from "react";
import { useContextValue } from "../context/context";
import BusDetailsComponent from "./BusDetailsComponent";

export default function AvailableBuses() {
  const availableBusList = useContextValue("availableBusList");
  return (
    <div>
      {availableBusList.map((busDetails) => {
        return (
          <BusDetailsComponent
            key={busDetails.serviceId}
            busDetails={busDetails}
          />
        );
      })}
    </div>
  );
}
