import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import instance from "../axiosConfig/axiosInstance";
import "./moviedetails.css";
import { useNavigate } from "react-router-dom";
const API_IMG = "https://image.tmdb.org/t/p/w500/";

const Moviedetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    instance
      .get(`movie/${id}?api_key=84c7b8810b83fbdf21cb35383022cb6b`)
      .then((res) => {
        console.log(res.data);
        setMovie(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const navigate = useNavigate();
  const goBack = () => {
    navigate("/movies");
  };

  const { title, poster_path, vote_average, release_date, overview } = movie;

  return (
    <div className="conatiner">
      <div className="row">
        <div className="card p-5">
          <img src={API_IMG + poster_path} />
          <h1>{title}</h1>
          <p>{vote_average}</p>
          <p>{release_date}</p>
          <p>{overview}</p>
          <div class="link-container">
            <button className="btn btn-primary" onClick={() => goBack()}>
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Moviedetails;
