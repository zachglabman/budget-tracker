// exporting these modules -> https://stackify.com/node-js-module-exports/
//routing -> https://www.digitalocean.com/community/tutorials/how-to-handle-routing-in-react-apps-with-react-router

const transactionModel = require('../models/Transaction');

// list all transactions
// route: GET /api/zach/transactions
exports.getTransactions = async (req, resp, next) => {
    //using mongoose methods
    try{
        const transactions = await transactionModel.find();

        return resp.json({
            data: transactions
        });

    }
    catch (e){
        console.log(e);
    }
}

// description: add transactions
// route: axios POST /api/zach/transactions
exports.addTransactions = async (req, resp, next) => {
    try{
    const text = req.body.text;
    const amount = req.body.amount;
    // const category = req.body.category;

    const transaction = await transactionModel.create(req.body);

    return resp.json({
        success: true,
        data: transaction
    });
    }
    catch (e) {
        console.log(e);
    }
}

// description: delete transactions
// route: axios DELETE /api/zach/transactions/_id
exports.deleteTransactions = async (req, resp, next) => {
    try{
        const transaction = await transactionModel.findById(req.params.id);
    //transaction not found
        if (!transaction){
            return resp.json({
                success: false,
                error: "Transaction not found"
            });
        }
        await transaction.remove();
        return resp.json({
            success: true,
            data: {}
        });
    }
    catch(e){
        return resp.json({
            success: false,
            error: 'Server Error'
        });
    }
}

// // description: update transactions
// // route: axios DELETE /api/zach/transactions/_id
// exports.updateTransaction = async (req, resp, next) => {
//     try{
//         // similar to delete, except populates 
//         const transaction = await transactionModel.findById(req.params.id);
//     //transaction not found
//         if (!transaction){
//             return resp.json({
//                 success: false,
//                 error: "Transaction not found"
//             });
//         }
//         await transaction.remove();
//         return resp.json({
//             success: true,
//             data: {}
//         });
//     }
//     catch(e){
//         return resp.json({
//             success: false,
//             error: 'Server Error'
//         });
//     }
// }