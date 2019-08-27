import React from 'react';
import Dropdown from 'components/SearchDropdown';
import { useDispatch } from 'react-redux';
import { itemsFetchData } from 'modules/account/actions';

const Search: React.FC = () => {

    const dispatch = useDispatch();

    const handleChange = (event: any) => {
        const nickname = event.target.value
        dispatch(itemsFetchData(`https://api.worldoftanks.ru/wot/account/list/?application_id=3e5721b263115b6c375cce4e144c33ed&search=${nickname}`));
    };

    return(
        <React.Fragment>
            <input placeholder='поиск' onChange={handleChange} className='header-search__input' />
            <Dropdown />
        </React.Fragment>
    );
};

export default Search;