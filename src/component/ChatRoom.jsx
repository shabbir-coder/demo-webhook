import React, { useState } from 'react'
import * as service from '../httpService' 

function ChatRoom({number}) {

  const [message, setmessage] = useState('')
  const [type, setType] = useState('text')
  
  const sendMessage = () => {
    const params = {
      number,
      type,
      message
    };
  
    service.postMessage(params)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className='bg-dark chat-room custom-border'>
      <div className="chat-header">
        {number && <h5 className='clearfix'>+{number}</h5>}
        {!number && <h5 className='clearfix'>Enter Number to send message</h5>}
      </div>
      <div className='chat-container noscroll'>
        <div className='message sent'>Your sent message will look like this</div>
       
        <div className='message received'>Your received message will look like this</div>
      </div>
      <div className="chat-input">
        <div className="button-wrap">
          <label className="button" htmlFor="upload">Upload File</label>
          <input id="upload" type="file"/>
        </div>
          <input type="text" placeholder='message' onChange={(e)=>setmessage(e.target.value)}/>
          <button onClick={()=>sendMessage()}>Send</button>
      </div>
    </div>
  )
}

export default ChatRoom