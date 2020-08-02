import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalContext';
import {Transactions} from './Transactions'

export const TransactionList = () => {
    const { transaction } = useContext(GlobalContext);

    return (
        <div>
            <h3>History</h3>
            <ul className="list">
                { transaction.map(transaction =>( <Transactions key={transaction.id} transaction={transaction} /> )) }
            </ul>
        </div>
    )
}
