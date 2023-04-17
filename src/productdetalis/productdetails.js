import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import instance from "../axiosConfig/axiosInstance";
const API_IMG = "https://image.tmdb.org/t/p/w500/";

const Productdetails = ({
  title,
  poster_path,
  vote_average,
  release_date,
  overview,
}) => {
  const { id } = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    instance
      .get(`/products/${id}`)
      .then((res) => {
        console.log(res.data);
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <img src={API_IMG + poster_path} />
      <h1>{title}</h1>
      <p>{vote_average}</p>
      <p>{release_date}</p>
      <p>{overview}</p>
    </div>
  );
};

export default Productdetails;
