const initialState = {
  tvShows: [],
  loading: false,
  error: null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "GET_TV_REQUEST":
      return {
        ...state,
        loading: true
      };
    case "GET_TV_SUCCESS":
      return {
        ...state,
        tvShows: action.payload.results,
        loading: false
      };
    case "GET_TV_FAILED":
      return {
        ...state,
        error: action.error,
        loading: false
      };
    default:
      return state;
  }
}
