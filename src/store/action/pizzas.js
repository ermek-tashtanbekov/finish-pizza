import axios from "axios";

export const setPizzas = (items) => ({
  type: 'SET_PIZZAS',
  payload: items,
});


export const fetchPizzas = () => (dispatch) => {
  axios.get('https://610126d34e50960017c29c33.mockapi.io/items')
    .then(({ data }) => (
      dispatch(setPizzas(data))
    ))
}