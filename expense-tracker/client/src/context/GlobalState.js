import React, {createContext, useReducer} from 'react';
import AppReducer from './Reducer';
//make http requests with axios
import axios from 'axios';
// Initial state
const initialState = {
    transactions: [],
    error: null
}

// Initial state to be exported to other files
export const GlobalContext = createContext(initialState);

// Global component
export const GlobalProvider = ({children}) => {
    // dispatch helps manage async queue
    const [state, dispatch] = useReducer(AppReducer, initialState);

  // transaction actions
  const deleteTransaction = async(id) => {
    try{
      await axios.delete(`/api/zach/transactions/${id}`);
      
      //dispatch invoked when async action is completed
      dispatch({
        type: 'delete',
        payload: id
      });
    }
    catch (e){
      //dispatch invoked when async action is completed
      dispatch({
        type: 'error',
        payload: e.error
      });
    }
  }

  const addTransaction = async (t) => {
    const {text, amount, category} = t;
    try{
    // posting with axios
    // https://blog.logrocket.com/axios-vs-fetch-best-http-requests/
    const postAction = await axios.post('/api/zach/transactions', {
      text: text,
      amount: amount,
      category: category
    }, {headers:{'Content-Type': 'application/json'}});
    // grabs full opbject
    const fullData = postAction.data;
    const data = fullData.data;
    //dispatch invoked when async action is completed
    dispatch({
      type: 'add',
      payload: data
    });
  }
  catch (e){
    //dispatch invoked when async action is completed
    dispatch({
      type: 'error',
      payload: e.error
    });
  }
  }

  const getTransactions = async () => {
    try{
    const response = await axios.get('/api/zach/transactions');
    // gives full object
    const fullData = response.data;
    const data = fullData.data;

    dispatch({
      type: 'get_all',
      payload: data
    });
  }
  catch (e){
    dispatch({
      type: 'error',
      payload: e.error
    });
  }
  }
  // optionally an update transaction function [WIP]
  // const updateTransactions = async () => {
  //   try{
  //   const response = await axios.post(`/api/zach/transactions/${id}`);
  //   // gives full object
  //   const fullData = response.data;
  //   const data = fullData.data;

  //   dispatch({
  //     type: 'get_all',
  //     payload: data
  //   });
  // }
  // catch (e){
  //   dispatch({
  //     type: 'error',
  //     payload: e.fullData.error
  //   });
  // }
  // }

  return (<GlobalContext.Provider value={{
    transactions: state.transactions,
    error: state.error,
    getTransactions,
    deleteTransaction,
    addTransaction
  }}>
    {children}
  </GlobalContext.Provider>);
}