const socket = io('http://localhost:8000');

const form = document.getElementById('send-container');
const messagrInput = document.getElementById('messageInp');
const messageContainer = document.querySelector(".container");

const name = prompt("Enter Your Name: ");
socket.emit('new-user-joined',name);

// const append = (message,position) =>{
//     const messageElement = document.createElement('div');
//     messageElement.innerText = message;
//     messageElement.classList.add('message');
//     messageElement.classList.add(position);
//     messageElement.append(messageElement);
// } 

// form.addEventListener('submit', (e)=>{
//     e.preventDefault();
//     const message = messagrInput.value;
//     append('You: ${message}', right);
//     socket.emit('send', message);
// })


// socket.on('user-joined' , name =>{
//     append(`${name} joined the Chat` , right);
// })

// socket.on('receive' , data =>{
//     append(`${data.name}: ${data.message}` , left);
// })


