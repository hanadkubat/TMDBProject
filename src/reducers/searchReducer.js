const initialState = {
    searchQuery : ''
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case "SET_SEARCH_QUERY":
          return {
            ...state,
            searchQuery: action.payload
          };
        default:
          return state;
      }
}