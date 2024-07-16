import {useState} from 'react';
import axios from 'axios';

import React from 'react'

const Login = () => {
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const [error,setError]=useState('');

    const handleSubmit=async(e)=>{
        e.preventDefault();
        const authObj={
            'Project-ID':'e22da931-90fa-4aed-bb26-4d811f1d1bc0',
            'User-Name':username,
            'User-Secret':password
                      }
                      try {
                      await axios.get('https://api.chatengine.io/chats',{headers:authObj});
                      localStorage.setItem('username',username)
                      localStorage.setItem('password',password)
                        
                      window.location.reload();
                      } catch (error) {
                        setError('Wrong username or password!!')
                      }
    }
  return (
    <div className='wrapper'>
        <div className='form'>
            <h1 className='title'>Daric Chat</h1>
            <form onSubmit={handleSubmit}>
                <input type='text' value={username} onChange={(e)=>setUsername(e.target.value)} className='input' placeholder='Enter the Username' required/>
                <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} className='input' placeholder='Enter the Password' required/>
                <div align='center'>
                    <button type='submit' className='button'>
                        <span>Lets start Chatting</span>
                    </button>
                </div>
                <h2 className='error'>{error}</h2>
            </form>
        </div>    
    </div>
  )
}

export default Login