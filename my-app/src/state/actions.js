import ADD_NEW_TRANSACTION from './actions-types';
import store from './store';

function addNewTransaction(payload) {
    return {
      type: ADD_NEW_TRANSACTION,
      payload: payload
    }
}
const boundAddNewTransaction = payload => store.dispatch(addNewTransaction(payload));
export default boundAddNewTransaction;