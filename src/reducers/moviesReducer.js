const initialState = {
  movies: [],
  loading: false,
  error: null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "GET_MOVIES_REQUEST":
      return {
        ...state,
        loading: true
      };
    case "GET_MOVIES_SUCCESS":
      return {
        ...state,
        movies: action.payload.results,
        loading: false
      };
    case "GET_MOVIES_FAILED":
      return {
        ...state,
        loading: false,
        error: action.error
      }
    default:
      return state;
  }
}
