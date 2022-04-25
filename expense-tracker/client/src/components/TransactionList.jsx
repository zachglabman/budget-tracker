import React, { useContext, useEffect } from 'react';
import { Transaction } from './Transaction.jsx';

import { GlobalContext } from '../context/GlobalState.js';

export const TransactionList = () => {
  //bringing context in from global state allows us to use anything in component
  const { transactions, getTransactions} = useContext(GlobalContext);
  
  // runs only once at beginning
  // from w3 schools lesson
  useEffect(() => {
    getTransactions();
    // eslint-disable-next-line
  }, []);

  // filter function in js 
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
  const incomes = transactions.filter(transaction => transaction.amount > 0);
  const expenses = transactions.filter(transaction => transaction.amount < 0);

  return (
    <>
    <h3>Expenses</h3>
      <ul className="list">
        {expenses.map(expense => (<Transaction key={expense.id} transaction={expense} />))}
      </ul>

    <h3>Incomes</h3>
      <ul className="list">
        {incomes.map(income => (<Transaction key={income.id} transaction={income} />))}
      </ul>
      </>
  )
}

//   return (
//     <React.Fragment>
//       <h3>Expenses</h3>
//       <Table size="small">
//         <TableHead>
//           <TableRow>
//             <TableCell>Description</TableCell>
//             <TableCell>Category</TableCell>
//             <TableCell align="right">Amount</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {expenses.map((expense) => (
//             <TableRow key={expense._id} >
//               <TableCell>{expense.text}</TableCell>
//               <TableCell>{expense.category}</TableCell>
//               <TableCell align="right">{`$${expense.amount}`}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>

//       <h3>Incomes</h3>
//       <Table size="small">
//         <TableHead>
//           <TableRow>
//             <TableCell>Description</TableCell>
//             <TableCell>Category</TableCell>
//             <TableCell align="right">Amount</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {incomes.map((income) => (
//             <TableRow key={income.id}>
//               <TableCell>{income.text}</TableCell>
//               <TableCell>{income.category}</TableCell>
//               <TableCell align="right">{`$${income.amount}`}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
      
//     </React.Fragment>
//   );
//}