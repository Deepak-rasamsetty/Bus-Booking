import React from 'react';
import { useContextValue } from '../../context/context';
import TicketConfirmation from '../booking/TicketConfirmation';
import LoadingPage from './LoadingPage';

export default function WaitAndRedirectPage() {
const reservationId = useContextValue('reservationId');
console.log('WaitAndRedirectPage rendered, reservationId - '+reservationId);
  return (

    <div className='container w-75 p-3'>
          {reservationId===0 ? <LoadingPage/> : <TicketConfirmation/>    }
    </div>
  )
}
