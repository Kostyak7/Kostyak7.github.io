function getHelloMessage() {
    return 'Привет! Я Бот и мое имя Валера! Как я могу вам помочь?';
}

function getByeMessage() {
    let v = Math.floor(Math.random() * 10) % 3;
                if (v == 0) {
                    return 'Бывай';    
                } else if (v == 1) {
                    return 'Прощай'; 
                } else if (v == 2) {
                    return 'До свидания'; 
                }            
            }

function getGameMessage() {
    return `Я пока не умею ничего`;
}


window.onload = function() {
    let sendButton = document.getElementById('send-button');
    sendButton.addEventListener('click', sendMessage);
    document.addEventListener('keydown',
    (event) => {
        if (event.code == 'Enter') {
          sendMessage();
        }
      });


    function prepareBotAnswer() {
        let botResponseDiv = document.createElement('div');
        botResponseDiv.classList.add('msgs');
        botResponseDiv.classList.add('bot-msg');
        return botResponseDiv
    }

    function sendMessage() {
        let messageInput = document.getElementById('message-input');
        let audioInput = document.getElementById('audio-input');

        let message = messageInput.value.trim();
        let audioFile = audioInput.files[0];

        if (message === '' && !audioFile) {
            return;
        }

        let chatMessages = document.getElementById('chat-messages');

        if (message !== '') {
            let messageDiv = document.createElement('div');
            messageDiv.classList.add('msgs');
            messageDiv.classList.add('user-msg');
            messageDiv.textContent = message;
            chatMessages.appendChild(messageDiv);
            messageInput.value = '';

            if (message.toLowerCase().includes('привет')) {
                let botResponseDiv = prepareBotAnswer()
                botResponseDiv.textContent = 'Привет! Я Бот и мое имя Валера! Как я могу вам помочь?';
                chatMessages.appendChild(botResponseDiv);
            }

            if (message.toLowerCase().includes('пока')) {
                let botResponseDiv = prepareBotAnswer()
                botResponseDiv.textContent = getByeMessage();            
                chatMessages.appendChild(botResponseDiv);
            }

            if (message.toLowerCase().includes('игра')) {
                let botResponseDiv = prepareBotAnswer()
                botResponseDiv.textContent =  getGameMessage();
                chatMessages.appendChild(botResponseDiv);
            }
        }

        if (audioFile) {
            let audioURL = URL.createObjectURL(audioFile);
            let audioDiv = document.createElement('div');
            let audioElement = document.createElement('audio');
            audioElement.controls = true;
            audioElement.src = audioURL;
            audioDiv.appendChild(audioElement);
            chatMessages.appendChild(audioDiv);
            audioInput.value = '';
        }

        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
};
