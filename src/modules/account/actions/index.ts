import { SET_LOADING, SET_SUCCESS, SET_ERROR, SET_ACCOUNT_ID } from 'modules/actionTypes';

export const setError = (error: boolean) => {
    return {
        type: SET_ERROR,
        payload: error
    };
};

export const setLoading = (loading: boolean) => {
    return {
        type: SET_LOADING,
        payload: loading
    };
};

export const setSuccess = (items: any) => {
    return {
        type: SET_SUCCESS,
        payload: items
    };
};

export const setAccountId = (id: number) => {
    return {
        type: SET_ACCOUNT_ID,
        payload: id
    };
};

export const itemsFetchData = (url: string) => {
    return (dispatch: any) => {

        dispatch(setLoading(true));

        fetch(url)
            .then((response) => {

                if(!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(setLoading(false));

                return response;
            })
            .then((response) => response.json())
            .then((items) => dispatch(setSuccess(items)))
            .catch(() => dispatch(setError(true)));
    };
};

export const selectAccountId = (id: number) => {
    return (dispatch: any) => {
        dispatch(setAccountId(id));
        dispatch(setSuccess([]));
    };
};