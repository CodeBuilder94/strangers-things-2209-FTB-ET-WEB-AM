import React from "react";
import {Link} from "react-router-dom";


const PostDetail = ({post}) =>
{
    const id = post._id;

    <div className="postDetails">    
        <div className = "postHeader">
            <h2 className="title">{post.title}</h2>
            <h3 className="poster">User: {post.author.username}</h3>
            <h3 className ="location">Location: {post.location}</h3>
        </div>
        <p className ="details"><em>Details: </em>{post.description}</p>
        <p className="price">{post.price}</p>
        <div className="times">
        <p className="createDate">Created: {post.createdAt.slice(0,10)} @ {post.createdAt.slice(12,19)}</p>
        <p className ="updateDate">Updated: {post.updatedAt.slice(0,10)} @ {post.updatedAt.slice(12,19)}</p>
        </div>    
    </div>
    
}

const Posts = (props) =>
{
    const {posts} = props;
    
    console.log(posts);
    return <ul>
        {
        posts.map((post, idx) =>{
        return <li key={idx} className="itemPost"><Link to ={"/posts/${post._id}"}>{post.title}</Link></li>
            })
        }
        </ul>
    
}

export default Posts;