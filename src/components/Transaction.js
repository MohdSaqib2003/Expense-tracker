import React, {useContext} from 'react';
import { GlobalContext } from '../Context/GlobalState';

const Transaction = ({transaction}) => {

    const {deleteTransaction} = useContext(GlobalContext);


    const sign = transaction.amount > 0 ? '+' : "-";
    const amount = Math.abs(transaction.amount)
    
    return (<>        
             <li className={sign === '+'?"plus":"minus"}>
                {transaction.text} <span> {sign} ${amount}</span> <button className='delete-btn' onClick={()=>{deleteTransaction(transaction.id)}}>x</button>
              </li>
           </>
    );
}

export default Transaction;

