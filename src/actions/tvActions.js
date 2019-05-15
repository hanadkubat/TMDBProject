import { tvShows } from "../api/api";

export const getTV = () => (dispatch) => {
  dispatch(request());
  tvShows
    .getTopRated()
    .then(res => {
      dispatch(success(res));
    })
    .catch(error => {
      dispatch(failure(error));
    });

  function request() {
    return { type: "GET_TV_REQUEST" };
  }
  function success(tvShows) {
    return { type: "GET_TV_SUCCESS", payload: tvShows };
  }
  function failure(error) {
    return { type: "GET_TV_FAILED", error };
  }
};

export const searchTV = (query) => (dispatch) => {
  dispatch(request());
  tvShows
    .searchTV(query)
    .then(res => {
      dispatch(success(res));
    })
    .catch(error => {
      dispatch(failure(error));
    });

  function request() {
    return { type: "GET_TV_REQUEST" };
  }
  function success(tvShows) {
    return { type: "GET_TV_SUCCESS", payload: tvShows };
  }
  function failure(error) {
    return { type: "GET_TV_FAILED", error };
  }
};
