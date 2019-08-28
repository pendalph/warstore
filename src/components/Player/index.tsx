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
        const stats = info[`${props.id}`];
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
                <div>spotted: {stats.statistics.all.spotted}</div>
                <div>battles_on_stunning_vehicles: {stats.statistics.all.battles_on_stunning_vehicles}</div>
                <div>max_xp: {stats.statistics.all.max_xp}</div>
                <div>avg_damage_blocked: {stats.statistics.all.avg_damage_blocked}</div>
                <div>direct_hits_received: {stats.statistics.all.direct_hits_received}</div>
                <div>explosion_hits: {stats.statistics.all.explosion_hits}</div>
                <div>piercings_received: {stats.statistics.all.piercings_received}</div>
                <div>piercings: {stats.statistics.all.piercings}</div>
                <div>max_damage_tank_id: {stats.statistics.all.max_damage_tank_id}</div>
                <div>xp: {stats.statistics.all.xp}</div>
                <div>survived_battles: {stats.statistics.all.survived_battles}</div>
                <div>dropped_capture_points: {stats.statistics.all.dropped_capture_points}</div>
                <div>hits_percents: {stats.statistics.all.hits_percents}</div>
                <div>draws: {stats.statistics.all.draws}</div>
                <div>max_xp_tank_id: {stats.statistics.all.max_xp_tank_id}</div>
                <div>battles: {stats.statistics.all.battles}</div>
                <div>damage_received: {stats.statistics.all.damage_received}</div>
                <div>avg_damage_assisted: {stats.statistics.all.avg_damage_assisted}</div>
                <div>max_frags_tank_id: {stats.statistics.all.max_frags_tank_id}</div>
                <div>avg_damage_assisted_track: {stats.statistics.all.avg_damage_assisted_track}</div>
                <div>frags: {stats.statistics.all.frags}</div>
                <div>stun_number: {stats.statistics.all.stun_number}</div>
                <div>avg_damage_assisted_radio: {stats.statistics.all.avg_damage_assisted_radio}</div>
                <div>capture_points: {stats.statistics.all.capture_points}</div>
                <div>stun_assisted_damage: {stats.statistics.all.stun_assisted_damage}</div>
                <div>hits: {stats.statistics.all.hits}</div>
                <div>battle_avg_xp: {stats.statistics.all.battle_avg_xp}</div>
                <div>wins: {stats.statistics.all.wins}</div>
                <div>losses: {stats.statistics.all.losses}</div>
                <div>damage_dealt: {stats.statistics.all.damage_dealt}</div>
                <div>no_damage_direct_hits_received: {stats.statistics.all.no_damage_direct_hits_received}</div>
                <div>max_frags: {stats.statistics.all.max_frags}</div>
                <div>shots: {stats.statistics.all.shots}</div>
                <div>explosion_hits_received: {stats.statistics.all.explosion_hits_received}</div>
                <div>tanking_factor: {stats.statistics.all.tanking_factor}</div>
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