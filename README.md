# CSE330
Zach Glabman 466464 zachglabman

Justin Novellas 486351 jj4619

# Expense and Budget Tracker

## How to use:
- cd into expense-tracker folder and type 'npm run dev' in a terminal (runs two servers concurrently)
- Add expenses/incomes directly to dashboard by specifying a description, amount and category
- Delete an expense/income by clicking the red x at the left side (visuals thanks to Brad Traversy's CSS)
- Budget tool and pie chart dynamically update based on expenses and incomes added to the tracker

## Notes:
- Bank account balance and Budget are hardcoded in (change this directly in Balance, Budget components)
- MongoDB connection allows users to see transaction history
- Users can add, delete and get all transactions using express router
- Specify an expense by entering a negative value and an income with a positive value

### New Tools and Frameworks
- React.js (Hooks, Context API, Concurrently, Recharts, etc)
- Express.js
- MongoDB
- Material UI