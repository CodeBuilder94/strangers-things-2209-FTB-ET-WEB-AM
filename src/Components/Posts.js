import React from "react";
import {Link} from "react-router-dom";

const Posts = (props) =>
{
    const {posts} = props;
    
    //console.log(posts);
    return <ul>
        {
        posts.map((post) =>{
        return <li key={post._id} className="itemPost"><div className="summery"><Link to ={`/posts/:${post._id}`}>{post.title}</Link><p>{post.description}</p></div></li>
            })
        }
        </ul>
    
}

export default Posts;