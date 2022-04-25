//specify state changes in response to certain actions
const reducer = (state, action) => {
    if(action.type === 'error') {
        return{
            ...state,
            error: action.payload
        }
    }
    if(action.type === 'delete') {
        return {
            //spread operator takes values from array and inserts them
            ...state,
            transactions: state.transactions.filter(transaction => transaction._id !== action.payload)
        }
    }    
    if (action.type === 'add') {
        return {
            //spread operator takes values from array and inserts them
            ...state,
            transactions: [...state.transactions, action.payload]
        }
    }
    if(action.type === 'get_all'){
        return{
            //spread operator takes values from array and inserts them
            ...state,
            transactions: action.payload
        }
    }
    else{
        return state;
    }
}

export default reducer;