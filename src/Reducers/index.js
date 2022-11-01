import { productReducer,selectedProductReducer } from './ShopProductReducers';
import { handlecart } from './Carthandler';
import { combineReducers } from 'redux'
import {reducer as toastrReducer} from 'react-redux-toastr'

const reducers= combineReducers({
    product:selectedProductReducer,
    allProducts:productReducer,
    carthandle:handlecart,
    toastr: toastrReducer 
    
   
});

export default reducers;















