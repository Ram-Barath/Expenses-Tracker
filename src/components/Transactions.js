import React,{useContext} from 'react'
import {GlobalContext} from '../context/GlobalContext';


export const Transactions = ({ transaction }) => {
    const{deleteTransaction } = useContext(GlobalContext);
    const sign = transaction.amount < 0 ? '-' : '+';

    return (
        <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
            {transaction.item} <span>{sign}₹{Math.abs(transaction.amount)}</span>
            <button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
        </li>
    )
}
