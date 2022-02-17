import React, { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';

const IncomeExpense = () => {
    const { transactions } = useContext(GlobalContext);
    let income;
    let expense;
    const amount = transactions.map((transaction) => {
        return transaction.amount
    })
    income = amount.filter(amount => amount > 0).reduce((sum, val) => sum + val);
    expense = amount.filter(amount => amount < 0).reduce((sum, val) => sum + val);


    return (
        <div className='inc-exp-container'>
            <div>
                <h4>Income</h4>
                <p className="money plus">+${income}.00</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">-${expense}.00</p>
            </div>
        </div>
    );
}
export default IncomeExpense;