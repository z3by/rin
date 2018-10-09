const INITAL_STATE = {
  countries: []
};

export default function countries(state = INITAL_STATE, action) {
  switch (action.type) {
    case "SET":
      return {
        ...state,
        countries: action.payload
      };
    default:
      return state;
  }
}
