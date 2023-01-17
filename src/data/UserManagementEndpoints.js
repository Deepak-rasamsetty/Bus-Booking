export const signInUser = async(request) => {
    return await fetch("http://localhost:8080/user/", {
      method: "POST",
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request),
    })
    
  };
  
  export const loginUser = async(request) => {
    return await fetch("http://localhost:8080/user/authenticate", {
      method: "POST",
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request),
    })
    
  };
  
  export const getUserDetails = async(request, func) => {
    return await fetch("http://localhost:8080/user/details", {
      method: "POST",
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request),
    }).then((response)=>response.json())
    .then((resp)=>func(resp));
    
  };