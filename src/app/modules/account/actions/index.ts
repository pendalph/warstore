import { DATA_ERROR, DATA_SUCCESS, DATA_LOADING } from 'app/modules/account/actionTypes';

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