import React, {useState, useContext} from 'react';
import Select from 'react-select';

import { GlobalContext } from '../context/GlobalState.js';

const options = [
  // if time, make separate income transaction model (without required category)
  { value: 'income', label: 'Income' },
  { value: 'groceries', label: 'Groceries' },
  { value: 'transportation', label: 'Transportation' },
  { value: 'travel_fun', label: 'Travel/Fun' },
  { value: 'restaurant', label: 'Restaurant' },
  { value: 'shopping', label: 'Shopping' },
  { value: 'investing', label: 'Investing' },
  { value: 'other', label: 'Other' }
];

export const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState('');

    const { addTransaction } = useContext(GlobalContext);
  
    const onSubmit = (e) => {
      e.preventDefault();
      //add a transaction within component
      addTransaction({
        // arbitrary id number
        id: Math.floor(Math.random()*69696969),
        text,
        amount: parseFloat(amount),
        category
      });
    }

    const categoryChange = e => {
      setCategory(e.value);
    }

    const textChange = e => {
      setText(e.target.value)
    }

    const amountChange = e => {
      setAmount(e.target.value)
    }


  
    return (
    <>
    <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Description</label>
          <input type="text" value={text} onChange={textChange} placeholder="Description.." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount <br/></label>
          <input type="number" value={amount} onChange={amountChange} placeholder="Amount.." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Category <br/></label>
          {/* Dropdown component - subcomponent of addTransaction */}
          <Select
          options={options}
          value={options.find(obj => obj.value === category)}
          onChange={categoryChange}
          placeholder="Category.." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  )
}
