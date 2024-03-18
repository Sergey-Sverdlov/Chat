import React from 'react';
import {ChannelList, useChatContext} from "stream-chat-react";
// import {ChannelSearch, TeamChannelList, TeamChannelPreview } from "./";
import Cookies from "universal-cookie";
import HospitalIcon from '../assets/hospital.png'
import Logout from '../assets/logout.png'
import {ChannelSearch} from "./index";
const SideBar = () => (
    <div className="channel-list__sidebar">
        <div className="channel-list__sidebar__icon1">
            <div className="icon1__inner">
                <img src={HospitalIcon} alt="Hospital" width="30"/>
            </div>
        </div>
        <div className="channel-list__sidebar__icon2">
            <div className="icon2__inner">
                <img src={Logout} alt="Выход из системы" width="30"/>
            </div>
        </div>
    </div>
)
const CompanyHeader = () => (
    <div className="channel-list__header">
        <p className="channel-list__header__text">
            ПишемВсем
        </p>
    </div>
)
const ChannelListContainer = () => {
    return (
        <>
            <SideBar />
            <div className="channel-list__list__wrapper">
                <CompanyHeader />
                <ChannelSearch />
            </div>
        </>
    );
};

export default ChannelListContainer;
