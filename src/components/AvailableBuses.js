import React from 'react';
import busData from '../data/busData.json';
import BusDetailsComponent from './BusDetailsComponent';

export default function AvailableBuses(props) {
  console.log(JSON.stringify(busData));
  return (
    <div>
      {busData.map((data) => {return <BusDetailsComponent key={data.id} data={data} />})}
    </div>
  )
}
