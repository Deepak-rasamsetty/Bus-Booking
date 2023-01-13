import React, {  useEffect, useState } from 'react'
import { useAddServiceContextValue } from '../context/AddServiceFormContext';

export default function RouteComponent(props) {

    const addToRouteList = useAddServiceContextValue('addToRouteList');
    const deleteFromRouteList= useAddServiceContextValue('deleteFromRouteList');
    

    const [isEnabled, setIsEnabled] = useState(true);
    const [routeDetails, setRouteDetails] = useState({
        sequenceId: props.sequenceId,
        location:'',
        date:'',
        time:''
    });
    console.log('RouteComponenet is rendered. routeDetails  - '+JSON.stringify(routeDetails));
    const deleteComponent=()=>{
        setIsEnabled(false);
        deleteFromRouteList(props.sequenceId);
    }
    const handleChange = (e) =>{
        setRouteDetails({...routeDetails,[ e.target.name]: e.target.value});
    }
    useEffect(()=>{
       addToRouteList(routeDetails);
    },[routeDetails]);
   
  return (
    isEnabled &&
    <div className="input-group d-flex justify-content-center">
    <div className="">
      <input
        type="text"
        className="form-control"
        value={routeDetails.location}
        onChange={handleChange}
        name="location"
      />
    </div>
    <div>
      <input type="date" className="form-control" value={routeDetails.date} name="date" onChange={handleChange}/>
    </div>
    <div>
      <input type="time" className="form-control" value={routeDetails.time} name="time" onChange={handleChange}/>
    </div>
    <div>
      <button  className="btn btn-light" onClick={deleteComponent}>
      <small>
      <i className="bi bi-x-circle"></i>
      </small>
        </button> 
    </div>
  </div>
  )
}
