import React, {useState} from "react";
import {useParams, Link, useNavigate} from "react-router-dom";
import {removePost, sendMessage} from "../api"
import {Messages, EditPost, PostItems} from "/";

const PostDetail = ({posts, setPosts, toEdit, setToEdit}) =>
{   
    const navigate = useNavigate();
    let id = useParams().id;
    id =id.slice(1);
    
    const [postMessage, setPostMessage] = useState("");

    const post = posts.find(post => post._id === id)

    const remove = async (ev) =>
    {
        ev.preventDefault()
        await removePost(id, navigate, setPosts,"/posts");
    }

    const edit = async (ev) =>
    {
        ev.preventDefault();
        setToEdit(true);

    }

    const message = async (ev) =>
    {
        ev.preventDefault();
        await sendMessage(id,postMessage, setPostMessage);
    }

    if(!post)
    {
        return null;
    }
    if(post.active)
    {
        return( 
                <div className="postDetails"> 
                    <h6><Link  to ="/posts">Back to Posts</Link></h6>   
                    <PostItems post={post}/>
                    {post.isAuthor ? <button onClick={remove}>Delete</button>: null}
                    {post.isAuthor && !toEdit ? <button onClick={edit}>Edit</button>: null}
                    {toEdit ? <EditPost setToEdit={setToEdit} post={post} setPosts={setPosts}/>:null}
                    
                    {!post.isAuthor ?<form className="message" onSubmit={message}>
                        <h2>Message User:</h2>
                        <textarea className="messageArea" placeholder="Talk to me..." type="text" value={postMessage} onChange={ev => setPostMessage(ev.target.value)}></textarea>
                        <button>Send Message</button>
                    </form>: null}
                   {post.isAuthor ? <Messages post={post} setPosts={setPosts}/>:null}
                </div>
        )
    }
}

export default PostDetail;