const concat = require('concat');
(async function build() {
    const files = [
        './src/chat-init.js'
    ]
    await concat(files, './lib/chatbot.js');
})()