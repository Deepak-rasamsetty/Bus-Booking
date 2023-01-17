import React, { useState } from "react";
import Login from "./Login";
import SignIn from "./SignIn";

export default function LoginPage(props) {
  const [alert, setAlert] = useState({'status':null, 'message': null, 'display': 'none'});
 
  return (
    <div className="card container w-50">
   
        <div className={"alert  text-center alert-"+( alert.status==="SUCCESS"?'success':'danger')} role="alert" style={{display:alert.display}}>
           {alert.message}
          </div>
     
       
      <div className="card-body d-flex justify-content-center">
        <div className="row align-items-center">
          <Login setAlert={setAlert} setLoggedInUser={props.setLoggedInUser}/>
          <SignIn setAlert={setAlert}/>
        </div>
      </div>
    </div>
  );
}
