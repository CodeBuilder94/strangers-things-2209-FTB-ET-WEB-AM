import React from "react";

const Messages =({post}) =>
{
    const messages = post.message;
    if(messages){
        return <div className="messages">
        <h2>Messages:</h2>
        <div className="messageList">
        {
                messages.map((message) =>{
                return(
                    <div>
                        <h3>{message.username}</h3>
                        <p>{message.content}</p>
                    </div>
                )
            })
            
           
        }
        </div>
    </div>
    }
}

export default Messages;