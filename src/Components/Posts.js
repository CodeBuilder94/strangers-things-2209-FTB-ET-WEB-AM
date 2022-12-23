import React from "react";
import {Link} from "react-router-dom";
import { searcher } from "../api";

const Posts = (props) =>
{
    const {posts, loggedIn, searchTerm} = props;

        
    const filtered = posts.filter(post => searcher(post, searchTerm));

    const toDisplay = searchTerm !=="" ? filtered: posts;
       
    return <ul>
        {
        toDisplay.map((post) =>{
        return <li key={post._id} className={post.isAuthor ? "myPost itemPost" : "itemPost"}>
                <div className="summery">
                  { loggedIn ?<Link to ={`/posts/:${post._id}`}>{post.title}</Link>:<p className="title"><b>{post.title}</b></p>}<p>{post.description}</p>
        </div>
            </li>
            })
        }
        </ul>
    
}

export default Posts;