const socket = io('http://localhost:8000');

const form = document.getElementById('send-container');
const messagrInput = document.getElementById('messageInp');
const messageContainer = document.querySelector(".container");

const right = 'right';
const left = 'left';
var audio = new Audio(`noti.mp3`);

const name = prompt("Enter Your Name: ");
socket.emit('new-user-joined',name);

const append = (message,position) =>{
    const messageElement = document.createElement('div');
    messageElement.innerText = message;
    messageElement.classList.add('message');
    messageElement.classList.add(position);
    messageContainer.append(messageElement);
    if(position==left){
        audio.play();
    }
} 

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const message = messagrInput.value;
    append(`You: ${message}`, right);
    socket.emit('send', message);
    messagrInput.value = "";
})


socket.on('user-joined' , name =>{
    append(`${name} joined the Chat` ,right);
})

socket.on('receive' , data =>{
    append(`${data.name}: ${data.message}` , left);
});

socket.on('left' , data =>{
    append(`${data.name} left the chat` , left);
});


