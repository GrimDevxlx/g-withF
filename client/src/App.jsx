import React from 'react'
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';
import { ChannelListContainer, ChannelContainer, Auth } from './components';
import './App.css';

const apiKey = 'ucffy8yaqj2w'; //API KEY STREAM.IO 
const client = StreamChat.getInstance(apiKey);

const authToken = false;

const App = () => {

    if(!authToken) return <Auth />

    
  return (
    <div className="app_wrapper">
      <Chat client = {client} theme="team light">
        <ChannelListContainer 
        
        />
        <ChannelContainer
        
        />
      </Chat>
    </div>
  );
}

export default App
