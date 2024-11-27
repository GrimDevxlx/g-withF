import React from 'react'
import { ChannelList, useChatContext } from 'stream-chat-react';
import Cookies from 'universal-cookie';
import { ChannelSearch, TeamChannelList, TeamChannelPreview } from './';
import GamingWFIcon from '../assets/GamingWF.png'
import LogoutIcon from '../assets/logout.png'

const SideBar = () => (
  <div className="channel-list__sidebar">
      <div className="channel-list__sidebar__icon1">
        <div className="icon1__inner">
          <img src= {GamingWFIcon} alt="GamingWF" width="30" />
        </div>
      </div>
      <div className="channel-list__sidebar__icon2">
        <div className="icon1__inner">
          <img src= {LogoutIcon} alt="Logout" width="30" />
        </div>
      </div>
  </div>
);

const SquadHeader = () => (
  <div className="channel-list__header">
    <p className="channel-list__header__text">GWF Home</p>
  </div>
)

const ChannelListContainer = () => {
  return (
    <>
      <SideBar />
      <div className="channel-list__list__wrapper">
        <SquadHeader />
        <ChannelSearch />
        <ChannelList
          filters={{}}
          channelRenderFilterFn={() => {}}
          List={(listProps) =>(
              <TeamChannelList 
                {... listProps}
              />
          )}
        />
      </div>
    </>
  );
}

export default ChannelListContainer;
