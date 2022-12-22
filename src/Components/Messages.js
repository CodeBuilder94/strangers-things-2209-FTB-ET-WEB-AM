import React from "react";

const Messages =({post}) =>
{
    const messages = post.messages;

            return <div className="messages">
        <h2>Messages:</h2>

        
        {messages?<div>
        {
                messages.map((message) =>{
                return(
                    <div key={message._id} className="messageList">
                        <h3><b>User: </b>{message.fromUser.username}</h3>
                        <p>"{message.content}"</p>
                    </div>
                )
            })

        }
        </div>: null}

    </div>
    
}

export default Messages;