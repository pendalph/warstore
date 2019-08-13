import { DATA_ERROR, DATA_SUCCESS, DATA_LOADING } from 'app/modules/account/actionTypes';

interface IRootState {
    data: unknown[];
    isLoading: boolean;
    isError: boolean
};

export const rootState: IRootState = {
    data: [], // empty object
    isLoading: false, // initially the download status is false, when it becomes true when the download starts
    isError: false,
};


export function accountReducer(state = rootState, action: any){
    switch (action.type) {
        case DATA_LOADING:
            return { ...state, data: action.payload, isLoading: true, isError: false}

        case DATA_SUCCESS:
            return { ...state, data: action.payload, isLoading: false, isError: false}

        case DATA_ERROR:
            return { ...state, isError: true, isLoading: false }

        default:
            return state
    };
};