import React, { useState } from "react";

const Login = () => {
  const [admin, setAdmin] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    emailError: "",
    passwordError: "",
  });

  const handleForm = (event) => {
    // switch (event.target.name) {
    //   case "email":
    //     setAdmin({ ...admin, email: event.target.value });
    //     break;
    //   case "password":
    //     setAdmin({ ...admin, password: event.target.value });
    //     break;
    //   default:
    //     return;
    // }

    setAdmin({ ...admin, [event.target.name]: event.target.value });

    const regex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (event.target.name == "email") {
      setErrors({
        ...errors,
        emailError:
          event.target.value.length == 0
            ? "Email Is Requuired"
            : regex.test(event.target.value) == false
            ? "email should be that XXX@XXXX.com"
            : "",
      });
    } else if (event.target.name == "password") {
      setErrors({
        ...errors,
        passwordError:
          event.target.value.length == 0
            ? "password Is Requuired"
            : event.target.value.length < 8
            ? "password must be at least 8 characters"
            : "",
      });
    }
  };

  return (
    <>
      <form className="m-5">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            name="email"
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            onChange={(e) => handleForm(e)}
          />
          <div className="text-danger">{errors.emailError}</div>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            name="password"
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={(e) => handleForm(e)}
          />
          <div className="text text-danger">{errors.passwordError}</div>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default Login;
