import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';

const ServerStatus: React.FC = () => {

    const [ serverStatus, setServerStatus ] = useState();

    useEffect(() => {
        getServerStatus()
            .then((body) => {
                setServerStatus(body.data.wot);
            });
    }, []);

    const getServerStatus = async () => {
        const result = await fetch(`https://api.worldoftanks.ru/wgn/servers/info/?application_id=3e5721b263115b6c375cce4e144c33ed`);

        if(!result.ok) {
            throw new Error('Failed to get data.' + result.status);
        };

        return await result.json();
    };

    const Status = () => {
        return (
            <div className='server-status'>
                <ul className='server-status-list'>
                    {serverStatus.map((value: any, id: number) => (
                        <li key={id} className='server-status-list__item'>
                            <span className='server-status-list__title'>{value.server}</span>
                            <span className='server-status-list__subtitle'>{value.players_online}</span>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }

    return(
        <React.Fragment>
            {serverStatus ? <Status/> : <Skeleton count={5} width='100%'/>}
        </React.Fragment>
    );
};

export default ServerStatus;