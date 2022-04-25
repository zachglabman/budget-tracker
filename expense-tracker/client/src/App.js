// modeled core functionality off starter vanilla js code
// https://github.com/bradtraversy/vanillawebprojects/blob/master/expense-tracker/script

import React from 'react';
import { Title } from './components/Title';
import { Balance } from './components/Balance';
import { Budget } from './components/Budget';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import { BudgetPie } from './components/BudgetPie';

import { GlobalProvider } from './context/GlobalState';

import './App.css';


function App() {
  
  return (
    <GlobalProvider>
      <Title />
      <div className="container">
        <Balance />
        <BudgetPie />
        <Budget />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
