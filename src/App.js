import './App.css';
import ContactBar from './component/ContactBar';
import ChatRoom from './component/ChatRoom';
import { useEffect, useState } from 'react';
import axios from 'axios';


function App() {
  const [number, setnumber] = useState()

  const setWebhook = async () => {
    const apiUrl = 'https://come-back.co/api/set_webhook';
    const webhookUrl = 'https%3A%2F%2Fwebhook.site%2F1b25464d6833784f96eef4xxxxxxxxxx';
    const enable = true;
    const instanceId = '6576D67C9A021';
    const accessToken = '651f982e7e92c';
    try {
      const response = await axios.post(apiUrl, {
        webhook_url: webhookUrl,
        enable: enable,
        instance_id: instanceId,
        access_token: accessToken,
      });

      console.log(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    // Call the function to set up the webhook when the component mounts
    setWebhook();
  }, []); // Empty dependency array ensures the effect runs once after the initial render


  return (
    <div className="App bg-primary">
      <ContactBar setnumber={setnumber}/>
      <ChatRoom  number={number}/>
    </div>
  );
}

export default App;
