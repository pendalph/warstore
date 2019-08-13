import { combineReducers } from 'redux';
import { accountReducer } from 'app/modules/account/reducers';

export const rootReducer = combineReducers({
    account: accountReducer,
})