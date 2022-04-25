import React from 'react'

export const Title = () => {

  const monthsArray = [
    "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
  ];
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();

  return (
    <h1>
        {monthsArray[currentMonth]} Expenses
    </h1>
  )
}
