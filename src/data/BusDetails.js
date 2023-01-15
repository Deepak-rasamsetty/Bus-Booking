export const getSearchResults = (request, func) => {
  fetch("http://localhost:8080/bus/getAvaialableBuses", {
    method: "POST",
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(request),
  })
    .then((response) => response.json())
    .then((resp) => func(resp));
};

export const addBusService = (request) => {
  fetch("http://localhost:8080/bus/addNewService", {
    method: "POST",
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(request),
  }).then((response) => response.json());
};

export const fetchLocations = (query, func) => {
  fetch("http://localhost:8080/location/" + query, {
    method: "GET",
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((resp) => func(resp));
};
export const fetchReseredSeats = (serviceId, func) => {
  fetch("http://localhost:8080/getreservedseats/" + serviceId, {
    method: "GET",
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((resp) => func(resp));
};
export const reserveTickets = (request, func) => {
  fetch("http://localhost:8080/reserve/async", {
    method: "POST",
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(request),
  })
    .then((response) => response.json())
    .then((resp) => {
      console.log("Got reservation resposne - " + resp);
      func(resp);
    });
};
export const fetchReservationDetails = (reservationId, func) => {
  fetch("http://localhost:8080/getreservationdetails/" + reservationId, {
    method: "GET",
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((resp) => {
      console.log("Got reservation resposne - " + resp);
      func(resp);
    });
};

export const getReservationQueueStatus = async(reservationQueueId, func) => {
  console.log('calling check reservatoin status - '+reservationQueueId);
  return await fetch(
    "http://localhost:8080/checkReservationQueueStatus/" + reservationQueueId,
    {
      method: "GET",
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
      },
    }
  )
    .then((response) => {return response.json()})
    .then((resp)=>{
      if(resp.status==='COMPLETED'){
        console.log('reservatio completed - '+JSON.stringify(resp));
        return resp;
      }else{
        throw resp;
      }
    }).then((resp)=>{func(resp.reservationId)})
    .catch((error)=>{
      console.log('error occured');
    })
};
