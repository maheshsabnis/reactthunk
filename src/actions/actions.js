import { ProductHttpService } from "./../services/producthttpservice";

export const GET_PRODUCTS = 'GET_PRODUCTS';
export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';
export const GET_PRODUCTS_FAILURE = 'GET_PRODUCTS_FAILURE';

export const getProducts=()=>({type:GET_PRODUCTS});
export const getProductsSuccess = products=>({
    type: GET_PRODUCTS_SUCCESS,
    payload: products
});

export const getProductsFailure = () => ({ type: GET_PRODUCTS_FAILURE })

export function fetchproducts(){
    console.log('Inside the action');
    return async dispatch =>{
        dispatch(getProducts());
        const serv = new ProductHttpService();
        try {
            const response  = await serv.getProducts();
            const data = response.data;
            dispatch(getProductsSuccess(data));
        } catch(e){
            dispatch(getProductsFailure());
        }
    }
}

