import React from 'react';
import {AddChannel} from "../assets/addChannel";

const TeamChannelList = ({children, error = false, loading, type}) => {
    if (error) {
        return type === 'team' ? (
            <div className="team-channel-list">
                <p className="team-channel-list__message">
                    Ошибка соединения, подождите минуту
                </p>
            </div>
        ) : null
    }
    if (loading) {
        return (
            <div className="team-channel-list">
                <p className="team-channel-list__message loading">
                    {type === 'team' ? 'Каналы' : 'Сообщения'} Загрузка...
                </p>
            </div>
        )
    }
    return (
        <div className="team-channel-list">
            <div className="team-channel-list__header">
                <p className="team-channel-list__header__title">
                    {type === 'team' ? 'Каналы' : 'Прямые Сообщения'}
                </p>
            </div>
            {children}
        </div>
    );
};

export default TeamChannelList;
