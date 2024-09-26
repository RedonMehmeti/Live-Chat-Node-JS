const { Socket } = require("socket.io");

const sendButton = document.getElementById('sendButton');
const massageInput = document.getElementById('massageInput');
const massages = document.getElementById('massages');

sendButton.addEventListener('click', () => {
    const massage = massageInput.value;
    Socket.emit('chat massage', massage);
    massageInput.value = '';
});

Socket.on('Chat Massage' , (msg) => {
    const li = document.createElement('li');
    li.textContent = msg;
    massages.appendChild(li);
});