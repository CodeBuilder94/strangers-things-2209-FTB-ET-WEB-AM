import React, {useState} from "react";
import { addPost } from "../api";

const Submit = ({setPosts}) =>{

    //create useStates for each of the fields
    const [itemName, setItemName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [location, setLocation] =useState("[On Request]");
    const [deliver, setDeliver] =useState(false);


    const post = async (ev) =>
    {
        ev.preventDefault();

        //check to see if any fields that need items are blank
        if(itemName==="" ||description==="" ||price==="")
        {
            return;
        }

        await addPost(itemName, description, price, location, deliver);
    }

   return <div id="submit">

        <h4>Submit Item:</h4>
        <form id="submitDetails" onSubmit={post}>
            <label>Item Name</label>
            <input type="text" placeholder="Item Name" value={itemName} onChange={ev => setItemName(ev.target.value)}></input>
            <label>Description</label>
            <textarea id="descriptionBox" type="text" placeholder="Description..." value={description} onChange={ev => setDescription(ev.target.value)}></textarea>
            <label>Price</label>
            <input type="text" placeholder="Price" value={price} onChange={ev => setPrice(ev.target.value)}></input>
            <label>Location</label>
            <input type="text" placeholder="Location" value={location} onChange={ev => setLocation(ev.target.value)}></input><br></br>
            <div id="delivery">
                <label>Will Deliver?</label>
                <input type={"checkbox"} value={deliver} onChange={ev => setDeliver(ev.target.checked)}></input>
            </div>
            <button>Submit</button>
        </form>
   </div>
   
}

export default Submit;