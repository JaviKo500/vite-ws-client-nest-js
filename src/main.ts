import './style.css'
import { connectToServer } from './socket-client.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Websocket - Client</h1>
    <span id="server-status" >Offline</span>
    <ul id="clients-ul"></ul>
    <form id="messages-form">
      <input type="text" placeholder="messages" id="messages-input" />
    </form>
  </div>
`

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
connectToServer();
