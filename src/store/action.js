import axios from "axios";

export default function changeFavorites(data) {
  return {
    type: "SET_FAVORITES",
    payload: data,
  };
}

export function changeCounter(data) {
  return {
    type: "SET_COUNTER",
    payload: data,
  };
}

export function changeMovies() {
  return (dispatch) => {
    return axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=84c7b8810b83fbdf21cb35383022cb6b`
      )
      .then((res) => {
        dispatch({ type: "SET_MOVIES", payload: res.data.results });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
