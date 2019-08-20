import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { itemsFetchData, selectAccountId } from 'modules/account/actions';

const App: React.FC = () => {

    const dispatch = useDispatch();

    const handleChange = (event: any) => {
        const nickname = event.target.value
        dispatch(itemsFetchData(`https://api.worldoftanks.ru/wot/account/list/?application_id=3e5721b263115b6c375cce4e144c33ed&search=${nickname}`));
    };

    const handleSelect = (id: number) => dispatch(selectAccountId(id));
    
    const accountData = useSelector((state: any) => {
        return state.accountPrimaryData.items && state.accountPrimaryData.items.data;
    });

    const ListItems = () => {
        return (
            <React.Fragment>
                {accountData ? (
                    accountData.map((value: any) => (
                        <ul>
                            <li key={value.account_id} onClick={() => handleSelect(value.account_id)}>{value.nickname}</li>
                        </ul>
                    ))
                ) : (
                    <span>Введите имя пользователя что бы выбрать нужное из списка</span>
                )}
            </React.Fragment>
        );
    };
    
    return (
        <React.Fragment>
            <h1>hello</h1>
            <input placeholder='example: anubisath' onChange={handleChange}></input>
            <ListItems />
        </React.Fragment>
    );
};

export default App;