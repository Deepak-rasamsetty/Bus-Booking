import React,{ useRef} from 'react'
import { useNavigate } from 'react-router-dom';
import { getUserDetails, loginUser } from '../../data/UserManagementEndpoints';

export default function Login(props) {

const navigate = useNavigate();
    const emailRef = useRef("");

    const passwordRef = useRef("");
  
    const onLogin =  () => {
      var request = {
         userName: emailRef.current.value,
        password: passwordRef.current.value,
      };
      var response =  loginUser(request)
      response.then((resp) =>resp.json())
      .then((e) => {
        console.log('resp - '+e);
       if(e){
       var getDetailsRequest = {
        email:emailRef.current.value,
       };
        getUserDetails(getDetailsRequest, props.setLoggedInUser);
       
        navigate("/");
       }else{
        props.setAlert({'status':'Failed', 'message': "Login failed. Please provide correct credentials", 'display': 'inline'})
       }
        }
      );
      
    };
  return (
    <div className=" col-md-6 ">
    <div className="input-group flex-nowrap my-2">
      <span className="input-group-text">@</span>
      <input type="text" className="form-control" placeholder="Email" ref={emailRef}/>
    </div>
    <div className="input-group flex-nowrap">
      <span className="input-group-text">
        <i className="bi bi-key"></i>
      </span>
      <input type="text" className="form-control" placeholder="password" ref={passwordRef}/>
    </div>
    <div className="  d-flex justify-content-center my-2">
      <button className="btn btn-light" onClick={onLogin}>Log In</button>
    </div>
  </div>
  )
}
