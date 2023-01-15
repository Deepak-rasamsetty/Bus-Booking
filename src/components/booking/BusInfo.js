import React from 'react'
import { useContextValue } from '../context/context';

export default function BusInfo() {
    const selectedBus = useContextValue('selectedBus');
    console.log('BusInfo rdnered , selectedBus - '+JSON.stringify(selectedBus));
  return (
   
      <div>
      <div className="card">
      <div className="card-header text-center">
          Bus Details
          </div>
        <div className="card-body">
          
         
              <ul className="list-unstyled">
                <li>  {selectedBus.from} - {selectedBus.to}</li>
                <li>Boarding time : {selectedBus.boardingTime}</li>
                <li>Dropping time : {selectedBus.droppingTime}</li>
                <li> Fare : {selectedBus.fare}</li>
                <li>
                  <small>
                    {selectedBus.travels} - {selectedBus.rating} *
                  </small>
                </li>
              </ul>
            </div>
          
          </div>
        </div>

  )
}
