import React from 'react';
import { connect } from 'react-redux';
import Transaction from './Transaction';

const Transactionlist = (props) => {
  console.log('PPPPPPPP : ', props.transactions)
    return (
        <>
          <h3> History </h3>  
          <ul className='list'>
             {props.transactions.map(val=>{
               console.log(val);
              return <Transaction key={val.id} transaction={val}/>
             })}
          </ul>
        </>
    );
}
const mapStateToProps = state =>{
  return {
    transactions : state.transactions
  }
}
export default connect(mapStateToProps)(Transactionlist);