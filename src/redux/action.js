import { ADD_TRANSACTION } from "./constant";
import { DELETE_TRANSACTION } from "./constant";

export const addTransaction = (formData)=>{
    return {
        type : ADD_TRANSACTION,
        payload : formData
    }
}

export const deleteTransaction = (id)=>{
    return {
        type : DELETE_TRANSACTION,
        payload : id
    }
}