import React, { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';

const Balance = () => {
    const { transactions } = useContext(GlobalContext);
    let balance;
    let income;
    let expense;
    const amount = transactions.map((transaction) => {
        return transaction.amount
    })
    income = amount.filter(amount => amount > 0).reduce((sum, val) => sum + val,0);
    expense = amount.filter(amount => amount < 0).reduce((sum, val) => sum + val,0);

    balance = Math.abs(income) - Math.abs(expense);
    return (
        <div>
            <h4>Your Balance</h4>
            <h1>${balance}</h1>
        </div>
    );
}

export default Balance;
