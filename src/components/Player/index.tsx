import React, { useEffect, useState } from 'react';
import AccountServices from 'services/accountService';
import Skeleton from 'react-loading-skeleton';

const Player: React.FC<{id: number}> = (props) => {

    const [ info, setInfo ] = useState();
    const [ selectValue, setSelectValue ] = useState('all');

    const wg = new AccountServices();

    useEffect(() => {
        wg.getAccountData(props.id)
            .then((body) => {
                setInfo(body.data)
            });
    }, []);

    const handleChange = (event: any) => {
        setSelectValue(event.target.value)
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();
    }

    const PlayerData = () => {
        const stats = info[props.id];
        return (
            <React.Fragment>
                <form onSubmit={handleSubmit}>
                    <label>
                        Режим:
                        <select value={selectValue} onChange={handleChange}>
                            <option value="clan">clan</option>
                            <option defaultValue="all">all</option>
                            <option value="regular_team">regular_team</option>
                            <option value="company">company</option>
                            <option value="stronghold_skirmish">stronghold_skirmish</option>
                            <option value="stronghold_defense">stronghold_defense</option>
                            <option value="historical">historical</option>
                            <option value="team">team</option>
                        </select>
                    </label>
                </form>
                <div>last_battle_time: {stats.last_battle_time}</div>
                <div>created_at: {stats.created_at}</div>
                <div>updated_at: {stats.updated_at}</div>
                <div>global_rating: {stats.global_rating}</div>
                <div>nickname: {stats.nickname}</div>
                <div>logout_at: {stats.logout_at}</div>
                <div>spotted: {stats.statistics[selectValue].spotted}</div>
                <div>battles_on_stunning_vehicles: {stats.statistics[selectValue].battles_on_stunning_vehicles}</div>
                <div>max_xp: {stats.statistics[selectValue].max_xp}</div>
                <div>avg_damage_blocked: {stats.statistics[selectValue].avg_damage_blocked}</div>
                <div>direct_hits_received: {stats.statistics[selectValue].direct_hits_received}</div>
                <div>explosion_hits: {stats.statistics[selectValue].explosion_hits}</div>
                <div>piercings_received: {stats.statistics[selectValue].piercings_received}</div>
                <div>piercings: {stats.statistics[selectValue].piercings}</div>
                <div>max_damage_tank_id: {stats.statistics[selectValue].max_damage_tank_id}</div>
                <div>xp: {stats.statistics[selectValue].xp}</div>
                <div>survived_battles: {stats.statistics[selectValue].survived_battles}</div>
                <div>dropped_capture_points: {stats.statistics[selectValue].dropped_capture_points}</div>
                <div>hits_percents: {stats.statistics[selectValue].hits_percents}</div>
                <div>draws: {stats.statistics[selectValue].draws}</div>
                <div>max_xp_tank_id: {stats.statistics[selectValue].max_xp_tank_id}</div>
                <div>battles: {stats.statistics[selectValue].battles}</div>
                <div>damage_received: {stats.statistics[selectValue].damage_received}</div>
                <div>avg_damage_assisted: {stats.statistics[selectValue].avg_damage_assisted}</div>
                <div>max_frags_tank_id: {stats.statistics[selectValue].max_frags_tank_id}</div>
                <div>avg_damage_assisted_track: {stats.statistics[selectValue].avg_damage_assisted_track}</div>
                <div>frags: {stats.statistics[selectValue].frags}</div>
                <div>stun_number: {stats.statistics[selectValue].stun_number}</div>
                <div>avg_damage_assisted_radio: {stats.statistics[selectValue].avg_damage_assisted_radio}</div>
                <div>capture_points: {stats.statistics[selectValue].capture_points}</div>
                <div>stun_assisted_damage: {stats.statistics[selectValue].stun_assisted_damage}</div>
                <div>hits: {stats.statistics[selectValue].hits}</div>
                <div>battle_avg_xp: {stats.statistics[selectValue].battle_avg_xp}</div>
                <div>wins: {stats.statistics[selectValue].wins}</div>
                <div>losses: {stats.statistics[selectValue].losses}</div>
                <div>damage_dealt: {stats.statistics[selectValue].damage_dealt}</div>
                <div>no_damage_direct_hits_received: {stats.statistics[selectValue].no_damage_direct_hits_received}</div>
                <div>max_frags: {stats.statistics[selectValue].max_frags}</div>
                <div>shots: {stats.statistics[selectValue].shots}</div>
                <div>explosion_hits_received: {stats.statistics[selectValue].explosion_hits_received}</div>
                <div>tanking_factor: {stats.statistics[selectValue].tanking_factor}</div>
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