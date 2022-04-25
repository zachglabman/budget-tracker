// const { MongoClient } = require('mongodb');

// // connect to db
// const dbConnection = async () => {
//     const uri = process.env.MONGO_DB_URI;
//     const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true});
    
//     try{
//         const connection = await client.connect();
//         console.log(`MongoDB Connected: ${connection.connection.host}`);
//     }
//     catch (err) {
//         console.error(err);
//     }
//     finally {
//         await client.close();
//     }
// }

// // add transaction
// const addTransaction = async (client, newTransaction) => {
//     const result = await client.db("expenses").collection("all-transactions").insertOne(newTransaction);
//     console.log(`New transaction added with the following id: ${result.insertedId}`);
// }
// // delete transaction
// const deleteTransaction = async (client, id) => {
//     const result = await client.db("expenses").collection("all-transactions").deleteOne({_id:id});
    
//     console.log(`Transaction with id: ${result._id} was deleted`);
// }

// https://stackify.com/node-js-module-exports/
// module.exports = dbConnection;

// module.exports = addTransaction;
// module.exports = deleteTransaction;

// To connect with your mongoDB database

const mongoose = require('mongoose');
const dbConnection = async () => {

    try{
        mongoose.connect(`${process.env.MONGO_DB_URI}`, {
            dbName: 'expenses',
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(`MongoDB Connected`);
    }
    catch (err) {
        console.error(err);
    }

}

module.exports = dbConnection;