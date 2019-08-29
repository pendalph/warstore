import { AnyAction } from 'redux';
import { DATA_ERROR, DATA_SUCCESS, DATA_LOADING, ACCOUNT_ID } from 'modules/actionTypes';

interface IRootState {
    items: any;
    isLoading: boolean;
    isError: boolean;
    accountId?: number;
};

export const rootState: IRootState = {
    items: [],
    isLoading: false,
    isError: false,
};

export const accountPrimaryData = (state = rootState, action: AnyAction) => {
    console.log('Action::', action);
    switch (action.type) {
        case DATA_ERROR:
            return {
                ...state,
                isError: action.payload
            };
        
        case DATA_LOADING:
            return {
                ...state,
                isLoading: action.payload
            };

        case DATA_SUCCESS:
            return {
                ...state,
                items: action.payload
            };

        case ACCOUNT_ID:
            return {
                ...state,
                accountId: action.payload
            };

        default:
            return state
    };
};