import React from 'react';
import { connect } from 'react-redux';
import { deleteTransaction } from '../redux/action';

const Transaction = (props) => {
    const transaction = props.transaction;
    const sign = transaction.amount > 0 ? "+" : '-';

    return (
        <>
             <li className={sign === "+" ? 'plus' : 'minus'}>
                {transaction.text} <span>{sign} $ {Math.abs(transaction.amount)} </span> <button className='delete-btn' onClick={()=>{props.deleteTransaction(transaction.id)}}> x </button>
              </li>
        </>
    );
}
const mapDispatchToProps = {
    deleteTransaction
}
export default connect(null,mapDispatchToProps)(Transaction);