import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { languageContext } from "../contexts/language";
import changeFavorites, { changeCounter, changeMovies } from "../store/action";
import "./movies.css";
const API_SEARCH =
  "https://api.themoviedb.org/3/search/movie?api_key=84c7b8810b83fbdf21cb35383022cb6b&query";
const Movies = () => {
  const [movies, setmovies] = useState([]);
  const [curPage, setCurPage] = useState(1);
  const [query, setQuery] = useState("");

  const favorites = useSelector((state) => state.fav);
  const counter = useSelector((state) => state.count);
  const { language, setLanguage } = useContext(languageContext);
  // const movies = useSelector((state) => state.mov);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=84c7b8810b83fbdf21cb35383022cb6b&page=${curPage}`
      )
      .then((res) => {
        setmovies(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });

    // dispatch(changeMovies());
  }, [curPage]);

  const searchMov = async (e) => {
    e.preventDefault();

    try {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=84c7b8810b83fbdf21cb35383022cb6b&query=${query}`;
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      await setmovies(data.results);
    } catch (e) {
      console.log(e);
    }
  };

  const changehandler = (e) => {
    setQuery(e.target.value);
  };

  const handleNext = () => {
    setCurPage(curPage + 1);
  };

  const handlePrev = () => {
    if (curPage > 1) {
      setCurPage(curPage - 1);
    }
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-center mt-5">
        <input
          type={"search"}
          className="form-control w-50"
          value={query}
          onChange={changehandler}
          placeholder="Search For A Movies"
        ></input>
        <button className="btn btn-primary" onClick={searchMov}>
          Search
        </button>
      </div>
      <div className=" d-flex justify-content-center mt-2">
        <h1 style={{ color: "white" }}>Language is {language}</h1>
        <button
          onClick={() => {
            setLanguage(language == "Arabic" ? "English" : "Arabic");
          }}
          className="btn btn-primary"
        >
          Change Language
        </button>
      </div>
      <div class="row row-cols-1 row-cols-md-3 g-4 mt-3">
        {movies.map((movie, index) => {
          return (
            <div class="col">
              <div class="card">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={`${movie.title} poster`}
                />
                {favorites.find((ele) => ele.id === movie.id) ? (
                  <>
                    <i
                      onClick={() => {
                        let index = favorites.findIndex(
                          (ele) => ele.id === movie.id
                        );
                        favorites.splice(index, 1);
                        dispatch(changeFavorites([...favorites]));
                        dispatch(changeCounter(counter - 1));
                      }}
                      className="fa-solid fa-heart heart position"
                    ></i>
                  </>
                ) : (
                  <>
                    <i
                      onClick={() => {
                        dispatch(changeFavorites([...favorites, movie]));
                        dispatch(changeCounter(counter + 1));
                      }}
                      className="fa-solid fa-heart not-heart position"
                    ></i>
                  </>
                )}
                <div class="card-body">
                  <h5 class="card-title">{movie.title}</h5>
                  <Link
                    to={`/movies/${movie.id}`}
                    className="btn btn-primary d-block ms-auto/"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <nav
        aria-label="Page navigation example"
        className="d-flex justify-content-center mt-5"
      >
        <ul class="pagination">
          <li class="page-item">
            <a className="page-link" onClick={handlePrev}>
              Previous
            </a>
          </li>
          <li class="page-item">
            <a className="page-link" onClick={handleNext}>
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Movies;
