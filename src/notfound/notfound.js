import React from "react";
import { useNavigate } from "react-router-dom";
import "./notfound.css";
const Notfound = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/");
  };
  return (
    <>
      <h1>404 Error Page</h1>
      <p class="zoom-area">
        <b>CSS</b> animations to make a cool 404 page.{" "}
      </p>
      <section class="error-container">
        <span>4</span>
        <span>
          <span class="screen-reader-text">0</span>
        </span>
        <span>4</span>
      </section>
      <div class="link-container">
        <button className="btn btn-primary" onClick={() => goBack()}>
          Go Back
        </button>
      </div>
    </>
  );
};

export default Notfound;
