import React, {useEffect, useState} from 'react';
import {createConnection} from './chat.js';
/**Intro
 * useEffect is a React Hook that lets you synchronize a component with an external system.
 * useEffect(setup, dependencies?)
 */

/**Some components need to stay connected to the network,
 * some browser API, or a third-party library, while they are displayed on the page.
 * These systems aren’t controlled by React, so they are called external.
 * To connect your component to some external system, call useEffect at the top level of your component
*/

/**You need to pass two arguments to useEffect:
 * A setup function with setup code that connects to that system.
 *  It should return a cleanup function with cleanup code that disconnects from that system.
 * A list of dependencies including every value from your component used inside of those functions.
 */

const ChatRoom = ({roomId}) => {
  const [serverUrl, setServerUrl]= useState('https://localhost:1234');
    useEffect(()=>{
      //setupcode
      const connection = createConnection(serverUrl, roomId);
      connection.connect();
      return ()=>{
        connection.disconnect(); //cleanup code
      }
    },[serverUrl, roomId])
  return (
    <>
      <label>
        Server URL: {' '}
        <input type="text" value={serverUrl} onChange={e=>setServerUrl(e.target.value)} />
      </label>
      <h1>Welcome to Travel Room</h1>
    </>
  )
}


export default function ExternalSystem(){
  const [roomId, setRoomId] = useState('general');
  const [show, setShow] = useState(false);
  return(
    <>
      <label>
        Choose the chat room : {' '}
        <select value={roomId} onChange={e=>setRoomId(e.target.value)}>
          <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="music">music</option>
        </select>
      </label>
      <button onClick={()=>setShow(!show)}>
      {show ? 'Close Chat': 'Open Chat'}
      </button>
      {show && <hr/>}
      {show && <ChatRoom roomId={roomId}/>}
    </>
  )
}
/**
 *In this eg, the ChatRoom component uses an Effect to stay connected to an external system defined in chat.js.
* Press “Open chat” to make the ChatRoom component appear.
* Try changing the roomId and serverUrl using the dropdown and the input,
* and see how the Effect re-connects to the chat. 
* Press “Close chat” to see the Effect disconnect one last time.
 */