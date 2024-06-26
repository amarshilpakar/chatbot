
    const style = `<style>
    /* Import Google font - Poppins */
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');

        :root {
          --xa-blue: #3B82F6;
          --xa-light-blue: #72BFF9;
          --xa-green: #9CE931;
          --xa-red: #FC0000;
          --xa-white: #FFFFFF;
          --xa-black: rgb(26, 34, 51);
          --xa-yellow: #EAB308;
          --xa-purple: #B34CB5;
          --xa-orange: #E3843F;
          --xa-meadow: #23C19B;
          --xa-black-dark: #000000;
          --xa-citron: #99A32B;
          --xa-black-medium: #0B0E15;
          --xa-black-light: #102013;
          --xa-neutral-black: #181B1F;

          --xa-separator: #D2D2D2;
          --xa-draft: #C1C3C7;
          --xa-noshow: #FC0000;
          --xa-approve: #B3E573;
          --xa-pending-approval: #F88318;
          --xa-vehicle-detail: #93BCE1;
          --xa-upload-document: #3DB8B0;
          --xa-upload-photo: #C09B80;
          --xa-repair-estimate: #D3CD28;
          --xa-invoice-ready: #B463EE;
          --xa-ready-to-invoice: #93BCE1;
          --xa-bluesh-grey: #201177;
          --xa-ai-analysis: #B463EE;
          --xa-in-progress: #4301FE;
          --xa-dark-gray: rgba(26, 34, 51, 0.7);
          --xa-gray: rgba(26, 34, 51, 0.4);
          --xa-bold-gray: rgba(26, 34, 51, 0.05);
          --xa-mild-bold-gray: rgba(26, 34, 51, 0.03);
          --xa-light-gray: rgba(26, 34, 51, 0.2);
          --xa-light-capsule-white: rgba(255, 255, 255, 0.30);
          --xa-light-radio-gray: rgba(26, 34, 51, 0.02);
          --xa-box-shadow: rgba(96, 108, 128, 0.05);
          --xa-lighter-gray: rgba(26, 34, 51, 0.1);
          --xa-lighter-gray-darker: rgba(26, 34, 51, 0.16);
          --xa-search-border: #D9D9D9;
          --xa-form-border: #D7D7D7;
          --xa-tab-background: #DBDDE2;
          --xa-card-dark: rgba(255, 255, 255, 0.7);
          --xa-tab-default-content: rgba(255, 255, 255, 0.83);
          --xa-action-border: #CDD1D6;

          --xa-primary: #1B03A3;
          --xa-secondary: #4C6BD2;
          --xa-tertiary: #C6CAE7;
          --xa-white-light: rgba(255, 255, 255, 0.47);
          --xa-empty-card: rgba(239, 239, 239, 0.32);
          --xa-border-gray: #C1C1C1;
          --xa-text-ligher-gray: #979AA0;
          --xa-legend-highlight: rgba(76, 107, 210, 0.23);

          --xa-icon-shadow-color: #0D10170F;
          --xa-input-icon: #8E8E93;
          --xa-chat-blue: #007AFF;
          --xa-light-background: rgba(227, 229, 244, 1);
          --xa-avatar-border: rgba(30, 30, 30, 0.1);

          --xa-golden-tainoi: #FFCD4B;
          --xa-sunset-orange: #F73D3D;
          --xa-secondary-light: #BDCCFE;
          --xa-tertiary-light: #C6CFED;
          --xa-repair-header: #03A31B;
          --xa-light-blue: #AAC7FA;
          --xa-light-blue1: #69A5C9;
          --xa-light-green: #91C009;
          --xa-light-green1: #7EB699;
          --xa-light-pink: #CE6DD0;
          --xa-dark-red: #B53E3E;
          --xa-dark-red2: #FC0000;
          --xa-green-medium: #83AF4A;
          --xa-orange2: #D2A120;
          --xa-light-gray-disabled: #F4F4F5;
          --xa-dark-gray-disabled: #C8CACE;
          --xa-dp-light-green: #7CD18F;
          --xa-dp-dark-green: #1B9235;
          --xa-dp-medium-green: #09C269;
          --xa-dp-light-orange: #FFDB59;
          --xa-dp-dark-orange: #D4A600;
          --xa-dp-light-gray: #C9C9C9;
          --xa-dp-dark-gray: #78777D;
          --xa-popup-light-gray: #F1F2F6;
          --xa-white-light: rgba(255, 255, 255, 0.15);
          --xa-table-light: #F9F9F9;
          --xa-table-header-light: rgba(198, 202, 231, 0.3);
          --xa-table-header: rgba(236, 236, 236, 1);
          --xa-card-gray: #F8F8F8;
          --xa-booking-out: #DCD6B8;
          --xa-garage-requested: #D4CFFC;
          --xa-lighter-yellow: #ECDBB7;
          --xa-lighter-green: #D2F0AB;
          --xa-booking-out: #B18C6A;
          --xa-assigned-back-review: #1742CE;
          --xa-request-estimate: #FFE2AB;
          --xa-request-invoice: #96AEFF;
          --xa-assigned-back-approval: #88CD30;
          --xa-checked-border: rgba(0, 0, 0, 0.33);
          --xa-checked-background: rgba(157, 157, 157, 0.55);
          --xa-hover-border: rgba(69, 69, 69, 0.55);
          --xa-color-picker-default: #33AECA;

          --xa-input-shadow: #E5E7EB;
          --xa-repair-type-body: #00B5AA;
          --xa-repair-type-body-light: #F0FDF4;

          --xa-repair-type-mechanical: #CE6DD0;
          --xa-repair-type-mechanical-light: #FEF2F2;

          --xa-repair-type-paint: #2B88DE;
          --xa-repair-type-paint-light: #EFF3FF;

          --xa-repair-type-electrical: #8F2BDE;
          --xa-repair-type-electrical-light: #E3BBEB;

          --xa-repair-type-maintenance: #91C009;
          --xa-repair-type-maintenance-light: #C5E4C4;

          --xa-repair-type-tires: #AAC7FA;
          --xa-repair-type-tires-light: #D4E1F8;

          --xa-repair-type-diagnosis: #B53E3E;
          --xa-repair-type-diagnosis-light: #FAE6D0;

          --xa-repair-type-others: #D2A120;
          --xa-repair-type-others-light: #FFF1CF;
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: "Poppins", sans-serif;
        }

        .chat-bot-activate {
          position: fixed;
          bottom: 30px;
          right: 35px;
          outline: none;
          border: none;
          height: 50px;
          width: 50px;
          display: flex;
          cursor: pointer;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: var(--xa-primary);
          transition: all 0.2s ease;
        }

        body.display-box .chat-bot-activate {
          transform: rotate(90deg);
        }
        .chat-bot-activate span {
          color: var(--xa-white);
          position: absolute;
        }

        .chat-bot-activate span:last-child,
        body.display-chat .chat-bot-activate span:first-child  {
          opacity: 0;
        }
        body.display-chat .chat-bot-activate span:last-child {
          opacity: 1;
        }

        .chatbot {
          position: fixed;
          right: 35px;
          bottom: 90px;
          width: 420px;
          background: var(--xa-table-light);
          border-radius: 15px;
          overflow: hidden;
          opacity: 0;
          pointer-events: none;
          transform: scale(0.5);
          transform-origin: bottom right;
          box-shadow: 0 0 48px 0 rgba(0,0,0,0.1),
                      0 24px 24px -28px rgba(0,0,0,0.5);
          transition: all 0.1s ease;
        }

        body.display-chat .chatbot {
          opacity: 1;
          pointer-events: auto;
          transform: scale(1);
        }
        .chatbot header {
          padding: 16px 0;
          position: relative;
          text-align: center;
          color: var(--xa-white);
          background: var(--xa-primary);
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        .chatbot header span {
          position: absolute;
          right: 15px;
          top: 50%;
          color:var(--xa-white);
          cursor: pointer;
          transform: translateY(-50%);
        }
        header h2 {
          font-size: 1.4rem;
        }
        .chatbot .chat-box {
          overflow-y: auto;
          height: 410px;
          padding: 30px 20px 100px;
        }

        .chatbot :where(.chat-box, textarea)::-webkit-scrollbar {
          width: 6px;
        }
        .chatbot :where(.chat-box, textarea)::-webkit-scrollbar-track {
          background: var(--xa-white);
          border-radius: 25px;
        }
        .chatbot :where(.chat-box, textarea)::-webkit-scrollbar-thumb {
          background: var(--xa-gray);
          border-radius: 25px;
        }
        .chat-box .chat {
          display: flex;
          list-style: none;
        }
        .chat-box .outgoing {
          margin: 20px 0;
          justify-content: flex-end;
        }
        .chat-box .incoming span {
          width: 32px;
          height: 32px;
          color: var(--xa-white);
          cursor: default;
          text-align: center;
          line-height: 32px;
          align-self: flex-end;
          background: var(--xa-primary);
          border-radius: 4px;
          margin: 0 10px 7px 0;
        }
        .chat-box .chat p {
          white-space: pre-wrap;
          padding: 12px 16px;
          border-radius: 10px 10px 0 10px;
          max-width: 75%;
          color: var(--xa-white);
          font-size: 0.95rem;
          background: var(--xa-primary);
        }
        .chat-box .incoming p {
          border-radius: 10px 10px 10px 0;
        }
        .chat-box .chat p.error {
          color: var(--xa-red);
          background: var(--xa-mild-bold-gray);
        }
        .chat-box .incoming p {
          color: var(--xa-black);
          background: var(--xa-light-gray-disabled);
        }
        .chatbot .chat-box-input {
          display: flex;
          gap: 5px;
          position: absolute;
          bottom: 0;
          width: 100%;
          background: var(--xa-table-light);
          padding: 3px 20px;
          border-top: 1px solid var(--xa-lighter-gray);
        }
        .chat-box-input textarea {
          height: 55px;
          width: 100%;
          border: none;
          outline: none;
          resize: none;
          max-height: 180px;
          padding: 15px 15px 15px 0;
          font-size: 0.95rem;
          background:inherit;
          color:var(--xa-black);
        }
        .chat-box-input span:not(.upload-file) {
          align-self: flex-end;
          color: var(--xa-primary);
          cursor: pointer;
          height: 55px;
          display: flex;
          align-items: center;
          visibility: hidden;
          font-size: 1.35rem;
        }
        .chat-box-input textarea:valid ~ span {
          visibility: visible;
        }

        .chat-input-action{
          background-color: transparent;
          border: none;
          margin-right: 4px;
          cursor: pointer;
        }

        .chat-input-action .svg-inline--fa {
          height: 20px;
          width: 20px;
          margin-top: 4px;
        }

        .chat-input-action .svg-inline--fa path{
          fill:var(--xa-black);
        }

 
        @media (max-width: 600px) {
          .chat-bot-activate {
            right: 20px;
            bottom: 20px;
          }
          .chatbot {
            right: 0;
            bottom: 0;
            height: 100%;
            border-radius: 0;
            width: 100%;
          }
          .chatbot .chat-box {
            height: 90%;
            padding: 25px 15px 100px;
          }
          .chatbot .chat-box-input {
            padding: 5px 15px;
          }
          .chatbot header span {
            display: block;
          }
        }

        .upload-file{
          display: flex !important;
          align-items: center;
          cursor: pointer;
        }

        .image-container {
          display: flex;
          gap: 4px;
        }

        .image-container.flex-box{
          flex-wrap: wrap;
        
        }

        .image-container.flex-box img {
          flex: 45%;
        }

        .image-container.flex-box div {
            flex: 45%;
            border-radius: 8px;
            opacity: 0.6;
            background-color: var(--xa-white);
            align-items: center;
            display: flex;
            justify-content: center;
            flex-direction: column;
            gap: 8px;
            cursor: pointer;
        }

        .image-container.flex-box div label{
          font-size: 28px;
          font-weight: 500;
        }

        .image-container.flex-box div span{
          font-size: 12px;
          font-weight: 400;
        }

        .image-container img {
          height: 100px;
          width: 100px;
          border-radius: 8px;
          cursor: pointer;
        }

        .file-attachment {
          display: flex;
          flex-direction: column;
          gap: 4px;
          align-items: flex-end;
        }

        .file-attachment>div {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          border-radius: 8px;
          gap: 4px;
          flex-direction: column;
          border-radius: 10px 10px 0 10px;
          max-width: 75%;
          padding: 12px 16px;
          white-space: pre-wrap;
          color: var(--xa-white);
          font-size: 0.95rem;
          background: var(--xa-primary);
        }

        .icon-file{
          display: flex;
          gap: 8px;
          max-width: 100%;
        }

        .action {
          cursor: pointer;
        }
        .file-name{
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          word-wrap: break-word !important;
        }

        .material-symbols-outlined{
          color:var(--xa-black);
        }
    </style>`
    const iframeStyle = `outline:none !important;visibility:visible !important;resize:none !important;box-shadow:none !important;overflow:visible !important;background:none !important;opacity:1 !important;filter:alpha(opacity=100) !important;-ms-filter:progid:DXImageTransform.Microsoft.Alpha(Opacity 1}) !important;-mz-opacity:1 !important;-khtml-opacity:1 !important; top:auto;right:20px;bottom:20px; left:auto; position:fixed !important; border:0 !important; min-height: 20px !important; min-width: 24px !important; max-height: 600px; max-width: 800px; padding:0 !important; margin:0 !important;-moz-transition-property:none !important;-webkit-transition-property:none !important;-o-transition-property:none !important; transition-property:none !important; transform:none !important;-webkit-transform:none !important;-ms-transform:none !important; width: 800px; height: 600px; display:block !important; z-index:1000001 !important; background-color:transparent !important; cursor:none !important; float:none !important; border-radius:unset !important; pointer-events:auto !important; clip:auto !important; color-scheme:light !important;`;
    const emojiButton = `<button class='chat-input-action' id='emoji-button'></button>`;
    const fileUploadButton = '<span class="material-symbols-outlined upload-file" id="attach_file">attach_file</span><input hidden type="file" id="file-upload">';
    const body = `<div class="chatbot"><header><h2>Chatbot</h2>
      <span class="close-btn material-symbols-outlined">close</span>
    </header>
    <ul class="chat-box">
      <li class="chat incoming">
        <span class="material-symbols-outlined">smart_toy</span>
        <p>Hi there 👋<br>How can I help you today?</p>
      </li>
    </ul>
    <div class="chat-box-input">
        ${emojiButton}
        ${fileUploadButton}
      <textarea placeholder="Enter a message..." spellcheck="false" required></textarea>
      <span id="send-btn" class="material-symbols-rounded">send</span>
    </div>
  </div>`;

  const iframeMediaStyle = '@media (max-width: 600px){#chat-bot-frame{top:0px !important;bottom:0px !important;right:0px !important;bottom:0px !important;max-height: 100vh !important;height: 100vh !important;width: 100vw !important;max-width: 100vw !important;}}';
 
