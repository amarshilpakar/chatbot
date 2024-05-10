const chatBotPrototype = {
    init (){
        this.chatbotToggler = document.querySelector(".chat-bot-activate");
        this.closeBtn = document.querySelector(".close-btn");
        this.chatBox = document.querySelector(".chat-box");
        this.chatInput = document.querySelector(".chat-box-input textarea");
        this.sendChatBtn = document.getElementById('send-btn');;
        this.inputInitHeight = this.chatInput.scrollHeight;
        this.attachBtn = document.getElementById('attach_file');
        this.fileInput = document.getElementById("file-upload");
        this.imageExtension = [ '.jpg', '.jpeg', '.png' ];
    
        this.chatInput.addEventListener("input", () => {
            this.chatInput.style.height = `${this.inputInitHeight}px`;
            this.chatInput.style.height = `${this.chatInput.scrollHeight}px`;
        });

        this.attachBtn.addEventListener("click", (e) =>{
            this.fileInput.click();
        });

        this.fileInput.addEventListener("change", (e) =>{
            this.handleFileUpload(e);
        });
    
        this.chatInput.addEventListener("keydown", (e) => {
            if(e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
                e.preventDefault();
                this.onChatInput();
            }
        });

        const handleEmoji = (emoji)=>{
            this.chatInput.value += emoji;
        }

        EmojiButton(document.querySelector('#emoji-button'), handleEmoji.bind(this));
    
        this.sendChatBtn.addEventListener("click", this.onChatInput.bind(this));
        this.closeBtn.addEventListener("click", () => document.body.classList.remove("display-chat"));
        this.chatbotToggler.addEventListener("click", () => document.body.classList.toggle("display-chat"));
    },
    generateImagesDiv(images){
        if(images.length > 0){
            const imageDiv = document.createElement("div");
            imageDiv.className = 'image-container outgoing';
            if(images.length > 3){
                imageDiv.className += ' flex-box';
            }
            currentIndex = 0;
            for(const image of images){
                if(currentIndex >2){
                    break;
                }
                const img = document.createElement("img");
                img.src = image.blobUrl;
                img.alt = image.fileName;
                imageDiv.appendChild(img);
                currentIndex++
            }
            if(images.length > 3){
                const spanDiv = document.createElement('div');
                const spanLen = document.createElement('span');
                spanDiv.innerText = images.length -3;
                const spanLen2 = document.createElement('span');
                spanLen2.innerText = 'Show More...';
                spanDiv.appendChild(spanLen);
                spanDiv.appendChild(spanLen2);
                imageDiv.appendChild(spanDiv);
            }
            this.chatBox.appendChild(imageDiv);
        }
    },
    generateDocumentDiv(documents){
        if(documents.length === 0){
            return;
        }
        const docDiv = document.createElement("div");
        docDiv.className = 'file-attachment outgoing';
        for(const doc of documents){
            const div = document.createElement("div");
            const divWrap = document.createElement("div");
            divWrap.className = 'icon-file';
            const span = document.createElement("span");
            span.className="material-symbols-outlined";
            span.innerText='attachment';
            const span1 = document.createElement("span");
            span1.innerText= doc.name;
            span1.className = 'file-name';
            const span2 = document.createElement("span");
            span2.className = 'action';
            span2.innerText= 'click here to see details';
            span2.onclick = this.displayFile.bind(this, doc);
            divWrap.appendChild(span);
            divWrap.appendChild(span1);
            div.appendChild(divWrap);
            div.appendChild(span2);
            docDiv.appendChild(div);
        }
        this.chatBox.appendChild(docDiv);
    },
    fileReaderObservable(file) {
        const promise = new Promise((resolve, ) => {
            const url = URL.createObjectURL(file);
            resolve({ image: url, fileName: file.name, file: file });

        });
        return promise;
    },
    handleFileUpload(event){
        const currentFile = event.target.files || event.srcElement.files || event.dataTransfer.files;
        const promiseList = [];
        for (let i = 0; i < currentFile.length; i++) {
            promiseList.push(this.fileReaderObservable(currentFile[i]));
        }
        if (promiseList.length === 0) {
            this.fileInput.value = null;
            return;
            }
        Promise.all(promiseList).then((values) => {
            if(values && values.length > 0){
                const attachments = [];
                for(const file of values){
                    const chatAttachment = {
                        'name': file.fileName,
                        'blobUrl': file.image,
                        'type': file.fileName.substring(file.fileName.lastIndexOf('.'), file.fileName.length).toLowerCase()
                    }
                    attachments.push(chatAttachment);
                }
                this.generateAttachmentContent(attachments);
            }
        });
    },
    generateAttachmentContent(files){
        const attachment = document.createElement('div');
        attachment.className = 'attachment-container';
        const images = files.filter((f)=>{return this.imageExtension.includes(f.type)});
        const documents = files.filter((f)=>{return !this.imageExtension.includes(f.type)});
        this.generateImagesDiv(images);
        this.generateDocumentDiv(documents);
       
    },
    displayFile(chatAttachment) {
        const { blobUrl } = chatAttachment;
        window.open(blobUrl, '_blank');
    },
    generateChatContent(message, className){
        const element = document.createElement("li");
        element.classList.add("chat", `${className}`);
        let iconContent = className === "outgoing" ? `<p>${message}</p>` : `<span class="material-symbols-outlined">smart_toy</span><p>${message}</p>`;
        element.innerHTML = iconContent;
        return element; 
    },
    callChatAPI(chatElement){
        const API_URL = "https://api.openai.com/v1/chat/completions";
        const messageElement = chatElement.querySelector("p");
    
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer sk-proj-4j9rLJrOCjxu9vNCeGrIT3BlbkFJvUK342C5gpB95uqmlEIs`
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [{role: "user", content: userMessage}],
            })
        }
    
        fetch(API_URL, requestOptions).then(res => res.json()).then(data => {
            messageElement.textContent = data.choices[0].message.content.trim();
        }).catch(() => {
            messageElement.textContent = "This is automated reply message.";
        }).finally(() => this.chatBox.scrollTo(0, this.chatBox.scrollHeight));
    },
    onChatInput(){
        this.userMessage = this.chatInput.value.trim();
        if(!this.userMessage) return;
    
        this.chatInput.value = "";
        this.chatInput.style.height = `${this.inputInitHeight}px`;
    
        this.chatBox.appendChild(this.generateChatContent(this.userMessage, "outgoing"));
        this.chatBox.scrollTo(0, this.chatBox.scrollHeight);
        
        setTimeout(() => {
            const chatElement = this.generateChatContent("Incoming...", "incoming");
            this.chatBox.appendChild(chatElement);
            this.chatBox.scrollTo(0, this.chatBox.scrollHeight);
            this.callChatAPI(chatElement);
        }, 600);
    }
}

function ChatBot(API_KEY, API_URL) {
    chatbotToggler = undefined;
    closeBtn = undefined;
    chatBox =  undefined;
    chatInput = undefined;
    sendChatBtn = undefined;
    userMessage = null;
    API_KEY = 'sk-proj-4j9rLJrOCjxu9vNCeGrIT3BlbkFJvUK342C5gpB95uqmlEIs';
    API_URL = API_URL;
    inputInitHeight = undefined;
} 

Object.assign(ChatBot.prototype, chatBotPrototype);

const chatBot = new ChatBot('','');
window.addEventListener('DOMContentLoaded', () => {
    chatBot.init();
});
