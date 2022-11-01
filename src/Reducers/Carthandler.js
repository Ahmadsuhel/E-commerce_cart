import { ActionTypes } from "../Actions/ActionType";

    

const cart=[];

export const handlecart=(state=cart,{type,payload})=>{
    const product=payload;
    switch(type){
        case ActionTypes.ADD_TO_CART:
            const exist=state.find((x)=>x.id===product.id)
            if(exist){
                return state.map((x)=>x.id===product.id?{...x,qty:x.qty+1}:x);
            }else{
                const product=payload;
                return[
                    ...state,
                    {
                        ...product,
                        qty:1
                    }
                ]
            };
            case ActionTypes.DELETE_TO_CART:

            const exist1=state.find((x)=>x.id===product.id);
            if(exist1.qty==1){
                    return state.filter((x)=>x.id!=exist1.id);
            }
            else{
              return  state.map((x)=>
                x.id==product.id?{...x,qty:x.qty-1}:x);
            }


            case ActionTypes.DELETE_SINGLE_VALUE:
                console.log('deltetetetetet.....,',product)
            
                return state.filter((x)=>x.id!==product.id);

               case ActionTypes.CLEAR_CART:
                return[
                           
                      ]
                   
             
                                           
           
            default:
             return state;
    }

}