import { combineReducers } from 'redux';
import productReducer from '../reducers/ProductReducer';


export default combineReducers({
  products: productReducer
})