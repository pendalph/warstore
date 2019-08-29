import { combineReducers } from 'redux';
import account, { State as AccountState } from 'modules/account/reducers';

export type RootState = {
    account: AccountState
}

export default combineReducers<RootState>({
    account
})