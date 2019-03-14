
import Products from '../api/products';

import { FETCH_PRODUCTS } from './types';

export const fetchProducts = () => async dispatch => {
    const response = await Products.get('/product/read.php');
    dispatch({ type: FETCH_PRODUCTS, payload: response.data });
}
