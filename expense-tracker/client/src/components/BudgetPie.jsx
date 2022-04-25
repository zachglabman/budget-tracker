import React, {useContext} from 'react';
import { PieChart, Pie} from 'recharts';
import { GlobalContext } from '../context/GlobalState.js';

export const BudgetPie = () => {
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

  let overallTotal = groceryTotal+transportTotal+travelTotal+restaurantTotal+shoppingTotal+investingTotal+otherTotal;


  const data = [
      {name: 'Grocery', percent: groceryTotal/overallTotal, budget: 200/850, fill: '#BFFCC6'},
      {name: 'Transportation', percent: transportTotal/overallTotal, budget: 100/850, fill: '#6EB5FF'},
      {name: 'Travel/Fun', percent: travelTotal/overallTotal, budget: 50/850, fill: '#FFABAB'},
      {name: 'Restaurant', percent: restaurantTotal/overallTotal, budget: 100/850, fill: '#E4C962'},
      {name: 'Shopping', percent: shoppingTotal/overallTotal, budget: 50/850, fill: '#6A0DAD'},
      {name: 'Investing', percent: investingTotal/overallTotal, budget: 250/850, fill: '#FFB5E8'},
      {name: 'Other', percent: otherTotal/overallTotal, budget: 100/850, fill: 'gray'}
      ];

  let renderLabel = function(entry) {
    if (entry.percent > 0){
      return `${entry.name} ${(entry.percent * 100).toFixed(2)}%`;
    }
    else{
      return '';
    }
  }

  return (
    <PieChart width={700} height={400}>
        <Pie data={data} dataKey="percent" innerRadius={75} outerRadius={150} fill={data.fill} label={renderLabel}/>
        {/* <Pie data={data} dataKey="budget" innerRadius={5} outerRadius={35} fill={data.fill}/> */}
    </PieChart>
  )
}
