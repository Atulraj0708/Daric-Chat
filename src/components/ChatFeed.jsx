import React from 'react'
import SenderMessage from './SenderMessage';
import RecieverMessage from './RecieverMessage';
import MessageForm from './MessageForm';

const ChatFeed = (props) => {
    const {chats,activeChat,userName,messages}=props;
    const chat=chats && chats[activeChat];

    const renderReadReceipt=(message,senderMsg)=>{
     return chat.people.map((person,index)=>person.last_read===message.id &&(
        <div
        key={`read_${index}`}
        className='read-receipt'
        style={{
          float:senderMsg?'right':'left',
          backgroundImage:`url(${person?.person?.avatar})`
        }}
        />
      ))

    }

    const renderMessages=()=>{
      const keys=Object.keys(messages);

     return keys.map((key,index)=>{
      const message = messages[key];
      const lastmsgkey = index===0?null:keys[index-1];
      const senderMsg = userName===message.sender.username;

      return (
        <div key={`msg_${index}`} style={{width:'100%'}}>
          <div className='message-block'>
            {senderMsg?<SenderMessage message={message}/>:<RecieverMessage message={message} lastMessage={messages[lastmsgkey]}/>}
          </div>
          <div className='read-receipts' style={{marginRight:senderMsg?'18px':'0px',marginLeft:senderMsg?'0px':'68px'}}>
         {renderReadReceipt(message,senderMsg)}
          </div>
        </div>
      )
     })
    }
    if(!chat)
    return <div/>;
  return (
    <div className='chat-feed'>
      <div className='chat-title-container'>
        <div className='chat-title'>
          {chat?.title}
        </div>
        <div className='chat-subtitle'>
          {chat.people.map((person)=>`${person.person.username}`)}
        </div>
      </div>
      {renderMessages()}
      <div style={{height:'100px'}}/>
      <div className='message-form-container'>
        <MessageForm  {...props} chatId={activeChat}/>
      </div>
    </div>
  )
}

export default ChatFeed