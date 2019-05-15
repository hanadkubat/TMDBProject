import { getDetails } from "../api/api";

export const getShowDetails = (category, id) => dispatch => {
  dispatch(request());
  getDetails(category, id)
    .then(res => {
      dispatch(success(res));
    })
    .catch(error => {
      dispatch(failure(error));
    });

  function request() {
    return { type: "GET_DETAILS_REQUEST" };
  }
  function success(details) {
    return { type: "GET_DETAILS_SUCCESS", payload: details };
  }
  function failure(error) {
    return { type: "GET_DETAILS_FAILED", error };
  }
};
