import { Manager, Socket } from 'socket.io-client';
export const connectToServer = () => {

    // http://localhost:3000/socket.io/socket.io.js
    const manager = new Manager('http://localhost:3000/socket.io/socket.io.js');

    const socket = manager.socket('/');

    addListeners(socket);

}

const addListeners = ( socket: Socket ) => {
    const serverStatusLabel = document.querySelector('#server-status')!;
    const clientUl = document.querySelector('#clients-ul')!;

    socket.on('connect', () => {
        serverStatusLabel.innerHTML = 'Connection established';

    });

    socket.on('disconnect', () => {
        serverStatusLabel.innerHTML = 'Disconnection established';
    });

    socket.on('clients-updated', ( clients: string[] ) => {
        let clientsHtml = '';
        clients.forEach((client) => {
            clientsHtml += `<li> ${ client } </li>`;
        });
        clientUl.innerHTML = clientsHtml;
    });
}