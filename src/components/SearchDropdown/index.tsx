import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectAccountId } from 'modules/account/actions';

const Dropdown: React.FC = () => {

    const dispatch = useDispatch();

    const handleSelect = (id: number) => dispatch(selectAccountId(id));

    const accountData = useSelector((state: any) => {
        return state.accountPrimaryData.items && state.accountPrimaryData.items.data;
    });

    return(
        <div className='dropdown'>
            <ul className='dropdown-list'>
                {accountData ? (
                    accountData.map((value: any) => (
                        <li className='dropdown-list__item' key={value.account_id} onClick={() => handleSelect(value.account_id)}>
                            <Link to={`/player/${value.nickname}-${value.account_id}`}>{value.nickname}</Link>
                        </li>
                    ))
                ) : (
                    null
                )}
            </ul>
        </div>
    );
};

export default Dropdown;