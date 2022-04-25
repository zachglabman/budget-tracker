// route module - connects to mongodb database to add into collection "transactions"

// learned from https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes
const express = require('express');
const router = express.Router();

//required controllers
const { getTransactions, addTransactions, deleteTransactions } = require('../controllers/transaction-controller.js');
// TODO? update transaction
//const { getTransactions, addTransactions, updateTransaction, deleteTransactions } = require('../controllers/transaction-controller.js');

// "home" route
// to get or add transactions, same route
router.route('/').get(getTransactions);
router.route('/').post(addTransactions);

// "id" route
// to delete, we need an id
router.route('/:id').delete(deleteTransactions);
//router.route('/:id').update(updateTransaction);

// https://stackify.com/node-js-module-exports/
module.exports = router;