import React from "react";
import {useParams, Link, useNavigate} from "react-router-dom";
import {removePost} from "../api"

const PostDetail = ({posts}) =>
{   
    const navigate = useNavigate();
    let id = useParams().id;
    id =id.slice(1);
    
    const post = posts.find(post => post._id === id)

    const remove = async (ev) =>
    {
        ev.preventDefault()
        await removePost(id, navigate);
    }

    const edit = async (ev) =>
    {
        ev.preventDefault();

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
                    <div className = "postHeader">
                        <h2 className="title">{post.title}</h2>
                        <h3 className="poster">User: {post.author.username}</h3>
                        <h3 className ="location">Location: {post.location}</h3>
                        <h3 className="delivery">Will Deliver: {post.willDeliver ? <span>Yes</span> : <span>No</span>}</h3>
                    </div>
                    <div className ="cardBody">
                        <p className ="details"><em>Details: </em>{post.description}</p>
                        <p className="price">Price: {post.price}</p>
                        <div className="times">
                        <p className="createDate">Created: {post.createdAt.slice(0,10)} @ {post.createdAt.slice(12,19)}</p>
                        <p className ="updateDate">Updated: {post.updatedAt.slice(0,10)} @ {post.updatedAt.slice(12,19)}</p>
                    </div>
                    {post.isAuthor ? <span><button onClick={remove}>Delete</button><button onClick={edit}>Edit</button> </span>: null}
                    </div>    
                    {!post.isAuthor ?<form className="message">
                        <input className="messageArea" placeholder="Talk to me..." type={"textarea"}></input>
                        <button>Send Message</button>
                    </form>: null}
                </div>
        )
    }
}

export default PostDetail;