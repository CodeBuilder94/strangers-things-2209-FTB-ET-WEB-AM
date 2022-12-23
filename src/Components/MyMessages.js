import React from "react";

const MyMessages = ({user}) =>
{
    let messages = user.messages;
    
   
    
    //filter out the messages that aren't the users
    if(messages){
            messages = messages.filter((message)=>
        {   
            return message.fromUser._id === user._id;
        })
    }
    
    //give back the messages the user sent
    return(
        <div id="Sent">
            <h2>My Sent Messages:</h2>
            {messages?<ul id="sentList">
                {
                  messages.map((message, idx) =>{
                        return <li key={idx} className="messageList">
                            <h3>{message.post.title}</h3>
                            <p>"{message.content}"</p>
                            </li>
                    })
                }
            </ul>:null}
        </div>
    )
}

export default MyMessages;