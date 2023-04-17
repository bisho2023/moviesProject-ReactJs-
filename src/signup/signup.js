import React, { useState } from "react";

const Signup = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    uname: "",
    password: "",
    rpassword: "",
  });

  const [errors, setErrors] = useState({
    nameError: "",
    emailError: "",
    unameError: "",
    passwordError: "",
    rpasswordError: "",
  });

  const handleForm = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });

    const regex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    const regexP = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;

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
    } else if (event.target.name == "name") {
      setErrors({
        ...errors,
        nameError: event.target.value.length == 0 ? "Name Is Requuired" : "",
      });
    } else if (event.target.name == "password") {
      setErrors({
        ...errors,
        passwordError:
          event.target.value.length == 0
            ? "password Is Requuired"
            : regexP.test(event.target.value) == false
            ? "Password must Include at least one and one lowercase and one special character"
            : "",
      });
    } else if (event.target.name == "uname") {
      setErrors({
        ...errors,
        unameError:
          event.target.value.length == 0
            ? "Name Is Requuired"
            : event.target.value.includes(" ")
            ? "user name must containes no spaces "
            : "",
      });
    } else if (event.target.name == "rpassword") {
      setErrors({
        ...errors,
        rpasswordError:
          user.password !== event.target.value ? "Password didn't match" : "",
      });
    }
  };

  return (
    <>
      <form className="m-5">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input
            name="name"
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            onChange={(e) => handleForm(e)}
          />
          <div className="text-danger">{errors.nameError}</div>
        </div>

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
          <label htmlFor="exampleInputEmail1" className="form-label">
            User Name
          </label>
          <input
            name="uname"
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            onChange={(e) => handleForm(e)}
          />
          <div className="text-danger">{errors.unameError}</div>
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
          <div className="text-danger">{errors.passwordError}</div>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Repeat Password
          </label>
          <input
            name="rpassword"
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={(e) => handleForm(e)}
          />
          <div className="text-danger">{errors.rpasswordError}</div>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default Signup;
