import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {Messages, MyMessages, EditPost, PostItems} from "/";
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
                        <PostItems post={post}/>
                        {post.isAuthor ? <button onClick={ev =>remove(ev, post._id)}>Delete</button>: null}
                        {post.isAuthor && !toEdit ? <button onClick={ev =>edit(ev, post._id)}>Edit</button>:null}
                        {toEdit && postId === post._id ? <EditPost setToEdit={setToEdit} post={post} setPosts={setPosts}/>: null}
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