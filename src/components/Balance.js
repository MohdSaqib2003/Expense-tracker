import React from 'react';
import { connect } from 'react-redux';

const Balance = (props) => {
    console.log("Transac : ",props.transactions);
    const amount = props.transactions.map(transaction=>{
        return Number(transaction.amount);
    }).reduce((sum,curr)=>{
        return sum+curr;
    },0);

    console.log('Amount : ', amount)
    return (
        <div>
            <h4>Your Balance</h4>
            <h1>${amount}.00</h1>
        </div>
    );
}

const mapStateToProps = state =>{
    return {
        transactions : state.transactions
    }
}

export default connect(mapStateToProps)(Balance);