const chatPrototype = {
    activateChatBot(){
        const iframe = document.createElement('iframe');
        const iframeStyleDiv = document.createElement('style');
        iframeStyleDiv.innerText = iframeMediaStyle;
        iframeStyleDiv.id = 'iframe-media';
        iframe.setAttribute('style',iframeStyle);
        iframe.id='chat-bot-frame';
        const params = this.apiKey ? `?api_key=${this.apiKey}"`: '';
        iframe.srcdoc = `<head>${style}<script src="https://cdn.jsdelivr.net/gh/amarshilpakar/chatbot/lib/emoji-picker.min.js"></script><script src="https://cdn.jsdelivr.net/gh/amarshilpakar/chatbot/lib/chatbot-core_1.min.js${params}"></script><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" /><link rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,400,1,0" /></head><button class="chat-bot-activate"><span class="material-symbols-rounded">mode_comment</span><span class="material-symbols-outlined">close</span></button>${body}`;
        document.body.append(iframe);
        document.head.append(iframeStyleDiv);
    },
    removeChatBot(){
      const iframe = document.getElementById('chat-bot-frame');
      iframe.remove();
      const iframeStyleDiv = document.getElementById('iframe-media');
      iframeStyleDiv.remove();
    }
}


function Chat(api_key){
    this.apiKey = api_key;
}

Object.assign(Chat.prototype, chatPrototype);

const chatWindow = new Chat('','');

window.activateChatWindow = ()=>{
  chatWindow.activateChatBot();
}

window.removeChatWindow = ()=>{
  chatWindow.removeChatBot();
}

window.updateChatBoxColor = (colorMapping) =>{
  const keys = Object.keys(colorMapping);
  for(const key of keys){
    document.getElementById("chat-bot-frame").contentWindow.document.documentElement.style.setProperty(`--${key}`, colorMapping[key]);
  }
}

(()=>{
    window.addEventListener('DOMContentLoaded', () => {
        const scripts = document.getElementsByTagName('script');
        for(const script of scripts){
            const src = script.src;
            if(src.includes('chatbot.min.js')){
                const url = new URL(src);
                const apiKey = url.searchParams.get('api_key');
                const chatMode = url.searchParams.get('mode');
                if(chatMode === 'auto'){
                    chatWindow.activateChatBot();
                }
            }
        }
    });
})()
