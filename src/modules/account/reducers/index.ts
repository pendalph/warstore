import { AnyAction } from 'redux';
import { SET_LOADING, SET_SUCCESS, SET_ERROR, SET_ACCOUNT_ID } from 'modules/actionTypes';

export type State = {
    items: any;
    isLoading: boolean;
    isError: boolean;
    accountId?: number;
};

export const initialState: State = {
    items: [],
    isLoading: false,
    isError: false,
};

const account = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case SET_ERROR:
            return {
                ...state,
                isError: action.payload
            };
        
        case SET_LOADING:
            return {
                ...state,
                isLoading: action.payload
            };

        case SET_SUCCESS:
            return {
                ...state,
                items: action.payload
            };

        case SET_ACCOUNT_ID:
            return {
                ...state,
                accountId: action.payload
            };

        default:
            return state
    };
};

export default account;