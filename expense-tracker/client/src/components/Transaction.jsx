import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState.js';
// import TableCell from '@mui/material/TableCell';
// import TableRow from '@mui/material/TableRow';

export const Transaction = ({ transaction }) => {
    const { deleteTransaction } = useContext(GlobalContext);

    const options = [
      { value: 'groceries', label: 'Groceries' },
      { value: 'transportation', label: 'Transportation' },
      { value: 'travel_fun', label: 'Travel/Fun' },
      { value: 'restaurant', label: 'Restaurant' },
      { value: 'shopping', label: 'Shopping' },
      { value: 'investing', label: 'Investing' },
      { value: 'other', label: 'Other' }
    ];

    const sign = transaction.amount < 0 ? '-' : '+';
    const classType = transaction.amount < 0 ? 'expense' : 'income';
    const description = transaction.text;

    let transactionCategory = "";
    for (let i=0; i<options.length; i++){
      if(options[i].value === transaction.category){
        transactionCategory = options[i].label;
      }
    }

    // const transactionCategory = options.filter(option => transaction.category === option.value);

    return (
      // <>
      // <TableRow className={classType}>
      //         <TableCell>{description}</TableCell>
      //         <TableCell>{transactionCategory}</TableCell>
      //         <TableCell>{`${sign}$${Math.abs(transaction.amount)}`}</TableCell>
      //         <TableCell align="right"><button onClick={() => deleteTransaction(transaction._id)} className="delete-btn">x</button></TableCell>
      // </TableRow>
      // </>
    <li className={classType}>
          {description} {transactionCategory} <span>{sign}${Math.abs(transaction.amount)}</span><button onClick={() => deleteTransaction(transaction._id)} className="delete-btn">x</button>
        </li>
  )
}
