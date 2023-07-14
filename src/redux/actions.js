import axios from "axios";
export const ADD_FAVORITES = "ADD_FAVORITES";
export const GET_FAVORITES = "GET_FAVORITES";
export const REMOVE_FAVORITES = "REMOVE_FAVORITE";
export const FILTER_CARDS = "FILTER_CARDS";
export const ORDER_CARDS = "ORDER_CARDS";
/* export const ADD_FAVORITE = "ADD_FAVORITE"; */

/* export const addFavoriteGlobal = (character) => {
  return { type: ADD_FAVORITE, payload: character };
}; */
const URL_BASE = "https://rick-and-morty-api-indol-gamma.vercel.app/";

export const getFavorites = () => {
  return async function (dispatch) {
    const response = await axios.get(`${URL_BASE}/fav`);
    dispatch({ type: GET_FAVORITES, payload: response.data });
  };
};

export const addFavorites = (character) => {
  return async function (dispatch) {
    const response = await axios.post(`${URL_BASE}/fav`, character);
    dispatch({ type: ADD_FAVORITES, payload: response.data });
  };
};

export const removeFavorite = (id) => {
  return async function (dispatch) {
    await axios.delete(`${URL_BASE}/fav/${id}`);
    dispatch({ type: REMOVE_FAVORITES, payload: id });
  };
};

export const filterCards = (filter) => {
  return { type: FILTER_CARDS, payload: filter };
};

export const orderCards = (order) => {
  return { type: ORDER_CARDS, payload: order };
};
