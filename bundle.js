const concat = require('concat');
(async function build() {
    const files = [
        './src/clone.js',
        './src/init.js'
    ]
    await concat(files, './lib/chatbot.js');
})()