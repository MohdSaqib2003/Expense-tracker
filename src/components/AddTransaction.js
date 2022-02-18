import React,{useState} from 'react';
import { connect } from 'react-redux';
import { addTransaction } from '../redux/action';

const Addtransaction = (props) => {
    const [text,setText] = useState('');
    const [amount,setAmount] = useState();

    const onSubmit = e =>{
        e.preventDefault();
        const formData = {
            id : Math.floor(Math.random()*1000000),
            text,
            amount : Number(amount)
        }
        console.log("FormData : ",formData);
        props.addTransaction(formData);
        
    }
    return (
        <>
        <h3> Add new transaction </h3>  
        <form onSubmit={onSubmit}>
            <div className="form-control">
                <label htmlFor="text">Text</label>
                <input type="text" placeholder='Enter text...' onChange={e=>setText(e.target.value)}/>
            </div>

            <div className="form-control">
                <label htmlFor="amount">
                    Amount <br />
                    (nagative - expense, positive - income)
                </label>
                <input type="number" placeholder='Enter amount...' onChange={e=>setAmount(e.target.value)}/>
            </div>
            <button className="btn"> Add transaction </button>
        </form>                      
        </> 
    );
}
export default connect(null,{addTransaction})(Addtransaction);