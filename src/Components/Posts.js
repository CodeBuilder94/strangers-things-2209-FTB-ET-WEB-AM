import React from "react";
import {Link} from "react-router-dom";

const Posts = (props) =>
{
    const {posts, setPost} = props;
    
    console.log(posts);
    return <ul>
        {
        posts.map((post, idx) =>{
        return <li key={idx} className="itemPost"><Link to ={`/posts/${post._id}`}>{post.title}</Link></li>
            })
        }
        </ul>
    
}

export default Posts;