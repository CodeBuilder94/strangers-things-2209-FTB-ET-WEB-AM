import React from "react";
import {useParams, Link} from "react-router-dom";

const PostDetail = ({posts, user}) =>
{   
    const author = user._id;


    let id = useParams().id;
    id =id.slice(1);
    
    const post = posts.find(post => post._id === id)

    const remove = (ev) =>
    {
        ev.preventDefault()
        const token = window.localStorage.getItem('token');

        //remove the item from the api
        fetch(`https://strangers-things.herokuapp.com/api/2209-ftb-et-web-am/posts/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }).then(response => response.json())
        .then(result => {
            console.log(result);
        })
        .catch(console.error);
    }

    if(!post)
    {
        return null;
    }

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
            {author === post.author ? <button onClick={remove}>Delete</button> : null}
            </div>    
        </div>
   )
}

export default PostDetail;