import React from 'react';
import {connect} from 'react-redux';

const IncomeExpense = (props) => {
    console.log('exxxxxxxx : ',props.transactions);
    const amount = props.transactions.map(transaction=>{
        return Number(transaction.amount);
    });
    const income = amount.filter(income=>income > 0).reduce((sum,curr)=>sum+curr,0);
    const expense = amount.filter(income=>income < 0).reduce((sum,curr)=>sum+curr,0);

    console.log('income : ',income);
    console.log('expense : ',expense);
    return (
        <div className='inc-exp-container'>
            <div>
                <h4>Income</h4>
                <p className="money plus">+${income}.00</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">-${Math.abs(expense)}.00</p>
            </div>
        </div>
    );
}
const mapStateToProps = state =>{
    return {transactions : state.transactions}
}
export default connect(mapStateToProps)(IncomeExpense);