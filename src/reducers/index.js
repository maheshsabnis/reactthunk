import { combineReducers } from 'redux'

import productsReducer from './productreducer'
import postproductsReducer from './postproductreducer';

const rootReducer = combineReducers({
  products: productsReducer,
  postproduct: postproductsReducer
})

export default rootReducer;
