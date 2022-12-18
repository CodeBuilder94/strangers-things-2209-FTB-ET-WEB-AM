import React from "react";
import {useParams, Link} from "react-router-dom";

const PostDetail = ({posts}) =>
{   
   console.log(posts);
    const id = useParams().id;
    console.log("what is var id: " + id);
    const post = posts.find(post => {post._id === id
        console.log("what is the post id: "+post._id)
    })
    //console.log(post);

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
            </div>
            <div className ="cardBody">
                <p className ="details"><em>Details: </em>{post.description}</p>
                <p className="price">{post.price}</p>
                <div className="times">
                <p className="createDate">Created: {post.createdAt.slice(0,10)} @ {post.createdAt.slice(12,19)}</p>
                <p className ="updateDate">Updated: {post.updatedAt.slice(0,10)} @ {post.updatedAt.slice(12,19)}</p>
            </div>
            </div>    
        </div>
   )
}

export default PostDetail;