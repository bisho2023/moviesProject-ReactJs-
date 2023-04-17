import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./favmovies.css";
import Movies from "../movies/movies";
import changeFavorites, { changeCounter } from "../store/action";

const Favmovies = () => {
  const dispatch = useDispatch();
  // const counter = useSelector((state) => state.counter.count);
  const favorites = useSelector((state) => state.fav);
  const counter = useSelector((state) => state.count);

  return (
    <>
      <div className="container">
        <div class="row row-cols-1 row-cols-md-3 g-4">
          {favorites.map((movie, index) => {
            return (
              <div class="col">
                <div class="card">
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt={`${movie.title} poster`}
                  />
                  <div class="card-body">
                    <h5 class="card-title">{movie.title}</h5>
                    <Link
                      to={`/movies/${movie.id}`}
                      className="btn btn-primary d-block ms-auto/"
                    >
                      Read More
                    </Link>
                    <i
                      onClick={() => {
                        let index = favorites.findIndex(
                          (ele) => ele.id === movie.id
                        );
                        favorites.splice(index, 1);
                        dispatch(changeFavorites([...favorites]));
                        dispatch(changeCounter(counter - 1));
                      }}
                      className={"fa-solid fa-trash trash mt-2"}
                    ></i>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Favmovies;
