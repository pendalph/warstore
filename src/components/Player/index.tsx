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

    const PlayerData = () => {
        const stats = info[`${props.id}`];
        return (
            <React.Fragment>
                <div>last_battle_time: {stats.last_battle_time}</div>
                <div>account_id: {stats.account_id}</div>
                <div>created_at: {stats.created_at}</div>
                <div>updated_at: {stats.updated_at}</div>
                <div>global_rating: {stats.global_rating}</div>
                <div>nickname: {stats.nickname}</div>
                <div>logout_at: {stats.logout_at}</div>
                <div>STATS:</div>
                <div>logout_at: {stats.logout_at}</div>
            </React.Fragment>
        )
    }

    return(
        <div>
            {info ? (<PlayerData/>) : (<Skeleton count={5}/>)}
        </div>
    );
};

export default Player;