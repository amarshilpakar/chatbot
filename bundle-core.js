const concat = require('concat');
(async function build() {
    const files = [
        './src/script.js'
    ]
    await concat(files, './lib/chatbot-core.js');
})()