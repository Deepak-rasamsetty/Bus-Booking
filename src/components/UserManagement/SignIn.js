import React, { useRef } from "react";
import { signInUser } from "../../data/UserManagementEndpoints";

export default function SignIn(props) {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const mobileRef = useRef("");
  const passwordRef = useRef("");

  const onSignIn = async () => {
    var request = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      mobile: mobileRef.current.value,
      password: passwordRef.current.value,
    };
    var response = signInUser(request);
    response
      .then((resp) => resp.json())
      .then((e) => {
        props.setAlert({
          status: e.status,
          message: e.message,
          display: "inline",
        });
        if (e.status === "SUCCESS") {
          nameRef.current.value = "";
          emailRef.current.value = "";
          mobileRef.current.value = "";
          passwordRef.current.value = "";
        }
      });
  };
  return (
    <div className=" col-md-6 ">
      <div className="input-group flex-nowrap my-2">
        <span className="input-group-text">
          <i className="bi bi-person"></i>
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Name"
          ref={nameRef}
        />
      </div>

      <div className="input-group flex-nowrap my-2">
        <span className="input-group-text">@</span>
        <input
          type="text"
          className="form-control"
          placeholder="Email"
          ref={emailRef}
        />
      </div>
      <div className="input-group flex-nowrap my-2">
        <span className="input-group-text">
          <i className="bi bi-phone"></i>
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Mobile"
          ref={mobileRef}
        />
      </div>
      <div className="input-group flex-nowrap">
        <span className="input-group-text">
          <i className="bi bi-key"></i>
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="password"
          ref={passwordRef}
        />
      </div>

      <div className="  d-flex justify-content-center my-2">
        <button className="btn btn-light" onClick={onSignIn}>
          Sign In
        </button>
      </div>
    </div>
  );
}
