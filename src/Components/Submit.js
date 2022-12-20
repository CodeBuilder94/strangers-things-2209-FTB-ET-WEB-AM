import React, {useState} from "react";

const Submit = () =>{

    //create useStates for each of the fields
    const [itemName, setItemName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [location, setLocation] =useState("[On Request]");
    const [deliver, setDeliver] =useState(false);


    const post =(ev) =>
    {
        ev.preventDefault();

        //check to see if any fields that need items are blank
        if(itemName==="" ||description==="" ||price==="")
        {
            return;
        }

       const token = window.localStorage.getItem('token');
       

       fetch('https://strangers-things.herokuapp.com/api/2209-ftb-et-web-am/posts', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                post: {
                title: itemName,
                description: description,
                price: `$${price}`,
                location: location,
                willDeliver: deliver
                }
            })
        }).then(response => response.json())
        .then(result => {
            console.log(result);
            setItemName("");
            setDescription("");
            setPrice("");
            setLocation("[On Request]");
            setDeliver(false);
        })
        .catch(console.error);

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
                <input type={"checkbox"} value={deliver} onChange={ev => setDeliver(ev.target.value)}></input>
            </div>
            <button>Submit</button>
        </form>
   </div>
   
}

export default Submit;