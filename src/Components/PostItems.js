import React from "react";

const PostItems =({post})=>
{
    return <>
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
        </div>    
    </>
}

export default PostItems;