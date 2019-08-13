import { DATA_ERROR, DATA_SUCCESS, DATA_LOADING } from 'app/modules/account/actionTypes';

export function getDataLoading(loading: boolean) {
    return {
        type: DATA_LOADING,
        isLoading: loading
    };
};

export function getDataSuccess(items: any) { // Исправить тип, написать интерфейс исходя из того что будет приходить х1
    return {
        type: DATA_SUCCESS,
        items
    };
};

export function getDataError(error: boolean) {
    return {
        type: DATA_ERROR,
        isError: error
    };
};

export function fetchAccountData (url: string) {
    return (dispatch: any) => { // Исправить тип, написать интерфейс исходя из того что будет приходить х2
        dispatch(getDataLoading(true));
        fetch(url)
        .then((result) => {
            if(!result.ok) {
                throw Error(result.statusText);
            };

            dispatch(getDataLoading(false));

            return result;
        })
        .then((response) => response.json())
        .then((items) => dispatch(getDataSuccess(items)))
        .catch(() => dispatch(getDataError(true)));
    }
}