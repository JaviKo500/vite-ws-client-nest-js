import './style.css'
import { connectToServer } from './socket-client.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h2>Websocket - Client</h2>
    <input type="text" id="jwt-token" placeholder="Json Web Token"/>
    <button id="btn-connect">Connect</button>
    <br/>
    <span id="server-status" >Offline</span>
    <ul id="clients-ul"></ul>
    <form id="messages-form">
      <input type="text" placeholder="messages" id="messages-input" />
    </form>

    <h3>Messages</h3>
    <ul id="messages-ul"></ul>
  </div>
`

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)

const inputJWT = document.querySelector<HTMLInputElement>('#jwt-token')!;
const btnConnect = document.querySelector<HTMLButtonElement>('#btn-connect')!;

btnConnect.addEventListener('click', () => {
  if( inputJWT.value.trim().length <= 0 ) return alert('Please enter jwt token');
  connectToServer(inputJWT.value.trim());
});

// connectToServer();
