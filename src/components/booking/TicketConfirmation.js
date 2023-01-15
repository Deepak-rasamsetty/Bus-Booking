import React, { useEffect, useState } from 'react'
import { useContextValue } from '../../context/context'
import { fetchReservationDetails } from '../../data/BusDetails';
import TickeySummary from './TickeySummary'

export default function TicketConfirmation() {
    const reservationId = useContextValue('reservationId');
    const [reservationDetails, setReservationDetails] = useState(null);
    console.log('Ticket confirmation rendered, reservationId - '+reservationId);
    const getSelectedSeatNumbers=()=>{
        console.log('reservation details - '+JSON.stringify(reservationDetails));
        if(reservationId===0 || reservationDetails===null){
            return null;
        }
        var selectedSeatNumbers =[];
        reservationDetails.ticketDetails.forEach((ticket)=>{
            selectedSeatNumbers.push(ticket.seatNumber);
        })
        console.log('selected seats in ticket confirmation - '+selectedSeatNumbers);
        return selectedSeatNumbers;
    }
    const selectedSeats = getSelectedSeatNumbers();
    useEffect(()=>{
        fetchReservationDetails(reservationId, setReservationDetails);
    },[setReservationDetails, reservationId])

  return (
    reservationDetails &&
    <div className="card text-center ">
      <div className="card-header">Ticket Confirmation</div>
      <div className="card-body ">
        <div className="col-sm-6 mx-auto">
          <TickeySummary busDetails={reservationDetails.busInfo} selectedSeats={selectedSeats}/>
        </div>
      </div>
      <div className='card-footer'>
        <button className='btn btn-light'>
            Download Ticket
        </button>
      </div>
     
    </div>
 
  )
}
