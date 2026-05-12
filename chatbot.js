
const qaBank = [
    { keyword: "hello", answer: "Hello! Welcome to the Campus Guide. What do you need help with?" },
    { keyword: "clubs", answer: "We have tech, arts, and sports clubs! Check out the 'Club Overview' page." },
    { keyword: "schedule", answer: "The next big event is the HTML Coding Party on April 18th." },
    { keyword: "register", answer: "You can sign up for events or start your own club on the 'Sign Up' page." },
    { keyword: "tired", answer: "Same here. College is exhausting, but you're doing great!" }
];


const chatForm = document.getElementById('chat-form');
const userInput = document.getElementById('user-input');
const chatMessages = document.getElementById('chat-messages');


chatForm.addEventListener('submit', function(event) {
 
    event.preventDefault(); 
    
   
    const userText = userInput.value.toLowerCase();
    

    const userMsgElement = document.createElement('p');
    userMsgElement.classList.add('user-message');
    userMsgElement.innerHTML = `<strong>You:</strong> ${userInput.value}`;
    chatMessages.appendChild(userMsgElement);


    let botReply = "I'm not sure about that. Try asking about 'clubs' or 'schedule'.";


    for (let i = 0; i < qaBank.length; i++) {
        if (userText.includes(qaBank[i].keyword)) {
            botReply = qaBank[i].answer;
            break;
        }
    }


    const botMsgElement = document.createElement('p');
    botMsgElement.classList.add('bot-message');
    botMsgElement.innerHTML = `<strong>Bot:</strong> ${botReply}`;
    chatMessages.appendChild(botMsgElement);

  
    userInput.value = '';
    chatMessages.scrollTop = chatMessages.scrollHeight;
});
