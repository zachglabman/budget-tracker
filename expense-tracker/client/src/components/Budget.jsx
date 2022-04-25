import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState.js';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

// budget component
export const Budget = () => {
  // importing globalContext
  const { transactions } = useContext(GlobalContext);

  function getTotal(transactions) {
    const transactionAmounts = [];
    for (let i = 0; i<transactions.length; i++){
        transactionAmounts.push(transactions[i].amount);
    }
    return transactionAmounts;
  }
  
  function totalSum(s){
    let total = 0;
    const groceryTransactions = transactions.filter(transaction => transaction.category === s);
    if (groceryTransactions != null){
  
      const groceryArray = getTotal(groceryTransactions);
      total = groceryArray.reduce((previousValue, currentValue) => (previousValue + currentValue), 0);
      total.toFixed(2);
  
      if (total>0){
        total = 0;
      }
    }
    return total;
  }

  const budget = {
    groceries: 200,
    transportation: 100,
    travel_fun: 50,
    restaurant: 100,
    shopping: 50,
    investing: 250,
    other: 100
  }

  // list of relevant transactions (to total them individually)
  let groceryTotal = 0;
  let transportTotal = 0;
  let travelTotal = 0;
  let restaurantTotal = 0;
  let shoppingTotal = 0;
  let investingTotal = 0;
  let otherTotal = 0;

  groceryTotal = totalSum('groceries');
  transportTotal = totalSum('transportation');
  travelTotal = totalSum('travel_fun');
  restaurantTotal = totalSum('restaurant');
  shoppingTotal = totalSum('shopping');
  investingTotal = totalSum('investing');
  otherTotal = totalSum('other');

  //DEPRECATED - keeping in case something breaks

  // const groceryTransactions = transactions.filter(transaction => transaction.category === 'groceries');
  // if (groceryTransactions != null){

  //   const groceryArray = getTotal(groceryTransactions);
  //   groceryTotal = groceryArray.reduce((previousValue, currentValue) => (previousValue + currentValue), 0);
  //   groceryTotal.toFixed(2);

  //   if (groceryTotal>0){
  //     groceryTotal = 0;
  //   }
  // }

  return (
    <React.Fragment>
      <h3>Budget</h3>
    <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell><strong>Category</strong></TableCell>
            <TableCell><strong>Budgeted</strong></TableCell>
            <TableCell><strong>Actual</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Groceries</TableCell>
            <TableCell>${budget.groceries}</TableCell>
            <TableCell>${Math.abs(groceryTotal)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Transportation</TableCell>
            <TableCell>${budget.transportation}</TableCell>
            <TableCell>${Math.abs(transportTotal)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Travel/Fun</TableCell>
            <TableCell>${budget.travel_fun}</TableCell>
            <TableCell>${Math.abs(travelTotal)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Restaurant</TableCell>
            <TableCell>${budget.restaurant}</TableCell>
            <TableCell>${Math.abs(restaurantTotal)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Shopping</TableCell>
            <TableCell>${budget.shopping}</TableCell>
            <TableCell>${Math.abs(shoppingTotal)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Investing</TableCell>
            <TableCell>${budget.investing}</TableCell>
            <TableCell>${Math.abs(investingTotal)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Other</TableCell>
            <TableCell>${budget.other}</TableCell>
            <TableCell>${Math.abs(otherTotal)}</TableCell>
          </TableRow>
        </TableBody>
</Table>
    </React.Fragment>)
}
        