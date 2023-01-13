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
