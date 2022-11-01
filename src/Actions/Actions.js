import Fakeapi from '../api/Fakeapi';
import{ActionTypes} from './ActionType';

        export const fetchProduct=()=> async(dispatch)=>{
         const response= await Fakeapi.get('/products');
         dispatch(
             {
                 type:ActionTypes.FETCH_PRODUCTS,
                 payload:response.data
             }

         )
     };

    export const fetchSingleProduct=(id)=>async(dispatch)=>{
        const response=await Fakeapi.get(`/products/${id}`);
        console.log('response',response)
        dispatch(
           {
            type:ActionTypes.SELECTED_PRODUCT,
            payload:response.data
           }
        )
    };
        

 
    // export const removeselectedProduct=()=>{
    //     return{
    //         type:ActionTypes.REMOVE_PRODUCT
    //     };

    // };


    export const AddToCart=(product)=>{
        return{
          type:ActionTypes.ADD_TO_CART,
          payload:product
        };
    };


    export const DeleteToCart=(product)=>{
        return{
          type:ActionTypes.DELETE_TO_CART,
          payload:product
        };
    };



    export const DeleteSingleCart=(product)=>{
        return{
          type:ActionTypes.DELETE_SINGLE_VALUE,
          payload:product
        };
    };



    export const ClearCart=()=>{
        return{
          type:ActionTypes.CLEAR_CART,
       
        };
    };
