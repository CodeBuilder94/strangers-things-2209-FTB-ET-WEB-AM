import React from "react";

const Profile =(props) =>{

    const {posts, token} =props;

    const remove = async (ev) =>
    {
        ev.preventDefault()
        await removePost(id, navigate);
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
                        {post.isAuthor ? <span><button onClick={remove}>Delete</button> <button onClick={edit}>Edit</button></span> : null}
                        </div>
                    </div>
                </li>
               })
            }
        </div>
    </div>
}

export default Profile