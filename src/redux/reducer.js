import {
  ADD_FAVORITES,
  GET_FAVORITES,
  REMOVE_FAVORITES,
  FILTER_CARDS,
  ORDER_CARDS,
} from "./actions";

const initialState = {
  myFavorites: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FAVORITES:
      return {
        ...state,
        myFavorites: action.payload,
      };

    case ADD_FAVORITES:
      return {
        ...state,
        myFavorites: action.payload,
      };
    case REMOVE_FAVORITES:
      return {
        ...state,
        myFavorites: state.myFavorites.filter(
          (char) => char.id !== action.payload
        ),
      };

    case FILTER_CARDS:
      const filter = action.payload;
      if (filter === "all") {
        return { ...state, myFavorites: state.allCharacters };
      } else {
        const filteredFavorites = state.allCharacters.filter(
          (char) => char.gender === filter
        );
        return { ...state, myFavorites: filteredFavorites };
      }

    case ORDER_CARDS:
      const order = action.payload;
      const orderedFavorites = [...state.myFavorites].sort((a, b) => {
        if (order === "Ascendente") {
          return a.id - b.id;
        } else {
          return b.id - a.id;
        }
      });
      return { ...state, myFavorites: orderedFavorites };
    default:
      return { ...state };
  }
};

export default rootReducer;
