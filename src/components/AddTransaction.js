import React,{useState} from 'react';


const Addtransaction = () => {
    const [text,setText] = useState('');
    const [amount,setAmount] = useState();

    return (
        <>
        <h3> Add new transaction </h3>  
        <form>
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

export default Addtransaction;
