const initialState = {
    items: [],
    isLoaded: true,
  };
  
  const pizzas = (state = initialState, action) => {
    // console.log(action, 'reducerPizzas');
    if (action.type === 'SET_PIZZAS') {
      return {
        ...state,
        items: action.payload,
      };
    }
    return state;
  };
  
  export default pizzas;







// import { SET_PIZZAS } from "../action/type"

// const initialState = {
//     items: [],

// }

// const pizza = (state = initialState, action) => {
//     const newState = { ...state }
//     switch (action.type) {
//         case SET_PIZZAS:
//             newState.items = action.items
//             return newState
//             break;
//             default:
//    }
//     return state
// }
// export default pizza