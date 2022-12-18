import React from "react";

const Submit = () =>{
   return <div id="submit">

        <h4>Submit Item:</h4>
        <form>
            <input placeholder="Item Name"></input>
            <input placeholder="Description..."></input>
            <input placeholder="Price"></input>
            <input placeholder="location"></input><br></br>
            <div id="delivery">
                <label>Will Deliver?</label>
                <input type={"checkbox"}></input>
            </div>
            
        </form>
   </div>
   
}

export default Submit;