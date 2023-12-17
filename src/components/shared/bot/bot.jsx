import React from 'react';
import "./bot.scss";

const Bot = () => {
    return (
        <>
            <button className="chatbot-toggler" id='chatbot-toggler' onClick={handleClick}>
                <span className="material-symbols-rounded"><i className="bi bi-person-raised-hand"></i></span>
            </button>
            <section className="chat-container" id='chat-container'>
                <div className="chat-header">
                    <div class="my-2 flex items-center justify-centerw-40">
                        <div class="flex-1">
                        </div>
                        <h2><i className="bi bi-robot"></i> Asistente Virtual</h2>
                        <div class="flex-1">
                            <button onClick={closeChat} className='btn-close'>
                                <span><i class="bi bi-x-octagon"></i></span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="chat-log" id="chatLog">
                    <div className="chat-message bot">
                        <div id="chat"></div>
                    </div>
                </div>
                <div className="chat-input">
                    <input type="text" id="user-input" placeholder="Ingrese su mensaje" />
                    <button id="sendBtn" onClick={sendMessage} onKeyDown={sendMessage}><i className="fas fa-paper-plane"></i></button>
                    <button onclick={startSpeechRecognition} className='ml-3'><i className="fas fa-solid fa-microphone"></i></button>
                </div>
            </section>
        </>
    )
}

export default Bot;