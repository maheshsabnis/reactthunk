import { ProductHttpService } from "../services/producthttpservice";

export const POST_PRODUCT = 'POST_PRODUCT';
export const POST_PRODUCT_SUCCESS = 'POST_PRODUCT_SUCCESS';
export const POST_PRODUCT_FAILURE = 'POST_PRODUCT_FAILURE';

export const postProduct=(product)=>({type:POST_PRODUCT});
export const postProductSuccess = product=>({
    type: POST_PRODUCT_SUCCESS,
    payload: product
});

export const postProductFailure = () => ({ type: POST_PRODUCT_FAILURE })

export function fetchPostproduct(prd){
    console.log(`Inside post action ${JSON.stringify(prd)}`);
    return async dispatch =>{
        dispatch(postProduct(prd));
        const serv = new ProductHttpService();
        try {
            const response  = await serv.postProducts(prd);
            const data = response.data;
            dispatch(postProductSuccess(data));
        } catch(e){
            dispatch(postProductFailure());
        }
    }
}

