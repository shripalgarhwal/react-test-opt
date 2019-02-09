import initialState from './default-state';
import ADD_NEW_TRANSACTION from './actions-types';

function transactionReducer(state = initialState, action) {
    switch (action.type) {
      case ADD_NEW_TRANSACTION:
        const transId = state.transIncrement + 1;
        const newPayload = {...action.payload, transId};
        return Object.assign({}, state, {
            transList: [...state.transList, newPayload]
        })
      default:
        return state
    }
}
export default transactionReducer;