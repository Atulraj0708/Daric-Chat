import React from 'react'
import './App.css'
import {ChatEngine} from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import Login from './components/Login';

const App = () => {

    if(!localStorage.getItem('username'))
    return <Login/>

  return (
    <ChatEngine 
    height='100vh'
    projectID='e8930564-fd7e-4c21-aa1d-00ba8ec7474d'
    userName={localStorage.getItem('username')}
    userSecret={localStorage.getItem('password')}
    renderChatFeed={(chatAppProps)=><ChatFeed  {...chatAppProps}/>}
    />
  )
}

export default App