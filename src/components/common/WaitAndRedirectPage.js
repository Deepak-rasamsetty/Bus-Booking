import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContextValue } from "../../context/context";
import { getReservationQueueStatus } from "../../data/BusDetails";
import TicketConfirmation from "../booking/TicketConfirmation";
import LoadingPage from "./LoadingPage";

export default function WaitAndRedirectPage() {
  const navigate = useNavigate();
  const reservationQueueId = useContextValue("reservationQueueId");
  const [reservationId, setReservationId] = useState(0);
  console.log(
    "WaitAndRedirectPage rendered, reservationQueueId - " + reservationQueueId
  );

  useEffect(() => {
    console.log('inside WaitAndRedirectPage useEffect')
    if (reservationId === 0 && reservationQueueId!==0) {
      const interval = setInterval(() => {
        console.log("This will run every second!");
        getReservationQueueStatus(reservationQueueId, setReservationId);
      }, 5000);
      return () => clearInterval(interval);
    }else if(reservationId!==0){
      navigate("/TicketConfirmation",{ state: {reservationId:reservationId}})
    }
  });
  return (
    <div className="container w-75 p-3">
      <LoadingPage/>
      {/* {reservationId === 0 ? <LoadingPage /> : <TicketConfirmation reservationId={reservationId}/>} */}
    </div>
  );
}
