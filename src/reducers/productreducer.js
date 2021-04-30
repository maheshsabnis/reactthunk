import * as actions from './../actions/actions';
export const initialState = {
    loading: false,
    hasErrors: false,
    products: [],
  }
  
  export default function productsReducer(state = initialState, action) {
    switch (action.type) {
      case actions.GET_PRODUCTS:
          console.log('Inside the Get Products reducer');
        return { ...state, loading: true }
      case actions.GET_PRODUCTS_SUCCESS:
          console.log(`Inside the get products success reducer ${JSON.stringify(action.payload)}`);
        return { products: action.payload, loading: false, hasErrors: false }
      case actions.GET_PRODUCTS_FAILURE:
        return { ...state, loading: false, hasErrors: true }
      default:
        return state
    }
  }
  