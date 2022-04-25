//https://mongoosejs.com/docs/guide.html
//https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose

const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
  text:{
    type: String,
    required: [true, "Please add a description"]
  },
  amount:{
      type: Number,
      required: [true, "Please add a positive or negative number"]
      // () => {
        //amount != 0;
      // }
},
  category:{
    type: String,
    required: [true, "Please add a category"]
  }
});

module.exports = mongoose.model('Transaction', TransactionSchema);