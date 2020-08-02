import React, { useState,useContext } from 'react'
import {GlobalContext} from '../context/GlobalContext';

export const TransactionForm = () => {
    const{createTransaction } = useContext(GlobalContext);
    const [item,setItem]=useState('');
    const [amount,setAmount]=useState(0);

    const onSubmit=(e)=>{
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            item,
            amount: +amount
        }
        createTransaction(newTransaction);
    }

    return (
        <div>
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" id="text" value={item} onChange={(e) => setItem(e.target.value)} placeholder="Enter item..." autoComplete='off' />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount <br />(negative - expense, positive - income)</label>
          <input type="number" id="amount" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." autoComplete='off' />
        </div>
        <button className="btn">Add transaction</button>
      </form>
        </div>
    )
}
