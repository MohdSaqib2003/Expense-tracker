import React, {useContext} from 'react';
import { GlobalContext } from '../Context/GlobalState';

const Balance = () => {
    const {transactions} = useContext(GlobalContext);
    const amount = transactions.map((transaction)=>{
          return  transaction.amount
    })
    const income = amount.filter(amount=>amount>0).reduce((sum,val)=> sum+val);
    const expense = amount.filter(amount=> amount<0).reduce((sum,val)=> sum+val);
    console.log('AMMMM : ',amount);
    console.log('income : ',income);
    console.log('expense : ',expense);
    console.log('Balance : ');
    const balance = Math.abs(income) - Math.abs(expense);
    
    return (
        <div>
            <h4>Your Balance</h4>
            <h1>${balance}</h1>
        </div>
    );
}

export default Balance;
