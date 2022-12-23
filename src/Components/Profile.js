import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {Messages, MyMessages, EditPost} from "/";
import { removePost } from "../api";

const Profile =(props) =>{

    const {posts, setPosts, user, toEdit, setToEdit} =props;

    const [postId, setpostId] = useState("");
    
    const navigate = useNavigate();
   
    const remove = async (ev,id) =>
    {
        ev.preventDefault()
        await removePost(id, navigate, setPosts,"/profile");
    }

    const edit = async (ev, id) =>
    {
        ev.preventDefault();
        setToEdit(true);
        setpostId(id);
    }


    const myPosts = posts.filter((post) => post.isAuthor)

    return <div className="profile">
        <h1>{user.username}'s Profile</h1>
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
                        {post.isAuthor ? <button onClick={ev =>remove(ev, post._id)}>Delete</button>: null}
                        {post.isAuthor && !toEdit ? <button onClick={ev =>edit(ev, post._id)}>Edit</button>:null}
                        {toEdit && postId === post._id ? <EditPost setToEdit={setToEdit} post={post} setPosts={setPosts}/>: null}
                        </div>
                    </div>
                    <Messages post={post} setPosts={setPosts}/>
                </li>
               })
            }
        </div>
        <MyMessages user={user}/>
    </div>
}

export default Profile