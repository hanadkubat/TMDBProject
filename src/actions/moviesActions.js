import { movies } from "../api/api";

export const getMovies = () => (dispatch) => {
  dispatch(request());
  movies
    .getTopRated()
    .then(res => {
      dispatch(success(res));
    })
    .catch(error => {
      dispatch(failure(error));
    });

  function request() {
    return { type: "GET_MOVIES_REQUEST" };
  }
  function success(movies) {
    return { type: "GET_MOVIES_SUCCESS", payload: movies };
  }
  function failure(error) {
    return { type: "GET_MOVIES_FAILED", error };
  }
};

export const searchMovies = (query) => (dispatch) => {
  dispatch(request());
  movies
    .searchMovies(query)
    .then(res => {
      dispatch(success(res));
    })
    .catch(error => {
      dispatch(failure(error));
    });

  function request() {
    return { type: "GET_MOVIES_REQUEST" };
  }
  function success(movies) {
    return { type: "GET_MOVIES_SUCCESS", payload: movies };
  }
  function failure(error) {
    return { type: "GET_MOVIES_FAILED", error };
  }
};
