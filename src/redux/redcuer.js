import { ADD_TRANSACTION } from "./constant";
import { DELETE_TRANSACTION } from "./constant";

const initialState = {
    transactions : [
        {id : 1, text : 'Salary ', amount : '12000'},
        {id : 2, text : 'Rent ', amount : '-1000'}
    ]
};

const Reducer = (state = initialState, action)=>{    
    switch(action.type){
        case ADD_TRANSACTION:
            return {...state, transactions:[...state.transactions,action.payload]
            }            
        case DELETE_TRANSACTION:
            return {...state, transactions: state.transactions.filter(transaction=> transaction.id !== action.payload)
            }            
        default:
            return state;
    }
}
export default Reducer;