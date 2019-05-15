const initialState = {
  currentDetails: {
    name: null,
    img: null,
    overview: null,
    status: null,
    rating: null,
    video: null,
    genres: []
  },
  loading: false,
  error: null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "GET_DETAILS_REQUEST":
      return {
        ...state,
        loading: true
      };
    case "GET_DETAILS_SUCCESS":
      const {
        backdrop_path,
        vote_average,
        overview,
        status,
        genres,
        videos,
        name,
        title
      } = action.payload;
      return {
        ...state,
        currentDetails: {
          ...state.currentDetails,
          name: name ? name : title,
          img: backdrop_path,
          rating: vote_average,
          video: videos.results.length !== 0 && videos.results[0].key,
          overview,
          status,
          genres,
        },
        loading: false
      };
    case "GET_MOVIES_FAILED":
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
}
