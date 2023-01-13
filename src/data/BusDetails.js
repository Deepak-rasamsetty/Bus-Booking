export const getSearchResults =  (request, func) => {
   fetch("http://localhost:8080/bus/", {
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

export const addBusService =(request)=>{
    fetch("http://localhost:8080/bus/add", {
    method: "POST",
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(request),
  }).then((response)=>response.json());
}

export const fetchLocations =(query, func)=>{
  fetch("http://localhost:8080/bus/"+query, {
    method: "GET",
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
    }
    }).then(response=>response.json()).then(resp=>func(resp));
}
