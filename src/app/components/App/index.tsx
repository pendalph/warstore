import React, { useState } from 'react';
import { connect } from 'react-redux';
import { itemsFetchData } from 'app/modules/account/actions';
import { store } from 'app/modules/configuredStore';

const App: React.FC<{fetchData: any}> = (props) => {

    const [ nickname, setNickname ] = useState(``);

    const handleChange = (event: any) => {
        setNickname(event.target.value);
        props.fetchData(`https://api.worldoftanks.ru/wot/account/list/?application_id=3e5721b263115b6c375cce4e144c33ed&search=${nickname}`);
    };

    console.log(store.getState())
    
    return (
        <React.Fragment>
            <h1>hello</h1>
            <input placeholder='example: anubisath' onChange={handleChange} ></input>

        </React.Fragment>
    );
};

const mapStateToProps = (state: any) => {
    return {
        data: state.data || [],
        isLoading: state.isLoading,
        isError: state.isError
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        fetchData: (url: string) => dispatch(itemsFetchData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);