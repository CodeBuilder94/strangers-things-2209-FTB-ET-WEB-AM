import React, {useState} from "react";
import { editPost } from "../api";

const EditPost =({setToEdit, post, setPosts}) =>
{

    const [newDelivery, setNewDelivery] =useState(post.willDeliver);
    const [newDescription, setNewDescription] = useState(post.description);
    const [newPrice, setNewPrice] = useState(post.price);

    const edit = async (ev)=>
    {
        ev.preventDefault();
        await editPost(post._id, newDelivery, newDescription, newPrice, setPosts);
        setToEdit(false);
    }

    const cancel =(ev) =>
    {
        ev.preventDefault();
        setToEdit(false);

    }

    return <div id="editGroup">
        <h2>Edit:</h2>
        <form id="editForm" onSubmit={edit}>
            <div>
                <label>Will Deliver:</label>
                <input type={"checkbox"} checked={newDelivery} onChange={ev => setNewDelivery(ev.target.checked)}></input>
            </div>
            <label>Details:</label>
            <textarea type="text" value={newDescription} onChange={ev => setNewDescription(ev.target.value)}></textarea>
            <label>Price:</label>
            <input id="newPrice" type="text" value={newPrice} onChange={ev => setNewPrice(ev.target.value)}></input>
            <button>Submit</button>
            <button onClick={cancel}>Cancel</button>
        </form>
    </div>
}

export default EditPost;