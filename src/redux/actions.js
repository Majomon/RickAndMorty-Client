import axios from "axios";
export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";
export const FILTER_CARDS = "FILTER_CARDS";
export const ORDER_CARDS = "ORDER_CARDS";
export const GET_FAVORITES = "GET_FAVORITES";

/* export const addFavoriteGlobal = (character) => {
  return { type: ADD_FAVORITE, payload: character };
}; */

export const getFavorites = () => {
  return async function (dispatch) {
    const URL_BASE = "http://localhost:3001";
    const response = await axios.get(`${URL_BASE}/fav`);
    dispatch({ type: GET_FAVORITES, payload: response.data });
  };
};
export const removeFavorite = (id) => {
  return { type: REMOVE_FAVORITE, payload: id };
};

export const filterCards = (filter) => {
  return { type: FILTER_CARDS, payload: filter };
};

export const orderCards = (order) => {
  return { type: ORDER_CARDS, payload: order };
};
