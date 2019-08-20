import { DATA_ERROR, DATA_SUCCESS, DATA_LOADING, ACCOUNT_ID } from 'modules/actionTypes';

export const dataError = (error: boolean) => {
    return {
        type: DATA_ERROR,
        payload: error
    };
};

export const dataLoading = (loading: boolean) => {
    return {
        type: DATA_LOADING,
        payload: loading
    };
};

export const dataSuccess = (items: any) => {
    return {
        type: DATA_SUCCESS,
        payload: items
    };
};

export const getAccountId = (id: number) => {
    return {
        type: ACCOUNT_ID,
        payload: id
    }
}

export const itemsFetchData = (url: string) => {
    return (dispatch: any) => {

        dispatch(dataLoading(true));

        fetch(url)
            .then((response) => {

                if(!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(dataLoading(false));

                return response;
            })
            .then((response) => response.json())
            .then((items) => dispatch(dataSuccess(items)))
            .catch(() => dispatch(dataError(true)));
    };
};

export const selectAccountId = (id: number) => {
    return (dispatch: any) => {
        dispatch(getAccountId(id));
    }
};