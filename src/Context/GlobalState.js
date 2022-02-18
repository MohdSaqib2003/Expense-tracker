import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

const initialState = {
    transactions: [
        // {id:1,text:'salary',amount:10000},
        // {id:2,text:'rent',amount:-2000}
    ]
}
export const GlobalContext = createContext(initialState);


export const GlobalProvider = ({children})=>{
    const [state, dispatch] = useReducer(AppReducer, initialState);
    
    function deleteTransaction(id){
        console.log('Id : ',id);
        dispatch ({
            type : 'DELETE_TRANSACTION',
            payload : id
        })
    }

    function addTransaction(data){
        dispatch ({
            type : 'ADD_TRANSACTION',
            payload : data
        })
    }

    return ( <GlobalContext.Provider value={{transactions: state.transactions,deleteTransaction, addTransaction}}>
        {children}
    </GlobalContext.Provider>
    )
}