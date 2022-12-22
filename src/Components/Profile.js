import React from "react";
import {useParams, useNavigate} from "react-router-dom";
import {Messages, MyMessages} from "/";
import { removePost } from "../api";

const Profile =(props) =>{

    const {posts, setPosts, user} =props;
    
    const navigate = useNavigate();
   
    const remove = async (ev,id) =>
    {
        ev.preventDefault()
        await removePost(id, navigate, setPosts,"/profile");
    }

    const edit = async (ev) =>
    {
        ev.preventDefault();

    }


    const myPosts = posts.filter((post) => post.isAuthor)

    return <div className="profile">
        <h1>Profile</h1>
        <h2>My Posts:</h2>
        <div>
            {  
               myPosts.map((post) =>{
                return <li key={post._id} className= "postDetails itemPost">
                    <div className="summery">
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
                        {post.isAuthor ? <span><button onClick={ev =>remove(ev, post._id)}>Delete</button> <button onClick={edit}>Edit</button></span> : null}
                        </div>
                    </div>
                    <Messages post={post}/>
                </li>
               })
            }
        </div>
        {<MyMessages user={user}/>}
    </div>
}

export default Profile