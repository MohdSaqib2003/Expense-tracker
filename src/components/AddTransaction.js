import React,{useContext, useState} from 'react';
import { GlobalContext } from '../Context/GlobalState';

const Addtransaction = () => {
    const {addTransaction} = useContext(GlobalContext);

    const [text,setText] = useState('');
    const [amount,setAmount] = useState();

    const onSubmit = e =>{
        e.preventDefault();
        let rand = Math.floor(Math.random() * 1000000)
        let formData = {
            id : rand,
            text,
            amount : Number(amount)
        }
        addTransaction(formData);
        setText('');
    }

    return (
        <>
        <h3> Add new transaction </h3>  
        <form onSubmit={onSubmit}>
            <div className="form-control">
                <label htmlFor="text">Text</label>
                <input type="text" placeholder='Enter text...' onChange={e=>{setText(e.target.value);}} value={text}/>
            </div>

            <div className="form-control">
                <label htmlFor="amount">
                    Amount <br />
                    (nagative - expense, positive - income)
                </label>
                <input type="number" placeholder='Enter amount...' onChange={e=>setAmount(e.target.value)} />
            </div>
            <button className="btn"> Add transaction </button>
        </form>                      
        </> 
    );
}

export default Addtransaction;
