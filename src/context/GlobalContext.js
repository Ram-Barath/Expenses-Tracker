import React, { createContext , useReducer } from 'react'
import AppReducer from "./AppReducer";

//initial state
const initialState={
    transaction:[]
}

// createContext
export const GlobalContext = createContext(initialState);


//useReducer,provide component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    //Action,Delete Transactions from the list
        function deleteTransaction(id) {
            dispatch({
                type:'Delete_Transaction',
                payload:id
            });
        }
        //Create Transactions from the list
        function createTransaction(transaction) {
            dispatch({
                type:'Create_Transaction',
                payload:transaction
            });
        }

    return (<GlobalContext.Provider value={{
        transaction: state.transaction,
        deleteTransaction,
        createTransaction
    }}>
        {children}
    </GlobalContext.Provider>

    )
}