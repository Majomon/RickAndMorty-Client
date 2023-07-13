import {
  FILTER_CARDS, GET_FAVORITES, ORDER_CARDS, REMOVE_FAVORITE
} from "./actions";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    /*     case ADD_FAVORITE:
      return {
        ...state,
        myFavorites: [...state.myFavorites, action.payload],
        allCharacters: [...state.allCharacters, action.payload],
      }; */

    case REMOVE_FAVORITE:
      const updatedAllCharacters = state.allCharacters.filter(
        (char) => char.id !== action.payload
      );
      return {
        ...state,
        myFavorites: state.myFavorites.filter(
          (char) => char.id !== action.payload
        ),
        allCharacters: updatedAllCharacters,
      };

    case GET_FAVORITES:
      return {
        ...state,
        myFavorites: action.payload,
        allCharacters: action.payload,
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
