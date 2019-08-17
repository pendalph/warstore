import { AnyAction } from 'redux';
import { DATA_ERROR, DATA_SUCCESS, DATA_LOADING } from 'app/modules/account/actionTypes';

interface IRootState {
    items: any;
    isLoading: boolean;
    isError: boolean
};

export const rootState: IRootState = {
    items: [], // empty array
    isLoading: false, // initially the download status is false, when it becomes true when the download starts
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

        default:
            return state
    };
};