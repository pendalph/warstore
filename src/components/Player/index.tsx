import React, { useEffect, useState } from 'react';
import AccountServices from 'services/accountService';
import Skeleton from 'react-loading-skeleton';

const Player: React.FC<{id: number}> = (props) => {

    const [ info, setInfo ] = useState();

    const wg = new AccountServices();

    useEffect(() => {
        wg.getAccountData(props.id)
            .then((body) => {
                setInfo(body.data)
            });
    }, []);

    if(info) {
        console.log('1')
    }
    else {
        console.log('2')
    }

    return(
        <React.Fragment>
            {info ? (<h1>{props.id}</h1>) : (<Skeleton count={5}/>)}
        </React.Fragment>
    );
};

export default Player;