import { ActionTypes } from "../contents/action-types"
export const SetProducts= (products)=>{
    return{
        type:ActionTypes.SET_PRODUCTS,
        payload:products,
    };
    
};

export const SelectedProduct= (products)=>{
    return{
        type:ActionTypes.SELECTED_PRODUCT,
        payload:products,
    };
    
};
export const removeSelectedProduct = () => {
    return {
      type: ActionTypes.REMOVE_SELECTED_PRODUCT,
    };
  };