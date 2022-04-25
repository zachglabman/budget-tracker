import React, {useContext} from 'react'

import { GlobalContext } from '../context/GlobalState.js';

export const Balance = () => {
  //bringing context in from global state allows us to use anything in component
  const { transactions } = useContext(GlobalContext);
  
  //serves same purpose as .map function
  const amounts =  [];
  for (let i = 0;  i<transactions.length; i++){
    amounts[i] = transactions[i].amount;
  }

  // static, can be changed
  const starting_balance = 500;

  const total = amounts.reduce((partialSum, a) => (partialSum + a), 0).toFixed(2);
  
  // ES6 Ternary operator - learned this in 131
  const sign = (parseFloat(starting_balance) + parseFloat(total)) < 0 ? '-' : '';

  return (
    // JSX elements need to have one parent element - empty is ok
    <div>
        <h4>Starting Balance</h4>
        <h1>${starting_balance}</h1>

        <h4>Balance</h4>
        <h1>{sign}${Math.abs(parseFloat(starting_balance) + parseFloat(total))}</h1>
    </div>
  )
}
