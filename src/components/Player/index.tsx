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
        const lastBattleTime = new Date(stats.last_battle_time * 1000).toString();
        const createdAt = new Date(stats.created_at * 1000).toString();

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
                <div>Время последнего боя: {lastBattleTime}</div>
                <div>Аккаунт создан: {createdAt}</div>
                <div>Личный рейтинг: {stats.global_rating}</div>
                <div>Имя пользователя: {stats.nickname}</div>
                <div>Время окончания последней игровой сессии: {stats.logout_at}</div>
                <div>Обнаружено противников: {stats.statistics[selectValue].spotted}</div>
                <div>Количество боёв на технике, причиняющей оглушение: {stats.statistics[selectValue].battles_on_stunning_vehicles}</div>
                <div>Максимальный опыт за бой: {stats.statistics[selectValue].max_xp}</div>
                <div>Средний заблокированный бронёй урон за бой: {stats.statistics[selectValue].avg_damage_blocked}</div>
                <div>Количество полученных прямых попаданий: {stats.statistics[selectValue].direct_hits_received}</div>
                <div>Количество нанесённых осколочно-фугасных попаданий: {stats.statistics[selectValue].explosion_hits}</div>
                <div>Количество полученных пробитий: {stats.statistics[selectValue].piercings_received}</div>
                <div>Количество пробитий: {stats.statistics[selectValue].piercings}</div>
                <div>Техника, на которой был нанесён максимальный урон за бой: {stats.statistics[selectValue].max_damage_tank_id}</div>
                <div>Максимальный опыт за бой: {stats.statistics[selectValue].xp}</div>
                <div>Выжил в боях: {stats.statistics[selectValue].survived_battles}</div>
                <div>Очки защиты базы: {stats.statistics[selectValue].dropped_capture_points}</div>
                <div>Процент попаданий: {stats.statistics[selectValue].hits_percents}</div>
                <div>Ничьи: {stats.statistics[selectValue].draws}</div>
                <div>Техника, на которой получен максимальный опыт за бой: {stats.statistics[selectValue].max_xp_tank_id}</div>
                <div>Выжил в боях: {stats.statistics[selectValue].battles}</div>
                <div>Получено урона: {stats.statistics[selectValue].damage_received}</div>
                <div>Средний урон, нанесённый с вашей помощью: {stats.statistics[selectValue].avg_damage_assisted}</div>
                <div>Техника, на которой уничтожено максимальное количество противников за бой: {stats.statistics[selectValue].max_frags_tank_id}</div>
                <div>Средний урон после вашего попадания, сбившего гусеницу: {stats.statistics[selectValue].avg_damage_assisted_track}</div>
                <div>Уничтожено техники: {stats.statistics[selectValue].frags}</div>
                <div>Количество оглушений, причинённых экипажу противника: {stats.statistics[selectValue].stun_number}</div>
                <div>Средний урон по вашим разведданным: {stats.statistics[selectValue].avg_damage_assisted_radio}</div>
                <div>Очки захвата базы: {stats.statistics[selectValue].capture_points}</div>
                <div>Урон по оглушённым вами целям: {stats.statistics[selectValue].stun_assisted_damage}</div>
                <div>Попадания: {stats.statistics[selectValue].hits}</div>
                <div>Средний опыт за бой: {stats.statistics[selectValue].battle_avg_xp}</div>
                <div>Победы: {stats.statistics[selectValue].wins}</div>
                <div>Поражения: {stats.statistics[selectValue].losses}</div>
                <div>Нанесено повреждений: {stats.statistics[selectValue].damage_dealt}</div>
                <div>Количество полученных прямых попаданий, не нанёсших урон: {stats.statistics[selectValue].no_damage_direct_hits_received}</div>
                <div>Максимум уничтожено за бой: {stats.statistics[selectValue].max_frags}</div>
                <div>Произведено выстрелов: {stats.statistics[selectValue].shots}</div>
                <div>Количество полученных осколочно-фугасных попаданий: {stats.statistics[selectValue].explosion_hits_received}</div>
                <div>Отношение заблокированного бронёй урона к полученному игроком урону от бронебойных, кумулятивных, подкалиберных снарядов: {stats.statistics[selectValue].tanking_factor}</div>
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